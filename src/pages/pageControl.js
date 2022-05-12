import React from "react";
import HomePage from "./home";
import ContactPage from "./contact";
import ProjectSelect from "./projectSelect";
import Page404 from "./page404";
import Crossword from "./projects/crossword";
import PuzzleSolver from "./projects/puzzleSolver";


const allPages = {
    "Home": <HomePage />,
    "Contact": <ContactPage />,
    "Projects": <ProjectSelect />,
    "crossword": <Crossword />,
    "puzzlesolver": <PuzzleSolver />
}


const CurrentPage = ({ currentRoute }) => {

    let page = allPages[currentRoute];
    if (!page) page = <Page404 />;

    return page;

};

export default CurrentPage;