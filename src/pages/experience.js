import React from "react";
import "./Pages.css";

import Dropdown from "../components/Dropdown/Dropdown";

const ExperiencePage = () => {
    return (
        <>
            <h1>Experience Page</h1>
            <p>This will basically be a resume.</p>

            <Dropdown
            title={"TestTitle"}
            description={"TestDescription"}
            />

        </>
    );
};

export default ExperiencePage