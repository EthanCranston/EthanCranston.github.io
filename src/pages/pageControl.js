import React from "react";
import HomePage from "./home";
import ContactPage from "./contact";
import ProjectSelect from "./projectSelect";
import ExperiencePage from "./experience";
import Page404 from "./page404";
import Crossword from "./projects/crossword";
import PuzzleSolver from "./projects/puzzleSolver";
import DPPathfinder from "./projects/DPPathfinder";
import ThisWebsite from "./projects/thisWebsite";


const allPages = {
    "Home": <HomePage />,
    "Contact": <ContactPage />,
    "Projects": <ProjectSelect />,
    "Experience": <ExperiencePage />,
    "crossword": <Crossword />,
    "puzzlesolver": <PuzzleSolver />,
    "dppathfinder": <DPPathfinder />,
    "thiswebsite": <ThisWebsite />
}


const CurrentPage = ({ currentRoute }) => {

    let page = allPages[currentRoute];
    if (!page) page = <Page404 />;

    return page;

};

export default CurrentPage;