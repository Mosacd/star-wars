import img from "@/assets/5b56caff917096364317406080258eca 2.png"
import Dropdown from "@/components/dropdown";
import type { CharacterInfo, CharacterResponse } from "@/types";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";

const CharacterPage = () => {

    const [character, setCharacter] = useState<CharacterInfo | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const { name } = useParams()


    useEffect(() => {
      const fetchFunc = async () => {
        setIsLoading(true);
        const response = await fetch(`https://swapi.py4e.com/api/people/?search=${name}`);
        const json:CharacterResponse = await response.json();
        const luke = json.results[0];
        setCharacter(luke);
        setIsLoading(false);
      };
    
      fetchFunc();
    }, [name]);

    if(isLoading || character == null) {
        return(
  <div className="m-auto w-fit text-4xl text-[#EFD19F] mt-10">
    {isLoading ? (
      "Loading..."
    ) : (
      "Failed to get data"
    )}
  </div>)
}

    return (
        <div className="w-full my-[120px]">
            <div className="max-w-10/12 m-auto">
            <h1 className="text-[#B39D77] text-[48px] font-semibold mb-[120px]">{character?.name}</h1>
            <div className="flex justify-between">
                <div className="w-full flex flex-col gap-2 max-w-4xl">
                  <Dropdown name={"Films"} link={character.films}/>
                  <Dropdown name={"Species"} link={character.species}/>
                  <Dropdown name={"Vehicles"} link={character.vehicles}/>
                  <Dropdown name={"Starships"} link={character.starships}/>
                </div>
            <div className="flex flex-col h-fit bg-black gap-[40px] rounded-[16px] p-[24px] w-full max-w-[480px]">
                <img className="rounded-full" src={img} alt="character" />
                <div className="flex text-[#B39D77]  text-[24px] flex-col items-start py-[24px] px-[32px] border-1 border-[#B39D77] rounded-[16px]">
                        <p>Name: {character?.name}</p>
                        <p>Height:{character?.height} cm</p>
                        <p>Mass: {character?.mass} kg</p>
                         <p>Hair color: {character?.hair_color}</p>
                          <p>Skin color: {character?.skin_color}</p>
                           <p>Eye color: {character?.eye_color}</p>
                            <p>Birth year: {character?.birth_year}</p>
                             <p>Gender: {character?.gender}</p>
                </div>
            </div>
            </div>
            </div>
        </div>
    )

}



export default CharacterPage