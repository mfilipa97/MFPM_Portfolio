import React from 'react';
import './stacks.css';
import Card from "./Card.jsx";

function Projects() {
    return (
        <div className="stacks">
            <h1 className="stacks_text">My Stacks</h1> {/* Title */}
            <div className="stacks_container">
                <div className="stacks_card">
                    <Card dataCmd="Javascript" scale={0.70} />
                </div>
                <div className="stacks_card">
                    <Card dataCmd="MERN Stack" scale={0.70} />
                </div>
                <div className="stacks_card">
                    <Card dataCmd="HTML & CSS" scale={0.70} />
                </div>
                <div className="stacks_card">
                    <Card dataCmd="Python" scale={0.70} />
                </div>
                <div className="stacks_card">
                    <Card dataCmd="Welcome_To_My_Portfolio" scale={0.60} />
                </div>
            </div>
        </div>


    );
}

export default Projects;