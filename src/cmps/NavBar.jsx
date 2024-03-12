// import { Weather } from "./Weather";
import { Link } from "react-router-dom"
export function Navbar() {

    return (
        <nav className="navbar">
            <ul>
                <li>
                    <Link to="/"><img src="./home_page_logo.svg" alt="Logo" /></Link>
                </li>
                <li>
                    <Link to="/what-to-do">מה לעשות</Link>
                </li>
                <li>
                    <Link to="/nechita-raka">נחיתה רכה</Link>
                </li>
                <li>
                    <Link to="/information">מידע</Link>
                </li>
                <li>
                    <Link to="/contact">צור קשר</Link>
                </li>
            </ul>
        </nav>
    )

}