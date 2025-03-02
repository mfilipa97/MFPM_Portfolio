import React from "react";
import { motion } from "framer-motion";
import "./stackscard.css"

// Import your icons (you can use SVGs or image files)
import ReactIcon from "/src/assets/img/react-original.svg";
import NodeJsIcon from "/src/assets/img/nodejs-original.svg";
import PythonIcon from "/src/assets/img/python-original.svg";
import MongoDB from "/src/assets/img/mongodb-original.svg";
import Javascript from "/src/assets/img/javascript-original.svg";
import FramerMo from "/src/assets/img/framermotion-original.svg";
import Handlebars from "/src/assets/img/handlebars-original.svg";
import Figma from "/src/assets/img/figma-original.svg";
import AutoTyping from "../AutoTyping.jsx";

const TechStack = () => {
    // Animation variants for the grid items
    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    // List of tools with their icons and names
    const tools = [
        { icon: ReactIcon, name: "React" },
        { icon: Javascript, name: "Javascript" },
        { icon: NodeJsIcon, name: "Node.js" },
        { icon: PythonIcon, name: "Python" },
        { icon: MongoDB, name: "MongoDB" },
        { icon: FramerMo, name: "Framer Motion" },
        { icon: Handlebars, name: "Handlebars" },
        { icon: Figma, name: "Figma" }
        // Add more tools here
    ];

    return (
        <div className="tech-stack">
            <AutoTyping text="S tacks" fontSize="3rem" />
            <motion.div
                className="stack-grid"
                initial="hidden"
                animate="visible"
                variants={{
                    visible: {
                        transition: {
                            staggerChildren: 0.1, // Stagger the animation for each item
                        },
                    },
                }}
            >
                {tools.map((tool, index) => (
                    <motion.div
                        key={index}
                        className="stack-item"
                        variants={itemVariants}
                        whileHover={{ scale: 1.1 }} // Add hover effect
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <img src={tool.icon} alt={tool.name} />
                        <p>{tool.name}</p>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default TechStack;