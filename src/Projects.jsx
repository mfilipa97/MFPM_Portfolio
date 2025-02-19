import React from 'react';
import './projects.css';
import Card_2 from "./Card_2.jsx";
import AutoTyping from "./AutoTyping.jsx";

function Projects() {
    const handleButtonClick = () => {
        console.log('Button clicked!');
    };

    return (
        <div className="stacks">
            {/* AutoTyping Heading */}
            <div className="auto-typing">
                <h1 className="stacks-text">
                    <AutoTyping text="P  R O J E C T S" />
                </h1>
            </div>

            {/* Container for the Cards */}
            <div className="stacks-container-proj">
                <div className="cards-row">
                    <Card_2
                        jobTitle="Found Folige"
                        jobSummaryTitle="Found Folige"
                        buttonLabel="Website"
                        icon={
                            <svg
                                height={20}
                                width={20}
                                stroke="currentColor"
                                strokeWidth="1.5"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                                    strokeLinejoin="round"
                                    strokeLinecap="round"
                                />
                            </svg>
                        }
                        onButtonClick={handleButtonClick}
                    />
                    <Card_2
                        jobTitle="Gostly Tales"
                        jobSummaryTitle="Gostly Tales"
                        buttonLabel="Website"
                        icon={
                            <svg
                                height={20}
                                width={20}
                                stroke="currentColor"
                                strokeWidth="1.5"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                                    strokeLinejoin="round"
                                    strokeLinecap="round"
                                />
                            </svg>
                        }
                        onButtonClick={handleButtonClick}
                    />
                    <Card_2
                        jobTitle="Snake Game"
                        jobSummaryTitle="Snake Game"
                        buttonLabel="Code"
                        icon={
                            <svg
                                height={20}
                                width={20}
                                stroke="currentColor"
                                strokeWidth="1.5"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                                    strokeLinejoin="round"
                                    strokeLinecap="round"
                                />
                            </svg>
                        }
                        onButtonClick={handleButtonClick}
                    />
                </div>
            </div>
        </div>
    );
}

export default Projects;