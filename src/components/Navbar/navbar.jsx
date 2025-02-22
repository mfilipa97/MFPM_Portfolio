import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import "./navbar.css";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) { // If scrolled down 50px
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className={`navbar ${isScrolled ? "scrolled" : ""}`}>
            <ul className="nav_menu">
                <li>
                    <Link to="home" smooth={true} duration={100}>Home</Link>
                </li>
                <li>
                    <Link to="about" smooth={true} duration={100}>About</Link>
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