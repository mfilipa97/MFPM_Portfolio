import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const AutoTyping = ({ text = "", typingSpeed = 200, fontSize = "1.5rem" }) => {
    const [displayedText, setDisplayedText] = useState("");
    const [cursorVisible, setCursorVisible] = useState(true);

    useEffect(() => {
        let currentIndex = 0;
        const safeText = text || "";
        const textArray = safeText.split("");

        const typingTimer = setInterval(() => {
            if (currentIndex < textArray.length) {
                setDisplayedText((prev) => prev + (textArray[currentIndex] || ""));
                currentIndex++;
            } else {
                clearInterval(typingTimer);
            }
        }, typingSpeed);

        return () => clearInterval(typingTimer);
    }, [text, typingSpeed]);

    useEffect(() => {
        const cursorBlinkTimer = setInterval(() => {
            setCursorVisible((prev) => !prev);
        }, 500);

        return () => clearInterval(cursorBlinkTimer);
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
        font-size: ${(props) => props.fontSize};
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