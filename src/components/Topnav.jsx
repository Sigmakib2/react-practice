import { Link, NavLink } from "react-router-dom"
import { useState } from "react";
import "./Topnav.css"
export default function Topnav() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav>
    <Link to="/" className="title">
      Website
    </Link>
    <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
      <span></span>
      <span></span>
      <span></span>
    </div>
    <ul className={menuOpen ? "open" : ""}>
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
