import React from "react";
import "./Pages.css";

import Dropdown from "../components/Dropdown/Dropdown";

import daImage from "../images/binary.jpg"
import sketchupImage from "../images/sketchup.jpg"

const ExperiencePage = () => {
    return (
        <>
            <h1>Experience Page</h1>
            <p>This will basically be a resume.</p>

            <Dropdown
            title={"Test Title Test Title"}
            date={"April 2022 - June 2023"}
            image={sketchupImage}
            description={"TestDescription"}
            />

        </>
    );
};

export default ExperiencePage