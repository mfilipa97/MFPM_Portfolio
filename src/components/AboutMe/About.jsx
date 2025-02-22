import React, { useState } from "react";
import "./about.css";
import AutoTyping from "../AutoTyping.jsx";
import CuteModal from "./modal/CuteModal.jsx";

// Import SVG assets
import FoodSvg from "../../assets/img/face-1-svgrepo-com.svg";
import GamingSvg from "../../assets/img/simulation-svgrepo-com.svg";
import SleepingSvg from "../../assets/img/sleeping-woman-svgrepo-com.svg";
import TravelingSvg from "../../assets/img/suitcase-svgrepo-com.svg";
import ReadingSvg from "../../assets/img/person-reading-a-book-question-mark-svgrepo-com.svg";
import ProgrammerSvg from "../../assets/img/female-programmer-upper-body-svgrepo-com.svg";
import MailSvg from "../../assets/img/incoming-mail-svgrepo-com.svg";
import HobbyIconSvg from "../../assets/img/woman-with-a-cane-svgrepo-com.svg";


const About = () => {
    const [isModalOpen, setModalOpen] = useState(false); // State to manage modal visibility
    const [modalContent, setModalContent] = useState({ title: "", description: "" }); // State for modal content

    // Hobbies array containing image details and descriptions
    const hobbies = [
        {
            src: FoodSvg,
            alt: "Food",
            description:
                "I’m all about food—every bite’s an adventure. I love trying new flavors, cooking up something fun, and just enjoying the simple joy of a good meal. Food is my happy place.",
        },
        {
            src: GamingSvg,
            alt: "Gaming",
            description:
                "Gaming is my escape. I love getting lost in new worlds, challenging myself, and just having fun with it. Whether I’m diving into a story or competing in a game, it’s all about the thrill and the experience.",
        },
        {
            src: SleepingSvg,
            alt: "Sleeping",
            description:
                "Sleep is my little sanctuary. I love the feeling of being wrapped up in the warmth of my blankets, letting go of everything, and just drifting into peaceful rest. It’s the quiet moment where I can truly feel at peace, fully recharging and ready to start fresh.",
        },
        {
            src: TravelingSvg,
            alt: "Traveling",
            description:
                "Traveling is something I dream about. Even though I haven’t had the chance to leave my country yet, I love imagining all the places I could visit—each one with its own culture, landscapes, and experiences. There’s something exciting about the idea of exploring new places and connecting with the world beyond my own. ",
        },
    ];

    // Handle image click to open modal with specific title and description
    const handleImageClick = (alt, description) => {
        setModalContent({ title: alt, description }); // Set modal content dynamically
        setModalOpen(true); // Open the modal
    };

    // Close the modal
    const closeModal = () => {
        setModalContent({ title: "", description: "" }); // Clear modal content
        setModalOpen(false); // Close the modal
    };

    return (
        <div className="about-container">
            <div className="about-me">
                <AutoTyping text="A bout Me" fontSize="3rem" />

                {/* Row for About Me and Hobbies */}
                <div className="about-me-row">
                    {/* About Me Content */}
                    <div className="about-content-wrapper">
                        <p>
                            Hi! I'm <span className="highlight"> Mariana Marques</span>, a passionate
                            <span className="hover-underline"> Web Developer</span> with a background in
                            <span className="hover-underline">
                {" "}
                                Linguistics{" "}
                                <img
                                    src={ReadingSvg}
                                    alt="coding emoji"
                                    style={{ width: "30px", height: "30px", verticalAlign: "middle" }}
                                />{" "}
              </span>
                            . I love exploring new technologies and solving challenges through code.
                            <img
                                src={ProgrammerSvg}
                                alt="coding emoji"
                                style={{ width: "30px", height: "30px", verticalAlign: "middle" }}
                            />
                        </p>
                        <p>
                            With experience in both <span className="hover-underline"> frontend</span> and
                            <span className="hover-underline"> backend development</span>, I work with technologies like
                            <span className="hover-underline"> React.js</span>, <span className="hover-underline">Node.js</span>, and
                            <span className="hover-underline">MongoDB</span>.
                        </p>
                        <p>
                            I also enjoy making <span className="hover-underline"> cute, simple games</span> using{" "}
                            <span className="hover-underline"> JavaScript</span> or <span className="hover-underline"> Python</span>.
                            One of my favorite projects is a dynamic and cutest <span className="hover-underline"> Tic Tac Toe </span>
                            with colorful visuals!
                        </p>
                        <p>
                            Some of my other projects include a <span className="hover-underline"> plant recognition platform</span>
                            powered by AI, a <span className="hover-underline"> Ghost Story sharing app</span>, and as a freelancer
                            <span className="hover-underline"> custom Twitch alert system and overlays</span>.
                        </p>
                        <p>
                            Let's connect?
                            <img
                                src={MailSvg}
                                alt="coding emoji"
                                style={{ width: "30px", height: "30px", verticalAlign: "middle" }}
                            />
                        </p>
                    </div>

                    {/* Hobbies Section */}
                    <div className="hobbies-section">
                        <h3>
                            Hobbies
                            <img
                                src={HobbyIconSvg}
                                alt="coding emoji"
                                style={{ width: "50px", height: "50px", verticalAlign: "middle"}}
                            />

                        </h3>
                        <div className="hobbies-images">
                            {/* Render all hobbies as clickable images */}
                            {hobbies.map((hobby, index) => (
                                <img
                                    key={index}
                                    src={hobby.src}
                                    alt={hobby.alt}
                                    onClick={() => handleImageClick(hobby.alt, hobby.description)} // Open modal on click
                                    className="hobby-image"
                                    style={{
                                        width: "150px",
                                        height: "150px",
                                        borderRadius: "10px",
                                        objectFit: "cover",
                                        cursor: "pointer",
                                        boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.2)",
                                        transition: "transform 0.3s ease",
                                    }}
                                    onMouseEnter={(e) => (e.target.style.transform = "scale(1.05)")}
                                    onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <CuteModal
                    title={modalContent.title}
                    description={modalContent.description}
                    closeModal={closeModal} // Pass close function to modal
                />
            )}
        </div>
    );
};

export default About;