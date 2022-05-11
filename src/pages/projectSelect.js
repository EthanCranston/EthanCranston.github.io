import React from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

const ProjectSelect = () => {
    return (
        <>
        <h1>Projects</h1>
        <p>Select a Project!</p>
        
        <Link to="crossword">Crossword Puzzle Generator</Link> <br></br>
        <Link to="puzzlesolver">9x9 Puzzle Solver</Link>
        </>
    );
};

export default ProjectSelect