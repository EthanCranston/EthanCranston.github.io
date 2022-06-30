import React from 'react'
import '../Pages.css'
import { MathComponent } from 'mathjax-react'
import CaptionedImage from '../../components/CaptionedImage/CaptionedImage'

import boatImage from '../../images/3x3PuzzleBoat.jpg'
import solvingProcess from '../../images/3x3PuzzleSolver.jpg'
import solvedPuzzle from '../../images/solved3x3Puzzle.jpg'

const PuzzleSolver = () => {
  return (
        <>
        <h1>Scramble Squares Puzzle Solver</h1>
        <p><a href="https://www.scramblesquares.com/">These 3x3 puzzles</a> are surprisingly difficult to solve.
            There are billions of possible tile combinations
            and no clear indication of when a piece is in the correct position.
        </p>
        <CaptionedImage maxHeight={72} image={boatImage}/>
        <MathComponent tex={String.raw`\frac{4^9 * 9!}{16} = 5,945,425,920`} />
        <p className="mt-0">The equation above calculates all of the possible combinations. 4^9 represents
            each piece&apos;s orientation/rotation. 9! represents each tile&apos;s location.
            Divide by 16 to account for symmetrically equivalent solutions.</p>

        <p>This brute-force algorithm to solve these puzzles was one of my first-ever programing projects.
            The user inputs which image appears on each side of each piece and the program tries different
            combinations until the solution is found. The program&apos;s progress is shown in a live GUI that shows
            the current position and orientation of each tile.
        </p>
        <div className="flex flex-wrap gap-8 justify-center">
            <CaptionedImage image={solvingProcess} caption="Live GUI" maxHeight={72}/>
            <CaptionedImage image={solvedPuzzle} caption="Solved Puzzle" maxHeight={72}/>
        </div>
        <p>The &quot;o&quot; value represents one of the four possible orientations.</p>
        </>
  )
}

export default PuzzleSolver
