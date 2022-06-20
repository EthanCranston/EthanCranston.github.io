import React from "react";
import "./Pages.css";
import ContactButton from "../components/ContactButton/contactButton";
import EthanPortrait from "../images/EthanPortrait.jpg"
import CaptionedImages from "../components/CaptionedImage/CaptionedImage"

const HomePage = () => {
    return (
        <>
        <h1>About</h1>
    
        <p>I was born and raised in Golden, Colorado.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
            ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
            in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
        <CaptionedImages image={EthanPortrait} alt="Portrait of Ethan Cranston" maxHeight={72}/>
        
        <br></br>
        <h1>Contact</h1>
        <ContactButton/>
        </>
    );
};

export default HomePage