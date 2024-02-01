import { Link, NavLink } from "react-router-dom"
import { useState } from "react";
import "./Topnav.css"
export default function Topnav() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav>
      <Link to="/" className="title">
        <img src="/images/dynamiccraft-logo - Copy.png" width="150px" height="auto" />
      </Link>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <img src="/assets/menu.svg" alt="" srcset="" />
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <img src="/assets/home.svg" alt="Home" className="f-icon"  />
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <img src="/assets/map.svg" alt="map" className="f-icon" />
          <NavLink to="/maps">Maps</NavLink>
        </li>
        <li>
        <img src="/assets/rank.svg" alt="rank" className="f-icon" />
          <NavLink to="/about">Ranks</NavLink>
        </li>
        <li>
        <img src="/assets/vote.svg" alt="vote" className="f-icon" />
          <NavLink to="/stats">Vote</NavLink>
        </li>
      </ul>
    </nav>
  )
}
