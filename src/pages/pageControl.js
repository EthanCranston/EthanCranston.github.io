import React from "react";
import classNames from "classnames";
import HomePage from "./home";
import ContactPage from "./contact";
import ProjectSelect from "./projectSelect";


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
};

export default CurrentPage;