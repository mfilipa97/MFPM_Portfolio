import React from 'react';
import './about.css';
import AutoTyping from "../AutoTyping.jsx";

const About = () => {
    return (
        <div className="about-container">
            <div className="about-me">
                <AutoTyping text="About Me" fontSize="3rem" />
                {/* Row for About Me and Hobbies */}
                <div className="about-me-row">
                    {/* About Me Content */}
                    <div className="about-content-wrapper">
                        <p>
                            Hi! I'm <span className="highlight"> Mariana Marques</span>, a passionate
                            <span className="hover-underline"> Web Developer</span> with a background in
                            <span className="hover-underline"> Linguistics</span>.
                            I love exploring new technologies and solving challenges through code.
                        </p>
                        <p>
                            With experience in both <span className="hover-underline"> frontend</span> and
                            <span className="hover-underline"> backend development</span>, I work with technologies like
                            <span className="hover-underline"> React.js</span>, <span className="hover-underline">Node.js</span>,
                            and <span className="hover-underline">MongoDB</span>.
                        </p>
                        <p>
                            I also enjoy making <span className="hover-underline"> cute, simple games</span>
                            using <span className="hover-underline"> JavaScript</span> or <span className="hover-underline"> Python</span>.
                            One of my favorite projects is a dynamic and cutest <span className="hover-underline"> Tic Tac Toe</span>
                            with colorful visuals!
                        </p>
                        <p>
                            Some of my other projects include a <span className="hover-underline">plant recognition platform</span>
                            powered by AI, a <span className="hover-underline">Ghost Story sharing app</span>, and as freelancer
                            <span className="hover-underline">custom Twitch alert system and overlays</span>.
                        </p>
                        <p>Let's build something amazing together! 🚀</p>
                    </div>
                    {/* Hobbies Section */}
                    <div className="hobbies-section">
                        <h3>Hobbies</h3>
                        <div className="hobbies-images">
                            <img src="hobby1.jpg" alt="Hobby 1" />
                            <img src="hobby2.jpg" alt="Hobby 2" />
                            <img src="hobby3.jpg" alt="Hobby 3" />
                            <img src="hobby4.jpg" alt="Hobby 4" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;