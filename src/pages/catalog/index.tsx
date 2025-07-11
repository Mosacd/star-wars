import { fetchCharacters } from "@/API";
import Card from "@/components/card";
import { useDebounce } from "@/debounce";
import type { CharacterInfo } from "@/types";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const Catalog = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialPage = parseInt(searchParams.get("page") || "1", 10); //10 as in parse as base-10 decimal. had me confused for a bit
  const initialSearch = searchParams.get("search") || "";

  const [page, setPage] = useState(Number(initialPage));
  const [data, setData] = useState<CharacterInfo[] | null>(null);
  const [hasnext, setHasNext] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [searchTerm, setSearchTerm] = useState<string>(initialSearch);


  const debouncedSearchTerm = useDebounce(searchTerm, 300);


  const updateUrl = (newPage: number, newSearchTerm = searchTerm) => {
    const params = new URLSearchParams();
    if (newSearchTerm) params.set("search", newSearchTerm);
    params.set("page", newPage.toString());
    setSearchParams(params);
  };

  const handleNext = () => {
    if (hasnext) {
      const nextPage = page + 1;
      setPage(nextPage);
      updateUrl(nextPage);
    }
  };

  const handleNum = (page: number) => {
    setPage(page);
    updateUrl(page);
  };

  const handlePrev = () => {
    if (page > 1) {
      const prevPage = page - 1;
      setPage(prevPage);
      updateUrl(prevPage);
    }
  };

  useEffect(() => {
    const controller = new AbortController();

    const loadCharacters = async () => {
      setIsLoading(true);

      try {
        const data = await fetchCharacters(page, debouncedSearchTerm, controller.signal);
        setData(data.results);
        setHasNext(Boolean(data.next));
      } catch (err) {
        if (err instanceof Error && err.name === "AbortError") {
          console.log("Fetch aborted");
        } else {
          console.error("Fetch error:", err);
          setData(null);
        }
      } finally {
        setIsLoading(false);
      }
    };

    loadCharacters();

    return () => {
      controller.abort();
    };
  }, [page, debouncedSearchTerm]);

  

  console.log("re-render");

  const getPageNumbers = () => {
    const pages = [];
    if (page > 1) pages.push(page - 1);
    pages.push(page);
    if (hasnext) pages.push(page + 1);
    return pages;
  };


  return (
    <div className="w-full min-h-screen px-5 sm:px-10">
      <h1 className="w-fit text-center m-auto text-4xl md:text-5xl lg:text-6xl text-[#EFD19F] font-bold mt-10">
        Start Wars Catalog
      </h1>
      <input
        type="text"
        placeholder="Search characters..."
        value={searchTerm}
        onChange={(e) => {
          const term = e.target.value;
          setSearchTerm(term);
          setPage(1);
          updateUrl(1, term); // Setting page=1 & search
        }}
        className="w-full max-w-4xl text-2xl mt-20 text-[#EFD19F] focus:outline-none focus:border-[#EFD19F] focus:ring-0 bg-black m-auto block border-[#EFD19F] border-2 px-4 py-2 rounded-lg"
      />

      {(isLoading || data == null || data.length === 0) && (
        <div className="m-auto w-fit text-4xl text-[#EFD19F] mt-20">
          {isLoading ? (
            <div className="w-20 h-20 border-6 border-t-[#EFD19F] border-black rounded-full animate-spin"></div>
          ) : searchTerm ? (
            <span className="max-sm:text-2xl max-xl:text-3xl">
            Wrong character name
            </span>
          ) : (
            "Failed to get data"
          )}
        </div>
      )}

      <div className="m-auto mt-10 w-fit grid grid-cols-2 md:grid-cols-3 max-sm:gap-x-2 max-lg:md:gap-x-2 gap-x-10 gap-y-10 justify-items-center py-6">
        {!isLoading && data?.map((p) => <Card name={p?.name} />)}
      </div>

      <div className="flex w-full text-xl 2xl:text-2xl justify-center mb-20 gap-1 sm:gap-3 mt-5">
        <button
          disabled={page === 1}
          onClick={handlePrev}
          className={`bg-black w-full max-w-[150px] text-[#F0D09D] border-[#F0D09D] font-semibold  px-2 xs:px-5 py-2 border-2 rounded-lg  hover:-translate-y-1 hover:shadow-[0px_2px_0px_#B39D77] duration-300 ${
            page === 1 ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
          }`}
        >
          {"<"} Prev
        </button>
        {getPageNumbers().map((pg) => (
          <button
            key={pg}
            onClick={() => handleNum(pg)}
            className={`w-full max-w-[70px] sm:max-w-[100px] px-5 py-2 border-2 cursor-pointer font-semibold rounded-lg hover:-translate-y-1 duration-300
      ${
        pg === page
          ? "bg-[#F0D09D] text-black border-black hover:shadow-[0px_2px_0px_black]"
          : "bg-black text-[#F0D09D] hover:shadow-[0px_2px_0px_#B39D77]"
      }
      border-[#F0D09D]`}
          >
            {pg}
          </button>
        ))}

        <button
          disabled={!hasnext || isLoading}
          onClick={handleNext}
          className={`bg-black w-full max-w-[150px] text-[#F0D09D] border-[#F0D09D] font-semibold px-2 xs:px-5 py-2 border-2 rounded-lg hover:-translate-y-1 hover:shadow-[0px_2px_0px_#B39D77] duration-300 ${
            !hasnext || isLoading
              ? "opacity-50 cursor-not-allowed"
              : "cursor-pointer"
          }`}
        >
          Next {">"}
        </button>
      </div>
    </div>
  );
};

export default Catalog;
