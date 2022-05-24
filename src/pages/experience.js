import React from "react";
import "./Pages.css";

import Dropdown from "../components/Dropdown/Dropdown";

import sketchupImage from "../images/sketchup.jpg"

import allExperience from "../data/experienceData";

const ExperiencePage = () => {
    let experience = [];

    allExperience.forEach(element =>{
        experience.push(
            <Dropdown
            title={element.title}
            company={element.company}
            date={element.date}
            image={element.image}
            description={element.desciption}
            />
        )
    });


    return (
        <>
            <h1>Experience Page</h1>
            <p>This will basically be a resume.</p>

            <div>
                {experience}
            </div>

            {/* <Dropdown
            title={"Test Title Test Title"}
            date={"April 2022 - June 2023"}
            image={sketchupImage}
            description={"TestDescription"}
            /> */}

        </>
    );
};

export default ExperiencePage