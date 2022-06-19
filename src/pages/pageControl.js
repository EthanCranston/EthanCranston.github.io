import React, {Suspense} from "react";
// import HomePage from "./home";
// import ProjectSelect from "./projectSelect";
// import ExperiencePage from "./experience";
// import Page404 from "./page404";
// import Crossword from "./projects/crossword";
// import PuzzleSolver from "./projects/puzzleSolver";
// import DPPathfinder from "./projects/DPPathfinder";
// import ThisWebsite from "./projects/thisWebsite";
// import AutoClicker from "./projects/autoClicker";
// import EquationFinder from "./projects/equationFinder";
// import Clue from "./projects/clue";

const HomePage = React.lazy(() => import("./home"));
const ProjectSelect = React.lazy(() => import("./projectSelect"));
const ExperiencePage = React.lazy(() => import("./experience"));
const Page404 = React.lazy(() => import("./page404"));
const Crossword = React.lazy(() => import("./projects/crossword"));
const PuzzleSolver = React.lazy(() => import("./projects/puzzleSolver"));
const DPPathfinder = React.lazy(() => import("./projects/DPPathfinder"));
const ThisWebsite = React.lazy(() => import("./projects/thisWebsite"));
const AutoClicker = React.lazy(() => import("./projects/autoClicker"));
const EquationFinder = React.lazy(() => import("./projects/equationFinder"));
const Clue = React.lazy(() => import("./projects/clue"));


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
    if (!page) page = <Page404/>;

    return (
        <Suspense fallback={<div>Loading...</div>}>
            {page}
        </Suspense>
    );

};

export default CurrentPage;