import { useState } from "react"
import { Link } from "react-router-dom"

import { useTrendingGiphyQuery } from "../store/giphy/giphy.api"

export const Trendings = () => {
    const [limit, setLimit] = useState(9)
    const {data} = useTrendingGiphyQuery(limit)

    return (
        <div>
            {data?.data.length! > 0 && (
                <div className="grid grid-cols-3 gap-4 my-[15px] mx-[10x]">
                    {data?.data.map((gif) => (
                        <Link to={gif.url}>
                            <img className="rounded-md w-[100%] h-[282px] transition-transform
                            duration-[0.7s] hover:-translate-y-4
                            shadow-[0_10px_20px_#0006] mb-[25px]" 
                            src={gif.images.downsized.url} alt="g" />
                        </Link>
                    ))}
                </div> 
            )}
            <div className="flex justify-center">
                <button onClick={() => setLimit(limit + 9)}
                        className="mb-8">
                    <img className="w-[50px] transition-transform
                            duration-[0.7s] hover:scale-150" 
                        src="https://danieledefoe.github.io/gifs-application/assets/arrows-more-ae28bbbf.svg" alt="Show More" />
                </button>
            </div>
        </div>
    )
}