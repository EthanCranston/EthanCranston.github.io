import crosswordImage from '../images/emptyPuzzle.jpg'
import coloradoImage from '../images/coloradoPath.jpg'
import websiteImage from '../logo.svg'
import autoClickerImage from '../images/mouseClick.jpg'
import mathImage from '../images/mathEquations.jpg'
import clueGame from '../images/clueGame.jpg'
import planePuzzle from '../images/3x3PuzzlePlanet.jpg'
import paperworkImage from '../images/paperwork.jpg'
import bezier from '../images/bezier.jpg'
import scraper from '../images/scraper.png'
import visualImage from '../images/test-diffZoom.png'
import identifiedHuman from '../images/identifiedHuman.png'

const allProjects = [
  {
    title: 'Human Detection',
    description: 'Used camera and LIDAR to identify humans near autonomous vehicles',
    image: identifiedHuman,
    link: 'humandetection'
  },
  {
    title: 'Visual Regression Testing',
    description: 'Implemented visual testing to detect difficult regressions',
    image: visualImage,
    link: 'visualtesting'
  },
  {
    title: 'Bézier Curves',
    description: 'An implementation of Catmull-Rom splines',
    image: bezier,
    link: 'bezier'
  },
  {
    title: 'Security Scraping Tool',
    description: 'A tool that generates a security report from scraped data',
    image: scraper,
    link: 'scrapingtool'
  },
  {
    title: 'Client Management System',
    description: 'A custom solution to streamline customer paperwork',
    image: paperworkImage,
    link: 'clientmanagement'
  },
  {
    title: 'Auto Clicker',
    description: 'A custom software to automate simple mouse interaction',
    image: autoClickerImage,
    link: 'autoclicker'
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
    title: 'DP Pathfinder',
    description: 'An efficient algorithm to find a route through difficult terrain',
    image: coloradoImage,
    link: 'dppathfinder'
  },
  {
    title: 'Scramble Squares',
    description: 'A program to automatically solves difficult puzzles',
    image: planePuzzle,
    link: 'scramblesquares'
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
  }
]

export default allProjects
