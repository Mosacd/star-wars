import { fetchMultipleResources } from "@/API";
import type { Film, Species, Starship, Vehicle } from "@/types";
import { useEffect, useState } from "react";

const Dropdown = ({ name, link }: { name: string; link: string[] }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [items, setItems] = useState<
    (Film | Vehicle| Starship | Species)[] | null
  >(null);

  useEffect(() => {
    const loadItems = async () => {
      try {
        const data = await fetchMultipleResources<
          Film | Vehicle | Starship | Species
        >(link);
        setItems(data);
      } catch (err) {
        console.error("Failed to fetch dropdown items:", err);
        setItems(null);
      }
    };

    loadItems();
  }, []);

  return (
    <div className="w-full flex flex-col gap-2">
      <div
        className="bg-black border-b-2 cursor-pointer hover:scale-102 duration-300 border-[#B39D77] w-full px-5 py-2 flex justify-between rounded-[5px]"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <h1 className="text-[#B39D77] flex items-center gap-5 text-[40px] font-semibold">
          {name}
        </h1>
        <div
          className={`text-[#B39D77] flex items-center text-[40px] duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <svg
            className="size-6"
            viewBox="0 -4.5 20 20"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            fill="#B39D77"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <title>arrow_down [#338]</title> <desc>Created with Sketch.</desc>{" "}
              <defs> </defs>
              <g
                id="Page-1"
                stroke="none"
                strokeWidth="1"
                fill="none"
                fillRule="evenodd"
              >
                <g
                  id="Dribbble-Light-Preview"
                  transform="translate(-220.000000, -6684.000000)"
                  fill="#B39D77"
                >
                  {" "}
                  <g id="icons" transform="translate(56.000000, 160.000000)">
                    {" "}
                    <path
                      d="M164.292308,6524.36583 L164.292308,6524.36583 C163.902564,6524.77071 163.902564,6525.42619 164.292308,6525.83004 L172.555873,6534.39267 C173.33636,6535.20244 174.602528,6535.20244 175.383014,6534.39267 L183.70754,6525.76791 C184.093286,6525.36716 184.098283,6524.71997 183.717533,6524.31405 C183.328789,6523.89985 182.68821,6523.89467 182.29347,6524.30266 L174.676479,6532.19636 C174.285736,6532.60124 173.653152,6532.60124 173.262409,6532.19636 L165.705379,6524.36583 C165.315635,6523.96094 164.683051,6523.96094 164.292308,6524.36583"
                      id="arrow_down-[#338]"
                    >
                      {" "}
                    </path>{" "}
                  </g>{" "}
                </g>{" "}
              </g>{" "}
            </g>
          </svg>
        </div>
      </div>

      <div
        className={`w-full bg-black flex flex-col gap-5 px-5 rounded-[5px] text-[#B39D77] overflow-hidden transition-all duration-500 ${
          isOpen ? "max-h-[2000px] py-5" : "max-h-0 py-0"
        }`}
      >
        {(items?.length === 0 || items === null) && (
          <div className="text-[24px] font-semibold w-fit">
            <h2>Data Missing</h2>
          </div>
        )}

        {name === "Films" &&
          (items as Film[])?.map((item, index) => {
            return (
              <div key={index} className="flex flex-col gap-2">
                <h2 className="text-[24px] font-semibold w-fit border-b-2">
                  {item.title}
                </h2>
                <h3 className="font-semibold text-[18px]">
                  Directed by {item.director}
                </h3>
                <h3 className="font-semibold">Producers: {item.producer}</h3>
                <h3 className="font-semibold">
                  Realese Date: {item.release_date}
                </h3>
                <div>
                  <h4 className="font-semibold text-[18px]">Synopsis:</h4>
                  {item.opening_crawl}
                </div>
              </div>
            );
          })}

        {name === "Vehicles" &&
          (items as Vehicle[])?.map((item, index) => {
            return (
              <div key={index} className="flex flex-col gap-2">
                <h2 className="text-[24px] font-semibold w-fit border-b-2">
                  {item.name}
                </h2>
                <h3 className="font-semibold text-[18px]">
                  Model: {item.model}
                </h3>
                <h3 className="font-semibold text-[18px]">
                  Manufacture: {item.manufacturer}
                </h3>
                <h3 className="font-semibold text-[18px]">
                  Cost (in credits): {item.cost_in_credits}
                </h3>
                <h3 className="font-semibold text-[18px]">
                  Length: {item.length}
                </h3>
                <h3 className="font-semibold text-[18px]">
                  Max Atmosphering Speed: {item.max_atmosphering_speed}
                </h3>
                <h3 className="font-semibold text-[18px]">Crew: {item.crew}</h3>
                <h3 className="font-semibold text-[18px]">
                  Passengers: {item.passengers}
                </h3>
                <h3 className="font-semibold text-[18px]">
                  Cargo Capacity: {item.cargo_capacity}
                </h3>
                <h3 className="font-semibold text-[18px]">
                  Consumables: {item.consumables}
                </h3>
                <h3 className="font-semibold text-[18px]">
                  Vehicle Class: {item.vehicle_class}
                </h3>
              </div>
            );
          })}

        {name === "Starships" &&
          (items as Starship[])?.map((item, index) => {
            return (
              <div key={index} className="flex flex-col gap-2">
                <h2 className="text-[24px] font-semibold w-fit border-b-2">
                  {item.name}
                </h2>
                <h3 className="font-semibold text-[18px]">
                  Model: {item.model}
                </h3>
                <h3 className="font-semibold text-[18px]">
                  Manufacture: {item.manufacturer}
                </h3>
                <h3 className="font-semibold text-[18px]">
                  Cost (in credits): {item.cost_in_credits}
                </h3>
                <h3 className="font-semibold text-[18px]">
                  Length: {item.length}
                </h3>
                <h3 className="font-semibold text-[18px]">
                  Max Atmosphering Speed: {item.max_atmosphering_speed}
                </h3>
                <h3 className="font-semibold text-[18px]">Crew: {item.crew}</h3>
                <h3 className="font-semibold text-[18px]">
                  Passengers: {item.passengers}
                </h3>
                <h3 className="font-semibold text-[18px]">
                  Cargo Capacity: {item.cargo_capacity}
                </h3>
                <h3 className="font-semibold text-[18px]">
                  Consumables: {item.consumables}
                </h3>
                <h3 className="font-semibold text-[18px]">
                  Hyperdrive Rating: {item.hyperdrive_rating}
                </h3>
                <h3 className="font-semibold text-[18px]">MGLT: {item.MGLT}</h3>
                <h3 className="font-semibold text-[18px]">
                  Starship Class: {item.starship_class}
                </h3>
              </div>
            );
          })}

        {name === "Species" &&
          (items as Species[])?.map((item, index) => {
            return (
              <div key={index} className="flex flex-col gap-2">
                <h2 className="text-[24px] font-semibold w-fit border-b-2">
                  {item.name}
                </h2>
                <h3 className="font-semibold text-[18px]">
                  Classification: {item.classification}
                </h3>
                <h3 className="font-semibold text-[18px]">
                  Designation: {item.designation}
                </h3>
                <h3 className="font-semibold text-[18px]">
                  Average Height: {item.average_height}
                </h3>
                <h3 className="font-semibold text-[18px]">
                  Skin Colors: {item.skin_colors}
                </h3>
                <h3 className="font-semibold text-[18px]">
                  Hair Colors: {item.hair_colors}
                </h3>
                <h3 className="font-semibold text-[18px]">
                  Eye Colors: {item.eye_colors}
                </h3>
                <h3 className="font-semibold text-[18px]">
                  Average Lifespan: {item.average_lifespan}
                </h3>
                <h3 className="font-semibold text-[18px]">
                  Homeworld: {item.homeworld}
                </h3>
                <h3 className="font-semibold text-[18px]">
                  Language: {item.language}
                </h3>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Dropdown;
