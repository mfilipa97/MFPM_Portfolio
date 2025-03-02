import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import CursorIcon from "/src/assets/img/navigation-nw-svgrepo-com.svg";

const CustomCursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const [isClicking, setIsClicking] = useState(false);

    // Track mouse movement
    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    // Track mouse clicks
    useEffect(() => {
        const handleMouseDown = () => setIsClicking(true);
        const handleMouseUp = () => setIsClicking(false);

        window.addEventListener("mousedown", handleMouseDown);
        window.addEventListener("mouseup", handleMouseUp);

        return () => {
            window.removeEventListener("mousedown", handleMouseDown);
            window.removeEventListener("mouseup", handleMouseUp);
        };
    }, []);

    // Add hover effects
    useEffect(() => {
        const hoverElements = document.querySelectorAll("a, button, input, textarea, .hover-effect");

        const handleMouseEnter = () => setIsHovering(true);
        const handleMouseLeave = () => setIsHovering(false);

        hoverElements.forEach((element) => {
            element.addEventListener("mouseenter", handleMouseEnter);
            element.addEventListener("mouseleave", handleMouseLeave);
        });

        return () => {
            hoverElements.forEach((element) => {
                element.removeEventListener("mouseenter", handleMouseEnter);
                element.removeEventListener("mouseleave", handleMouseLeave);
            });
        };
    }, []);

    return (
        <motion.div
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                pointerEvents: "none",
                zIndex: 9999,
                transform: "translate(-50%, -50%)",
            }}
            animate={{
                x: mousePosition.x,
                y: mousePosition.y,
                scale: isHovering ? 1.5 : 1,
                opacity: isClicking ? 0.8 : 1,
                transition: { type: "tween", ease: "linear", duration: 0 },
            }}
        >
            <img
                src={CursorIcon}
                alt="Custom Cursor"
                style={{
                    width: "24px",
                    height: "24px",
                    filter: isHovering ? "brightness(1.5)" : "none",
                }}
            />
        </motion.div>
    );
};

export default CustomCursor;