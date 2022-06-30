import React from 'react'
import '../Pages.css'
import CaptionedImage from '../../components/CaptionedImage/CaptionedImage'

import largeUnsolved from '../../images/emptyPuzzle.jpg'
import largeSolved from '../../images/solvedPuzzle.jpg'

const Crossword = () => {
  return (
        <>
        <h1>Crossword Puzzle Generator</h1>
        <p>This command-line program automatically generates a crossword puzzle of any size. It finds how the words
            overlap, assigns each a number and generates corresponding hints.
        </p>
        <div className="flex flex-wrap gap-8 justify-center">
            <CaptionedImage image={largeUnsolved} caption="Unsolved Puzzle"></CaptionedImage>
            <CaptionedImage image={largeSolved} caption="Solved Puzzle"></CaptionedImage>
        </div>
        <p>
            Any text file can be used as a source for words and hints. The provided text file is parsed and the
            the length and rarity of each word is calculated and used to select words based on the game difficulty.
            Hints are generated from dictionary entires or context from the text source. Words are sequentially
            inserted into the puzzle so that they overlap but do not collide with other words.
        </p>
        </>
  )
}

export default Crossword
