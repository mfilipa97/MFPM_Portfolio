import React from 'react';
import './projects.css';
import AutoTyping from "./AutoTyping.jsx";
import Card from "./Card.jsx";

function Projects() {
    return (
        <div className="stacks">
            {/* AutoTyping Heading */}
            <div className="auto-typing">
                <h1 className="stacks-text">
                    <AutoTyping text="S  T A C K S" />
                </h1>
            </div>

            {/* Container for the Cards */}
            <div className="stacks-container">
                <div className="cards-row">
                    <Card dataCmd="JavaScript & TypeScript" scale={0.90} />
                    <Card dataCmd="HTML & CSS" scale={0.90} />
                    <Card dataCmd="MERN STACK" scale={0.90} />
                    <Card dataCmd="Python" scale={0.90} />
                    <Card dataCmd="Javascript" scale={0.90} />
                </div>
            </div>
        </div>
    );
}

export default Projects;