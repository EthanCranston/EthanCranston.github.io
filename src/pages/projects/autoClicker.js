import React from "react";
import "../Pages.css";
import CaptionedImage from "../../components/CaptionedImage/CaptionedImage";
import exampleImage from "../../images/autoClickerExample.jpg"
import addMenu from "../../images/autoClickerAddMenu.jpg"
import UMLDiagram from "../../images/autoClickerUML.png"

const AutoClicker = () => {
    return (
        <>
        <h1>Custom Auto Clicker</h1>
        <p>When looking for an auto clicker, most of the options I found online either lacked the
            functionality I wanted, came from suspicious websites, or were not free. To solve this, I wrote own program 
            using Python and PyQt6.</p>
        <br></br>
        <p>The user interface uses cards to display each instruction. The instructions can be reordered, edited, and deleted
            with the buttons on the cards. A second thread runs un parallel to monitor for the escape event, so that the program
            can be stop and started.
        </p>
        <div class={'flex gap-10 place-items-center max-h-72 m-8'}>
        <CaptionedImage image={exampleImage} caption={"Main user interface"} maxHeight={72}/>
        <CaptionedImage image={addMenu} caption={"New instruction menu"} maxHeight={72}/>
        </div>
        
        <p>My program features a modular design that allows for the addition of different functionality. A simple "instruction" class
            can be extended to add any new commands. Left click, right click, mouse movement, course and fine delay are currently 
            implemented. In the future, keyboard shortcuts, typing, and dragging will be added.
        </p>
        <CaptionedImage image={UMLDiagram} caption={"UML Diagram"}/>
        
        <br></br>

        <p>
            View the full project here: <a href="https://github.com/ecranston405/AutoClicker" target="_blank">https://github.com/ecranston405/AutoClicker</a>
        </p>

        </>
    
    );
};

export default AutoClicker