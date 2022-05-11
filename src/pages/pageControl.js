import React from "react";
import classNames from "classnames";
import HomePage from "./home";
import ContactPage from "./contact";
import ProjectSelect from "./projectSelect";
import Crossword from "./projects/crossword";
import PuzzleSolver from "./projects/puzzleSolver";


const CurrentPage = ({ currentRoute }) => {
    
    if (currentRoute === "Home") {
        return <HomePage />;
    }
    if (currentRoute === "Contact") {
        return <ContactPage />;
    }
    if (currentRoute === "Projects"){
        return <ProjectSelect />;
    }
    if (currentRoute === "crossword"){
        return <Crossword />;
    }
    if (currentRoute == "puzzlesolver"){
        return <PuzzleSolver />;
    }

};

export default CurrentPage;