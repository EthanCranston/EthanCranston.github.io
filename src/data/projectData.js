import crosswordImage from '../images/emptyPuzzle.jpg'
import coloradoImage from '../images/coloradoPath.jpg'
import websiteImage from '../logo.svg'
import autoClickerImage from '../images/mouseClick.jpg'
import mathImage from '../images/mathEquations.jpg'
import clueGame from '../images/clueGame.jpg'
import planePuzzle from '../images/3x3PuzzlePlanet.jpg'
import paperworkImage from '../images/paperwork.jpg'

const allProjects = [
  {
    title: 'Auto Clicker',
    description: 'A custom software to automate simple mouse interaction',
    image: autoClickerImage,
    link: 'autoclicker'
  },
  {
    title: 'Client Management System',
    description: 'A custom solution to streamline customer paperwork',
    image: paperworkImage,
    link: 'clientmanagement'
  },
  {
    title: 'DP Pathfinder',
    description: 'An efficient algorithm to find a route through difficult terrain',
    image: coloradoImage,
    link: 'dppathfinder'
  },
  {
    title: 'This Website',
    description: 'See what went into making this website',
    image: websiteImage,
    link: 'thiswebsite'
  },
  {
    title: 'Equation Finder',
    description: 'A program that will find an equation based on the solution',
    image: mathImage,
    link: 'equationfinder'
  },
  {
    title: 'Clue Game',
    description: 'A digital rendition of the 1943 murder mystery board game',
    image: clueGame,
    link: 'clue'
  },
  {
    title: 'Crosswords',
    description: 'A project that can generate a crossword puzzle with based on any text source',
    image: crosswordImage,
    link: 'crossword'
  },
  {
    title: 'Scramble Squares',
    description: 'A program to automatically solves difficult puzzles',
    image: planePuzzle,
    link: 'scramblesquares'
  }

]

export default allProjects
