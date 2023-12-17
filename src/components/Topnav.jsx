import { Link, NavLink } from "react-router-dom"
import "./Topnav.css"
export default function Topnav() {
  return (
    <nav>
      <Link to="/" className="title">
        Website
      </Link>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/stats">Stats</NavLink>
        </li>
        <li>
          <NavLink to ="/leaderboard">Leaderboard</NavLink>
        </li>
      </ul>
    </nav>
  )
}
