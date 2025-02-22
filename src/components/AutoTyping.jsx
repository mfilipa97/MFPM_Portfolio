import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const AutoTyping = ({ text = "", typingSpeed = 200, fontSize = "1.5rem" }) => {
    const [displayedText, setDisplayedText] = useState(""); // State for text being displayed
    const [cursorVisible, setCursorVisible] = useState(true); // State for cursor blink

    useEffect(() => {
        // Typing effect
        let currentIndex = 0;
        const safeText = text || ""; // Ensure text is always a string
        const textArray = safeText.split(""); // Split the text into characters

        const typingTimer = setInterval(() => {
            if (currentIndex < textArray.length) {
                setDisplayedText((prev) => prev + (textArray[currentIndex] || "")); // Add valid characters only
                currentIndex++;
            } else {
                clearInterval(typingTimer); // Stop typing when finished
            }
        }, typingSpeed);

        return () => clearInterval(typingTimer); // Cleanup on unmount
    }, [text, typingSpeed]); // Dependency array ensures effect runs with updated text or typingSpeed

    useEffect(() => {
        // Cursor blinking effect
        const cursorBlinkTimer = setInterval(() => {
            setCursorVisible((prev) => !prev);
        }, 500);

        return () => clearInterval(cursorBlinkTimer); // Clean up interval on unmount
    }, []);

    return (
        <Wrapper fontSize={fontSize}>
            <div className="typing-container">
                <span className="text">{displayedText}</span>
                {cursorVisible && <span className="typing-cursor">|</span>}
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    .typing-container {
        display: inline-block;
        position: relative;
        font-family: 'Courier New', Courier, monospace;
        font-size: ${(props) => props.fontSize}; /* Dynamically using fontSize prop */
        white-space: nowrap;
    }

    .typing-cursor {
        font-weight: bold;
        color: black;
        animation: blink 0.5s step-end infinite;
    }

    @keyframes blink {
        50% {
            opacity: 0;
        }
    }
`;

export default AutoTyping;