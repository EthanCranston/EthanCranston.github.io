import React from "react";
import "../Pages.css";
import coloradoImage from "../../images/coloradoPath.png"

const DPPathfinder = () => {
    return (
        <>
        <h1>DP Pathfinding</h1>
        <p>This program was part of a school project to determine the most efficient path through a given terrain. 
            The program intakes the  terrain elevation and finds the path left to right of the data that experiences 
            the least elevation change. The elevations are represented as a grayscale image. The optimal path from each
            left pixel is plotted in blue, and the most optimal path is plotted in yellow.</p>
            <img src={coloradoImage} class={"max-w-md"} alt={"Path through the rockies"}></img>
        </>

    );
};

export default DPPathfinder