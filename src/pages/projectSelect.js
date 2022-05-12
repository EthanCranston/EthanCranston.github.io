import React from "react";
import "./Pages.css";
//import { Link } from "react-router-dom";
import Tile from "../components/Tile/Tile";

const ProjectSelect = () => {
    return (
        <>
            <h1>Projects</h1>
            <p>Select a Project!</p>

            <Tile 
            title={"Crosswords"}
            description={"A project that takes in arbitry text, a difficult and ouputs a crossword puzzle with hints"}
            image={"/public/images/data.jpg"}
            link={"crossword"}
            />


            {/* <ul class="list-disc">
                <li>one</li>
                <li>two</li>
                <li>three</li>




                <li>
                    <Link to="crossword">Crossword Puzzle Generator</Link> <br></br>
                </li>
                <li>
                    <Link to="puzzlesolver">9x9 Puzzle Solver</Link>
                </li>
            </ul> */}
        </>
    );
};

export default ProjectSelect