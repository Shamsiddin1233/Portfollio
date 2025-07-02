import { NavLink } from "react-router-dom"
import "./Nvabar.css"
function Navbar() {
    return(
        <nav>
            <h1>Portfollio</h1>
            <ul>
                <li><a href="#Home">HOME</a></li>
                <li><a href="#Level">LEVL</a></li>
                <li><a href="#Aboute">ABOUT</a></li>
                <li><a href="#Scills">SKILLS</a></li>
                <li><a href="#Project">PROJECT</a></li>
                <li><a href="#Contact">Contact</a></li>
            </ul>
        </nav>
    )
}
export default Navbar
