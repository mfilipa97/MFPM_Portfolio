import React from 'react';
import './stacks.css';
import Card from "./components/Card/Card.jsx";
import AutoTyping from "./components/AutoTyping.jsx";

function Projects() {
    return (
        <div className="stacks">
            {/* Auto-Typing Header */}
            <div className="auto-typing">
                <h1 className="stacks-text">
                    <AutoTyping text="P  R O J E C T S" />
                </h1>
            </div>

            {/* Title and Cards Container */}
            <div className="stacks-container">
                {/* Cards Row */}<div className="stacks-container">
                <div className="cards-row">
                    <Card dataCmd="Javascript" scale={0.70} />
                </div>
            </div>
                );
                }

                export default Projects;

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