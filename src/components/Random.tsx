import { Link } from "react-router-dom"
import { useState } from "react"

import { useRandomGiphyQuery } from "../store/giphy/giphy.api"

export const Random = () => {
    const [gifCount, setGifCount] = useState(0)
    const {data}: any = useRandomGiphyQuery(gifCount)

    return (
        <div>
            <Link to={data?.data.url}>
                <img className="rounded-md w-[100%] h-[100%] transition-transform
                duration-[0.7s] hover:-translate-y-4
                shadow-[0_10px_20px_#0006] mb-[25px]" 
                src={data?.data.images.downsized.url} alt="g" />
            </Link>
            <div className="flex justify-center">
                <button onClick={() => setGifCount(gifCount + 1)}
                className="bg-[#e0d9d999] px-[25px] rounded-md mb-8
                transition ease-in-out hover:-translate-y-1  hover:scale-[1.4] hover:bg-transparent
                duration-[0.7s]">
                    <img className="w-[30px]"
                     src="https://danieledefoe.github.io/gifs-application/assets/next-839a39d6.svg" alt="Next Gif" />
                </button>
            </div>
        </div>
    )
}