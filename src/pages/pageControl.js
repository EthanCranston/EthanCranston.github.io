import React from "react";
import HomePage from "./home";
import ContactPage from "./contact";
import ProjectSelect from "./projectSelect";
import Page404 from "./page404";
import Crossword from "./projects/crossword";
import PuzzleSolver from "./projects/puzzleSolver";


const CurrentPage = ({ currentRoute }) => {
    
    if (currentRoute === "Home") {
        return <HomePage />;
    }
    else if (currentRoute === "Contact") {
        return <ContactPage />;
    }
    else if (currentRoute === "Projects"){
        return <ProjectSelect />;
    }
    else if (currentRoute === "crossword"){
        return <Crossword />;
    }
    else if (currentRoute == "puzzlesolver"){
        return <PuzzleSolver />;
    }
    else{
        return <Page404 />
    }

};

export default CurrentPage;