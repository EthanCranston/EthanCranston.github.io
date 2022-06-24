import crosswordImage from '../images/emptyPuzzle.jpg'
import coloradoImage from '../images/coloradoPath.png'
import websiteImage from '../images/logo.svg'
import autoClickerImage from '../images/mouseClick.jpg'
import mathImage from '../images/mathEquations.jpg'
import clueGame from '../images/clueGame.jpg'
import planePuzzle from '../images/3x3PuzzlePlanet.jpg'

const allProjects = [
  {
    title: 'Auto Clicker',
    description: 'A custom software to automate simple mouse interaction',
    image: autoClickerImage,
    link: 'autoclicker'
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
    description: 'A project that can generate a crossword puzzle with based on any text source',
    image: planePuzzle,
    link: 'scramblesquares'
  }

]

export default allProjects
