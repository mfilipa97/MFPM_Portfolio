import { Link } from "react-scroll";
import "./navbar.css";

const Navbar = () => {
    return (
        <div className="navbar">
            <ul className="nav_menu">
                <li>
                    <Link to="home" smooth={true} duration={100}>Home</Link>
                </li>
                <li>
                    <Link to="about"  smooth={true} duration={100}>About</Link>

                </li>
                <li>Stacks</li>
                <li>
                    <Link to="projects" smooth={true} duration={100}>Projects</Link>
                </li>
                <li>Contact Me</li>
            </ul>
        </div>
    );
};

export default Navbar;