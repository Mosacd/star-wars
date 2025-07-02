import img from "@/assets/5b56caff917096364317406080258eca 2.png"
import { Link } from "react-router-dom"

const Card = ({ name } : {name: string}) => {

    return (
        <Link to={`/character/${name}`}>
    <div className={`w-full max-w-[547px] h-[340px] lg:h-[440px] xl:h-[540px] 2xl:h-[640px] bg-black py-[35px] px-[40px] rounded-xl hover:-translate-y-2 group border-2 border-transparent hover:shadow-[0px_5px_0px_#B39D77] duration-300 cursor-pointer `}>
        <div className="w-full px-[10px] rounded-lg max-w-[465px] flex justify-center items-center h-[270px] lg:h-[370px] xl:h-[470px] 2xl:h-[570px] border-[2px] border-[#B39D77] relative duration-300">
            <img className="rounded-full" src={img} alt="" />
            <div className="text-[16px] lg:text-[18px] xl:text-[24px] absolute -bottom-3 lx:-bottom-6 left-1/2 -translate-x-1/2 font-[Noto Sans] text-center bg-black w-fit md:px-[7px] md:py-7px xl:px-[10px] xl:py-[10px] text-white">{name}</div>
        </div>
    </div>
    </Link>
    )
}


export default Card;