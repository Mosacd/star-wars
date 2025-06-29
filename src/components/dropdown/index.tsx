import type { Film, Species, Starship, Vehicle } from "@/types";
import { useEffect, useState } from "react";

const Dropdown = ({ name, link }: { name: string; link: string[] }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [items, setItems] = useState<
    Film[] | Vehicle[] | Starship[] | Species[] | null
  >(null);

  useEffect(() => {
    const fetchFunc = async () => {
      const responses = await Promise.all(link.map((url) => fetch(url)));
      const data = await Promise.all(responses.map((res) => res.json()));
      setItems(data);
    };

    fetchFunc();
  }, []);

  return (
    <div className="w-full flex flex-col gap-2">
      <div
        className="bg-black border-b-2 cursor-pointer border-[#B39D77] w-full px-5 py-2 flex justify-between rounded-[5px]"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <h1 className="text-[#B39D77] text-[40px] font-semibold">{name}</h1>
        <div
          className={`text-[#B39D77] text-[40px] duration-300 ${
            isOpen ? "" : "rotate-180"
          }`}
        >
          ^
        </div>
      </div>

      <div
        className={`w-full bg-black flex flex-col gap-5 px-5 rounded-[5px] text-[#B39D77] overflow-hidden transition-all duration-500 ${
          isOpen ? "max-h-[2000px] py-5" : "max-h-0 py-0"
        }`}
      >
        {name === "Films" &&
          (items as Film[])?.map((item,index) => {
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
          (items as Vehicle[])?.map((item,index) => {
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
