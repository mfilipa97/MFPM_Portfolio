import React, { useState, useEffect } from "react";
import anime from "animejs";
import "./grid_layout.css";

// Helper to generate a random color
const randomColor = () =>
    `#${Math.floor(Math.random() * 16777215).toString(16)}`;

const Dynamic = () => {
  const [gridConfig, setGridConfig] = useState({
    columns: 0,
    rows: 0,
    total: 1,
  });

  // Function to calculate grid size based on available space
  const getGridSize = () => {
    const columns = Math.floor(window.innerWidth / 50); // Each "grid-item" is 50px wide
    const rows = Math.floor(window.innerHeight / 50); // Each row is 50px tall
    setGridConfig({ columns, rows, total: rows * columns });

    // Reset grid items' color when re-rendering
    anime({
      targets: ".grid-item",
      backgroundColor: "#fff", // Reset to white
      duration: 0, // Instant reset
    });
  };

  // Mounting and setup for resizing
  useEffect(() => {
    getGridSize(); // Calculate grid size once the app mounts
    window.addEventListener("resize", getGridSize); // Update grid size on window resize

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("resize", getGridSize);
    };
  }, []);

  // Trigger background animation dynamically
  const animateGrid = () => {
    const { columns, rows } = gridConfig;
    anime({
      targets: ".grid-item",
      backgroundColor: randomColor(), // Dynamic random color
      delay: anime.stagger(50, { grid: [columns, rows], from: "center" }), // Stagger animation from the center
    });
  };

  const { total } = gridConfig;

  return (
      <div id="background-container" onClick={animateGrid}>
        {/* Dynamically populate grid items */}
        {[...Array(total)].map((_, i) => (
            <div key={i} className="grid-item" />
        ))}
      </div>
  );
};

export default Dynamic;