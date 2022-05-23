import React from "react";
import "./Pages.css";

import Tile from "../components/Tile/Tile";
import allProjects from "./projects/projectData";

const ProjectSelect = () => {

    let tiles = [];

    allProjects.forEach(element => {
        tiles.push(
            <Tile
                title={element.title}
                description={element.description}
                image={element.image}
                link={element.link}
            />)
    });

    //<div class={ "relative w-60 h-60 bg-[url('/public/images/data.jpg')] bg-cover rounded-lg" }></div>
    return (
        <>
            <h1 className='text-center'>My Projects:</h1>
            <div className='flex justify-center'>
                <div className='flex flex-wrap w-2/3 justify-center m-10  gap-8'>
                    {tiles}
                </div>
            </div>
            
        </>
    );
};

export default ProjectSelect