import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Topnav from "./components/Nav/Topnav";
import Maps from "./pages/Maps/Maps";
import Ranks from "./pages/Ranks/Ranks";
import Vote from "./pages/Vote/Vote";

export default function App() {
  return (
    <div>
      <Topnav/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/maps" element={<Maps/>} />
        <Route path="/ranks" element={<Ranks/>} />
        <Route path="/vote" element={<Vote/>} />
      </Routes>
    </div>
  )
}
