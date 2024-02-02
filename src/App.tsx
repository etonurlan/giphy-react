import { Routes, Route } from "react-router-dom"

import './index.css'
import { Header } from './components/Header'
import { Search } from "./components/Search"
import { Trendings } from "./components/Trendings"
import { Random } from "./components/Random"

function App() {
  return (
    <div className="app px-[300px]">
      <Header />
      <Routes>
        <Route path="/" element={<Search />} />
        <Route path="/trend" element={<Trendings />} />
        <Route path="/random" element={<Random />} />
      </Routes>
    </div>
  )
}

export default App