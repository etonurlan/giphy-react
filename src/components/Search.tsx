import { useState } from "react"
import { Link } from "react-router-dom"

import { useDebounce } from "../hooks/debounce"
import { useSearchGiphyQuery } from "../store/giphy/giphy.api"

export const Search = () => {
    const [search, setSearch] = useState("")
    const debounced = useDebounce(search)
    const {data} = useSearchGiphyQuery(debounced, {
        skip: debounced.length<2,
    })

    return (
        <div>
            <div className="flex justify-center mb-[25px]">
                <input value={search} 
                className="bg-[rgb(224,217,217,.6)] rounded-sm p-[5px]
                w-[800px] text-[18px] font-medium text-[#2b2b2b] mr-[15px]" 
                type="text" placeholder="Поиск..."
                onChange={(event) => setSearch(event.target.value)} />
                <button onClick={() => setSearch("")} 
                        className="bg-[#e0d9d999] mr-[10px] w-[40px] px-[10px]
                transition ease-in-out hover:-translate-y-1  hover:scale-[1.4] hover:bg-transparent">
                    <img src="https://danieledefoe.github.io/gifs-application/assets/close-0ff0ebe9.svg" alt="Close" />
                </button>
            </div>
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
        </div>
    )
}