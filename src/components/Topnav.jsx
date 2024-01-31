import { Link, NavLink } from "react-router-dom"
import { useState } from "react";
import "./Topnav.css"
export default function Topnav() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav>
    <Link to="/" className="title">
      <img src="/images/dynamiccraft-logo - Copy.png" width="100px" height="auto"/>
    </Link>
    <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
      <img src="/vite.svg" alt="" srcset="" />
    </div>
    <ul className={menuOpen ? "open" : ""}>
      <li>
        <NavLink to="/maps">Maps</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/stats">Stats</NavLink>
      </li>
      <li>
        <NavLink to="/leaderboard">LeaderBoard</NavLink>
      </li>
    </ul>
  </nav>
  )
}
