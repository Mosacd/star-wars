import img from "@/assets/5b56caff917096364317406080258eca 2.png"

const Card = () => {
    return (
    <div className="w-full max-w-[547px] h-[640px] bg-black py-[35px] px-[40px]">
        <div className="w-full px-[10px] max-w-[465px] flex justify-center items-center h-[570px] border-[2px] border-[#B39D77] relative">
            <img src={img} alt="" />
            <div className="text-[24px] absolute -bottom-6 left-1/2 -translate-x-1/2 font-[Noto Sans] text-center bg-black w-fit px-[24px] py-[10px] text-white">Luke Skywalker</div>
        </div>
    </div>
    )
}


export default Card;