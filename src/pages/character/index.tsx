import { fetchCharacterByName } from "@/API";
import img from "@/assets/5b56caff917096364317406080258eca 2.png";
import Dropdown from "@/components/dropdown";
import type { CharacterInfo } from "@/types";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const CharacterPage = () => {
  const [character, setCharacter] = useState<CharacterInfo | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const { name } = useParams();

  useEffect(() => {
    const loadCharacter = async () => {
      setIsLoading(true);
      try {
        const data = await fetchCharacterByName(name || "");
        setCharacter(data);
      } catch (err) {
        console.error(err);
        setCharacter(null);
      } finally {
        setIsLoading(false);
      }
    };

    loadCharacter();
  }, [name]);

  if (isLoading || character == null) {
    return (
      <div className="m-auto w-fit text-4xl sm:text-5xl px-5 xl:text-7xl text-[#EFD19F] mt-30">
        {isLoading ? (
          <div className="w-25 h-25 border-8 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border-t-[#EFD19F] border-black rounded-full animate-spin"></div>
        ) : (
          <div className="flex flex-col gap-20 items-center">
            <h1>Failed to get data</h1>
            <Link
              to={"/"}
              className="text-3xl border-2 gap-2 cursor-pointer hover:scale-105 duration-300 w-full max-w-xs h-18 rounded-lg bg-black flex items-center justify-center"
            >
              <svg
                className="size-10"
                viewBox="0 0 24 24"
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
                  <title>back_fill</title>{" "}
                  <g
                    id="页面-1"
                    stroke="none"
                    strokeWidth="1"
                    fill="none"
                    fillRule="evenodd"
                  >
                    {" "}
                    <g
                      id="Arrow"
                      transform="translate(-242.000000, -48.000000)"
                    >
                      {" "}
                      <g
                        id="back_fill"
                        transform="translate(242.000000, 48.000000)"
                      >
                        {" "}
                        <path
                          d="M24,0 L24,24 L0,24 L0,0 L24,0 Z M12.5934901,23.257841 L12.5819402,23.2595131 L12.5108777,23.2950439 L12.4918791,23.2987469 L12.4918791,23.2987469 L12.4767152,23.2950439 L12.4056548,23.2595131 C12.3958229,23.2563662 12.3870493,23.2590235 12.3821421,23.2649074 L12.3780323,23.275831 L12.360941,23.7031097 L12.3658947,23.7234994 L12.3769048,23.7357139 L12.4804777,23.8096931 L12.4953491,23.8136134 L12.4953491,23.8136134 L12.5071152,23.8096931 L12.6106902,23.7357139 L12.6232938,23.7196733 L12.6232938,23.7196733 L12.6266527,23.7031097 L12.609561,23.275831 C12.6075724,23.2657013 12.6010112,23.2592993 12.5934901,23.257841 L12.5934901,23.257841 Z M12.8583906,23.1452862 L12.8445485,23.1473072 L12.6598443,23.2396597 L12.6498822,23.2499052 L12.6498822,23.2499052 L12.6471943,23.2611114 L12.6650943,23.6906389 L12.6699349,23.7034178 L12.6699349,23.7034178 L12.678386,23.7104931 L12.8793402,23.8032389 C12.8914285,23.8068999 12.9022333,23.8029875 12.9078286,23.7952264 L12.9118235,23.7811639 L12.8776777,23.1665331 C12.8752882,23.1545897 12.8674102,23.1470016 12.8583906,23.1452862 L12.8583906,23.1452862 Z M12.1430473,23.1473072 C12.1332178,23.1423925 12.1221763,23.1452606 12.1156365,23.1525954 L12.1099173,23.1665331 L12.0757714,23.7811639 C12.0751323,23.7926639 12.0828099,23.8018602 12.0926481,23.8045676 L12.108256,23.8032389 L12.3092106,23.7104931 L12.3186497,23.7024347 L12.3186497,23.7024347 L12.3225043,23.6906389 L12.340401,23.2611114 L12.337245,23.2485176 L12.337245,23.2485176 L12.3277531,23.2396597 L12.1430473,23.1473072 Z"
                          id="MingCute"
                          fillRule="nonzero"
                        >
                          {" "}
                        </path>{" "}
                        <path
                          d="M2.61422,5.42597 C2.8464,4.86546 3.39335,4.5 4.00004,4.5 L13.9999979,4.5 C18.1422,4.5 21.4999979,7.85786 21.4999979,12 C21.4999979,16.1421 18.1422,19.5 13.9999979,19.5 L5.00004,19.5 C4.17162,19.5 3.50004,18.8284 3.50004,18 C3.50004,17.1716 4.17162,16.5 5.00004,16.5 L13.9999979,16.5 C16.4853,16.5 18.4999979,14.4853 18.4999979,12 C18.4999979,9.51472 16.4853,7.5 13.9999979,7.5 L7.62136,7.5 L8.5607,8.43934 C9.14649,9.02513 9.14649,9.97487 8.5607,10.5607 C7.97492,11.1464 7.02517,11.1464 6.43938,10.5607 L2.93938,7.06066 C2.51039,6.63166 2.38205,5.98649 2.61422,5.42597 Z"
                          id="路径"
                          fill="#B39D77"
                        >
                          {" "}
                        </path>{" "}
                      </g>{" "}
                    </g>{" "}
                  </g>{" "}
                </g>
              </svg>
              Back Home
            </Link>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="w-full my-[60px] md:my-[120px]">
      <div className="max-w-[1400px] px-2 xs:px-10 m-auto">
        <div className="flex flex-col-reverse md:flex-row max-xl:max-w-3xl gap-10 m-auto justify-between items-center mb-[60px] md:mb-[120px]">
          <h1 className="text-[#B39D77] flex gap-4 text-[40px] 2xl:text-[48px] font-semibold">
            <span className="hidden xl:block">Character Profile: </span>{character?.name}
          </h1>
          <Link
            to={"/"}
            className="text-2xl 2xl:text-3xl gap-1 text-[#B39D77] border-2 cursor-pointer hover:scale-102 duration-300 w-full max-w-55 2xl:max-w-60 h-14 2xl:h-15 rounded-lg bg-black flex items-center justify-center"
          >
            <svg
              className="size-7"
              viewBox="0 0 24 24"
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
                <title>back_fill</title>{" "}
                <g
                  id="页面-1"
                  stroke="none"
                  strokeWidth="1"
                  fill="none"
                  fillRule="evenodd"
                >
                  {" "}
                  <g id="Arrow" transform="translate(-242.000000, -48.000000)">
                    {" "}
                    <g
                      id="back_fill"
                      transform="translate(242.000000, 48.000000)"
                    >
                      {" "}
                      <path
                        d="M24,0 L24,24 L0,24 L0,0 L24,0 Z M12.5934901,23.257841 L12.5819402,23.2595131 L12.5108777,23.2950439 L12.4918791,23.2987469 L12.4918791,23.2987469 L12.4767152,23.2950439 L12.4056548,23.2595131 C12.3958229,23.2563662 12.3870493,23.2590235 12.3821421,23.2649074 L12.3780323,23.275831 L12.360941,23.7031097 L12.3658947,23.7234994 L12.3769048,23.7357139 L12.4804777,23.8096931 L12.4953491,23.8136134 L12.4953491,23.8136134 L12.5071152,23.8096931 L12.6106902,23.7357139 L12.6232938,23.7196733 L12.6232938,23.7196733 L12.6266527,23.7031097 L12.609561,23.275831 C12.6075724,23.2657013 12.6010112,23.2592993 12.5934901,23.257841 L12.5934901,23.257841 Z M12.8583906,23.1452862 L12.8445485,23.1473072 L12.6598443,23.2396597 L12.6498822,23.2499052 L12.6498822,23.2499052 L12.6471943,23.2611114 L12.6650943,23.6906389 L12.6699349,23.7034178 L12.6699349,23.7034178 L12.678386,23.7104931 L12.8793402,23.8032389 C12.8914285,23.8068999 12.9022333,23.8029875 12.9078286,23.7952264 L12.9118235,23.7811639 L12.8776777,23.1665331 C12.8752882,23.1545897 12.8674102,23.1470016 12.8583906,23.1452862 L12.8583906,23.1452862 Z M12.1430473,23.1473072 C12.1332178,23.1423925 12.1221763,23.1452606 12.1156365,23.1525954 L12.1099173,23.1665331 L12.0757714,23.7811639 C12.0751323,23.7926639 12.0828099,23.8018602 12.0926481,23.8045676 L12.108256,23.8032389 L12.3092106,23.7104931 L12.3186497,23.7024347 L12.3186497,23.7024347 L12.3225043,23.6906389 L12.340401,23.2611114 L12.337245,23.2485176 L12.337245,23.2485176 L12.3277531,23.2396597 L12.1430473,23.1473072 Z"
                        id="MingCute"
                        fillRule="nonzero"
                      >
                        {" "}
                      </path>{" "}
                      <path
                        d="M2.61422,5.42597 C2.8464,4.86546 3.39335,4.5 4.00004,4.5 L13.9999979,4.5 C18.1422,4.5 21.4999979,7.85786 21.4999979,12 C21.4999979,16.1421 18.1422,19.5 13.9999979,19.5 L5.00004,19.5 C4.17162,19.5 3.50004,18.8284 3.50004,18 C3.50004,17.1716 4.17162,16.5 5.00004,16.5 L13.9999979,16.5 C16.4853,16.5 18.4999979,14.4853 18.4999979,12 C18.4999979,9.51472 16.4853,7.5 13.9999979,7.5 L7.62136,7.5 L8.5607,8.43934 C9.14649,9.02513 9.14649,9.97487 8.5607,10.5607 C7.97492,11.1464 7.02517,11.1464 6.43938,10.5607 L2.93938,7.06066 C2.51039,6.63166 2.38205,5.98649 2.61422,5.42597 Z"
                        id="路径"
                        fill="#B39D77"
                      >
                        {" "}
                      </path>{" "}
                    </g>{" "}
                  </g>{" "}
                </g>{" "}
              </g>
            </svg>
            Back Home
          </Link>
        </div>

        <div className="flex flex-col-reverse gap-5 max-xl:items-center xl:flex-row justify-between">
          <div className="w-full flex flex-col gap-2 max-w-3xl 2xl:max-w-4xl">
            <Dropdown name={"Films"} link={character.films} />
            <Dropdown name={"Species"} link={character.species} />
            <Dropdown name={"Vehicles"} link={character.vehicles} />
            <Dropdown name={"Starships"} link={character.starships} />
          </div>
          <div className="flex items-center flex-col sm:max-xl:max-h-[350px] max-xl:max-w-3xl max-xl:justify-between max-xl:sm:flex-row h-fit bg-black gap-[40px] rounded-[16px] p-[24px] w-full xl:max-w-[400px] 2xl:max-w-[480px]">
            <img className="max-md:max-w-[250px] max-md:h-[250px] max-xl:max-w-[300px] w-full max-2xl:max-w-[350px] rounded-full" src={img} alt="character" />
            <div className="flex w-full xl:w-full text-[#B39D77] text-[16px] md:text-[20px] xl:text-[22px] 2xl:text-[24px] flex-col items-start py-[24px] px-[32px] border-1 border-[#B39D77] rounded-[16px]">
              <p>Name: {character?.name}</p>
              <p>Height: {character?.height} cm</p>
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
  );
};

export default CharacterPage;
