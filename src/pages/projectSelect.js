import React from "react";
import "./Pages.css";

import Tile from "../components/Tile/Tile";
import allProjects from "../data/projectData";

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