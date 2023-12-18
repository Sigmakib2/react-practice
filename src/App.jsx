import { Route, Routes } from "react-router-dom";
import Topnav from "./components/Topnav";
import About from './pages/About';
import Stats from './pages/Stats';
import LeaderBoard from './pages/LeaderBoard';
import Home from "./pages/Home";
import Maps from './pages/Maps';

export default function App() {
  return (
    <div>
      <Topnav />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/maps" element={<Maps/>} />
        <Route path="/stats" element={<Stats/>} />
        <Route path="/leaderboard" element={<LeaderBoard/>} />
      </Routes>
    </div>
  )
}
