import React from "react";
import { Link , useParams} from "react-router-dom";

import PuzzleSolver from "./puzzleSolver";
import Crossword from "./crossword";
import DPPathfinder from "./DPPathfinder";


function ProjectControl() {
    const { projectName } = useParams();

    if (projectName === "puzzlesolver") {
        return <PuzzleSolver />;
    }
    if (projectName === "crossword") {
        return <Crossword />;
    }

};

export default ProjectControl