import React from "react";
import "./projects.css";
import AutoTyping from "../AutoTyping.jsx"; // Auto-typing component
import foundFoliage from '/src/assets/img/foundfoliage.png';
import ghostly from '/src/assets/img/ghostly.png';
import tictac from '/src/assets/img/tictac.png';

export const Projects = () => {
    const cards = [
        {
            id: 1,
            category: "Website",
            heading: "Found Foliage",
            background: {
                src: foundFoliage,
            },
            link: "https://foundfoliage.netlify.app/",
        },
        {
            id: 2,
            category: "Website",
            heading: "Ghostly Tales",
            background: {
                src: ghostly,
            },
            link: "https://ghostly-tales.onrender.com/",
        },
        {
            id: 3,
            category: "Game",
            heading: "Cutest Tic Tac Toe",
            background: {
                src: tictac,
            },
            link: "https://tictactoereact-lyart.vercel.app/",
        },
        {
            id: 4,
            category: "Game",
            heading: "Example Card Heading",
            background: {
                src: foundFoliage,
            },
            link: "https://example.com/example-card",
        }
    ];

    return (
        <section className="hero-section">
            <div className="hero-title">
                <AutoTyping text="P rojects!" fontSize="3rem" />
            </div>
            <div className="card-grid">
                {cards.map((card) => (
                    <a
                        key={card.id}
                        className="projects_card"
                        href={card.link}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <div
                            className="card__background"
                            style={{
                                backgroundImage: `url(${card.background.src})`,
                            }}
                        ></div>
                        <div className="card__content">
                            <p className="card__category">{card.category}</p>
                            <h3 className="card__heading">{card.heading}</h3>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
};

export default Projects;