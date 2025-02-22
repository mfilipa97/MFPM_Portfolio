import React from 'react';
import './about.css';
import AutoTyping from "../AutoTyping.jsx";

const About = () => {
    return (
        <div className="about-container">
            <div className="about-me">
                <AutoTyping text="A bout  Me" fontSize="3rem" typingSpeed={100}
                />
                {/* Row for About Me and Hobbies */}
                <div className="about-me-row">
                    {/* About Me Content */}
                    <div className="about-content-wrapper">
                        <p>
                            Hi! I'm <span className="highlight"> Mariana Marques</span>, a passionate
                            <span className="hover-underline"> Web Developer </span> with a background in
                            <span className="hover-underline"> Linguistics </span>.
                            I love exploring new technologies and solving challenges through code.
                        </p>
                        <p>
                            With experience in both <span className="hover-underline"> frontend</span> and
                            <span className="hover-underline"> backend development </span>, I work with technologies like
                            <span className="hover-underline"> React.js</span>, <span className="hover-underline">Node.js</span>,
                            and <span className="hover-underline">MongoDB</span>.
                        </p>
                        <p>
                            I also enjoy making <span className="hover-underline"> cute, simple games </span>
                            using <span className="hover-underline"> JavaScript</span> or <span className="hover-underline"> Python</span>.
                            One of my favorite projects is a dynamic <span className="hover-underline"> Tic Tac Toe </span>
                            with colorful visuals!
                        </p>
                        <p>
                            Some of my other projects include a <span className="hover-underline"> plant recognition platform </span>
                            powered by AI, a <span className="hover-underline">Ghost Story sharing app</span>, and as freelancer
                            <span className="hover-underline"> custom Twitch alert system and overlays </span>.
                        </p>
                        <p>Let's connect? 🚀</p>
                    </div>

                    {/* Hobbies Section */}
                    <div className="hobbies-section">
                        <AutoTyping text="H obbies" fontSize="2rem" />
                        <div className="hobbies-images">
                            <img src="src/assets/img/face-1-svgrepo-com.svg" alt="Hobby 1" />
                            <img src="src/assets/img/simulation-svgrepo-com.svg"  alt="Hobby 2" />
                            <img src="src/assets/img/sleeping-face-svgrepo-com.svg"  alt="Hobby 3" />
                            <img src="src/assets/img/suitcase-svgrepo-com.svg"  alt="Hobby 4" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default About;