import dataImage from "../images/data.jpg"
import coloradoImage from "../images/coloradoPath.png"
import websiteImage from "../data/EthanLogo1.svg"
import autoClickerImage from "../images/autoClickerExample.jpg"
import mathImage from "../images/mathEquations.jpg"
import clueGame from "../images/clueGame.jpg"

const allProjects = [ 
    {
        title: "Auto Clicker",
        description: "A custom software to automate simple mouse interaction",
        image: autoClickerImage,
        link: "autoclicker",
    },
    {
        title: "DP Pathfinder",
        description: "An efficient algorithm to find a route through difficult terrain",
        image: coloradoImage,
        link: "dppathfinder",
    },
    {
        title: "This Website",
        description: "See what went into making this website",
        image: websiteImage,
        link: "thiswebsite",
    },
    {
        title: "Equation Finder",
        description: "A program that will find an equation based on the solution",
        image: mathImage,
        link: "equationfinder",
    },
    {
        title: "Clue Game",
        description: "An digital rendition of the 1943 murder mystery board game",
        image: clueGame,
        link: "clue",
    },
    {
        title: "Crosswords",
        description: "A project that takes in arbitrary text, a difficult and outputs a crossword puzzle with hints",
        image: dataImage,
        link: "crossword",
    },

]

export default allProjects;