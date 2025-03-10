import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import CuteModal from "/src/components/AboutMe/modal/CuteModal.jsx";
import githubIcon from "/src/assets/img/github.png"; // Import GitHub icon
import linkedinIcon from "/src/assets/img/linkedin-logo.png"; // Import LinkedIn icon
import "./navbar.css";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isModalOpen, setModalOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
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

    const handleContactClick = () => {
        setModalOpen(true);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setModalOpen(false);
        document.body.style.overflow = 'unset';
    };

    return (
        <div className={`navbar ${isScrolled ? "scrolled" : ""}`}>
            <ul className="nav_menu">
                <li>
                    <Link to="home" smooth={true} duration={100}>Home</Link>
                </li>
                <li>
                    <Link to="about" smooth={true} duration={100}>About</Link>
                </li>
                <li>
                    <Link to ="stacks" smooth = {true} durantion ={100}>Stacks</Link>
                </li>
                <li>
                    <Link to="projects" smooth={true} duration={100}>Projects</Link>
                </li>
                <li onClick={handleContactClick} style={{ cursor: "pointer" }}>
                    Contact Me
                </li>
            </ul>

            {isModalOpen && (
                <CuteModal
                    title="Contact Me"
                    description="Follow me or send a message through any of the platforms below:"
                    icons={[
                        {
                            src: linkedinIcon,
                            href: "https://linkedin.com/in/mfilipa97",
                            alt: "LinkedIn",
                        },
                        {
                            src: githubIcon,
                            href: "https://github.com/mfilipa97",
                            alt: "GitHub",
                        },
                    ]}
                    closeModal={closeModal}
                />
            )}
        </div>
    );
};

export default Navbar;