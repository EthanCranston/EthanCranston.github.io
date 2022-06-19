import React from "react";
import "./Pages.css";
import ContactButton from "../components/ContactButton/contactButton";
import EthanPortrait from "../images/EthanPortrait.jpg"
import CaptionedImages from "../components/CaptionedImage/CaptionedImage"

const HomePage = () => {
    return (
        <>
        <h1>About</h1>
        <div className="flex">
            <p>Born and raised in Golden, Colorado.</p>
            <CaptionedImages image={EthanPortrait} alt="Portrait of Ethan Cranston" maxHeight={72}/>
        </div>
        <br></br>
        <h1>Contact</h1>
        <ContactButton/>
        </>
    );
};

export default HomePage