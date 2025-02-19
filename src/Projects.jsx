import React from 'react';
import './projects.css';
import Card from "./Card.jsx";

function Projects() {
    return (
<div className="projects_container">
        <div className="projects">
            <div className="projects__hero">
                {/* Content of the card */}
                <h1>Welcome to My Homepage!</h1>
                <p>This is where your card content goes.</p>
            </div>
            <div className="card">
                <Card dataCmd="Welcome_To_My_Portfolio"/>
            </div>
        </div>

        </div>
    );
}

export default Projects;