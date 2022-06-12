import React from "react";
import HomePage from "./home";
import ProjectSelect from "./projectSelect";
import ExperiencePage from "./experience";
import Page404 from "./page404";
import Crossword from "./projects/crossword";
import PuzzleSolver from "./projects/puzzleSolver";
import DPPathfinder from "./projects/DPPathfinder";
import ThisWebsite from "./projects/thisWebsite";
import AutoClicker from "./projects/autoClicker";
import EquationFinder from "./projects/equationFinder";
import Clue from "./projects/clue";



const allPages = {
    "Home": <HomePage/>,
    "Projects": <ProjectSelect/>,
    "Experience": <ExperiencePage/>,
    "crossword": <Crossword/>,
    "puzzlesolver": <PuzzleSolver/>,
    "dppathfinder": <DPPathfinder/>,
    "thiswebsite": <ThisWebsite/>,
    "autoclicker": <AutoClicker/>,
    "equationfinder": <EquationFinder/>,
    "clue": <Clue/>
}


const CurrentPage = ({ currentRoute }) => {

    let page = allPages[currentRoute];
    if (!page) page = <Page404 />;

    return page;

};

export default CurrentPage;