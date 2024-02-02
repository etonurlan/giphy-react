import { Link } from "react-router-dom"

import Logo from "../img/Logo.svg"

export const Header = () => {
    return (
        <header className="pt-4 mb-[45px]">
            <div className="flex justify-center mb-4">
                <img className="w-[250px]" src={Logo} alt="Giphy Logo" />
            </div>
            <div className="flex justify-center">
                <Link to="/">
                    <button className="mr-[30px] bg-[rgb(224,217,217,.6)] text-[18px]
                                       font-bold text-[#000] p-[4px_10px]
                                     hover:bg-[#696be3] hover:text-[#fff]
                                       transition-all duration-[0.6s] ease-[cubic-bezier(0.25,0.1,0.25,1.0)]
                                       rounded-sm hover:animate-shadow-pulse active:scale-90">
                        ПОИСК
                    </button>
                </Link>
                <Link to="/trend">
                    <button className="mr-[30px] bg-[rgb(224,217,217,.6)] text-[18px]
                                    font-bold text-[#000] p-[4px_10px]
                                    hover:bg-[#696be3] hover:text-[#fff]
                                    transition-all duration-[0.6s] ease-[cubic-bezier(0.25,0.1,0.25,1.0)]
                                    rounded-sm hover:animate-shadow-pulse active:scale-90">
                        ТРЕНДЫ
                    </button>
                </Link>
                <Link to="/random">
                    <button className="bg-[rgb(224,217,217,.6)] text-[18px]
                                        font-bold text-[#000] p-[4px_10px]
                                        hover:bg-[#696be3] hover:text-[#fff]
                                        transition-all duration-[0.6s] ease-[cubic-bezier(0.25,0.1,0.25,1.0)]
                                        rounded-sm hover:animate-shadow-pulse active:scale-90">
                        РАНДОМ
                    </button>
                </Link>
            </div>
        </header>
    )
}