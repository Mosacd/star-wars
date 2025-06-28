import { useEffect, useState } from 'react'
import './App.css'
import Card from './components/card';

function App() {
  
  const initialPage = new URLSearchParams(window.location.search).get("page") || 1;

  const [page, setPage] = useState(Number(initialPage));
  const [data, setData] = useState([]);
  const [hasnext,setHasNext] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(true);
const [searchTerm, setSearchTerm] = useState<string>("");

    const updateUrl = (newPage: number) => {
    const params = new URLSearchParams(window.location.search);
    params.set("page", newPage.toString());
    window.history.pushState({}, '', `${window.location.pathname}?${params.toString()}`);
  };

   const handleNext = () => {
    if(hasnext){
    const nextPage = page + 1;
    setPage(nextPage);
    updateUrl(nextPage);
    }
  };

    const handleNum = (num:number) => {
    const nextPage = num
    setPage(nextPage);
    updateUrl(nextPage);
  };

  const handlePrev = () => {
    if (page > 1) {
      const prevPage = page - 1;
      setPage(prevPage);
      updateUrl(prevPage);
    }
  };

useEffect(() => {
  const fetchFunc = async () => {
    setIsLoading(true);
    const url = searchTerm
      ? `https://swapi.py4e.com/api/people/?search=${searchTerm}`
      : `https://swapi.py4e.com/api/people/?page=${page}`;

    const res = await fetch(url);
    const json = await res.json();

    setData(json.results);
    setHasNext(Boolean(json.next));
    setIsLoading(false);
  };

  fetchFunc();
}, [page, searchTerm]);


console.log("re-render")

  return (
    <div className='w-full min-h-screen'>
      <h1 className='w-fit m-auto text-6xl text-[#EFD19F] font-bold mt-10'>
      Start Wars Catalog
      </h1>
      <input
  type="text"
  placeholder="Search characters..."
  value={searchTerm}
  onChange={(e) => {
    setSearchTerm(e.target.value);
    setPage(1);
    updateUrl(1);
  }}
  className="w-4xl text-2xl mt-20 text-[#EFD19F] focus:outline-none focus:border-[#EFD19F] focus:ring-0 bg-black m-auto block border-[#EFD19F] border-2 px-4 py-2 rounded-lg"
/>

{(isLoading || data == null || data.length === 0) && (
  <div className="m-auto w-fit text-4xl text-[#EFD19F] mt-10">
    {isLoading ? (
      "Loading..."
    ) : searchTerm ? (
      "Wrong character name"
    ) : (
      "Failed to get data"
    )}
  </div>
)}

      <div className= 'm-auto mt-10 w-fit grid grid-cols-3 gap-x-10 gap-y-10 justify-items-center py-6'>
         {!isLoading && data.map(p => <Card name={p?.name}/>)}
         </div>

<div className="flex w-full text-2xl justify-center mb-20 gap-3 mt-5">
          <button disabled = {page === 1} onClick={handlePrev} className={`bg-black w-full max-w-[150px] text-[#F0D09D] border-[#F0D09D] font-semibold  px-5 py-2 border-2 rounded-lg hover:bg-gray-800 ${page === 1 ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}>
           {"<"} Prev
          </button>
          { page != 1 &&
            <button disabled = {page === 1} onClick={() => handleNum(page-1)} className={`bg-black w-full max-w-[100px] text-[#F0D09D] border-[#F0D09D] font-semibold  px-5 py-2 border-2 rounded-lg hover:bg-gray-800 ${page === 1 ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}>
           {page-1}
          </button>
          }
           <button disabled = {searchTerm != ""} onClick={() => handleNum(page)} className={`bg-black w-full max-w-[100px] text-[#F0D09D] border-[#F0D09D] font-semibold  px-5 py-2 border-2 rounded-lg hover:bg-gray-800 ${searchTerm != "" ? "opacity-50 cursor-not-allowed" : "cursor-pointer"} `}>
           {page}
          </button>
          {hasnext &&  <button disabled = {!handleNext || searchTerm != ""} onClick={() => handleNum(page+1)} className={`bg-black w-full max-w-[100px] text-[#F0D09D] border-[#F0D09D] font-semibold  px-5 py-2 border-2 rounded-lg hover:bg-gray-800 ${!handleNext || searchTerm != ""  ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}>
           {page+1}
          </button>}
          <button disabled={!hasnext || isLoading || searchTerm !== ""} onClick={handleNext} className={`bg-black w-full max-w-[150px] text-[#F0D09D] border-[#F0D09D] font-semibold px-5 py-2 border-2 rounded-lg hover:bg-gray-800 ${
    (!hasnext || isLoading || searchTerm !== "") ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
  }`}>
            Next {">"}
          </button>
        </div> 
      
    </div>
  )
}

export default App
