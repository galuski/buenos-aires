import { Weather } from "./Weather";
import { useState } from "react"
import { Link, NavLink } from "react-router-dom"
export function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)
    return (
        <nav>

            <ul className={menuOpen ? "open" : ""}>
                <li>
                    <NavLink to="/what-to-do">מה לעשות</NavLink>
                </li>
                <li>
                    <NavLink to="/nechita-raka">נחיתה רכה</NavLink>
                </li>
                <li>
                    <NavLink to="/information">מידע</NavLink>
                </li>
                <li>
                    <NavLink to="/contact">צור קשר</NavLink>
                </li>
            </ul>
            <div className="menu" onClick={() => {
                setMenuOpen(!menuOpen)
            }}>
                <img src="./icons/menu.svg" alt="menu" />
            </div>
            <div className="logo">
                <Weather />
                <Link to="/" ><img src="./home_page_logo.svg" alt="Logo" /></Link>
            </div>
        </nav>
    )

}