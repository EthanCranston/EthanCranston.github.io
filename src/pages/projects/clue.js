import React from 'react'
import '../Pages.css'
import CaptionedImage from '../../components/CaptionedImage/CaptionedImage'

import clueBoard from '../../images/clueBoard.jpg'

const Clue = () => {
  return (
        <>
        <h1>Clue Game</h1>
        <p>This project was completed as part of a Software Engineering course, which focused
            on <a href="https://www.geeksforgeeks.org/solid-principle-in-programming-understand-with-real-life-examples/">
            Solid Design</a> principles. The game allows the player to move, make accusations, and interact with the
            five AI opponents. The program can represent any arbitrary board layout or player combination by interpreting a csv file.</p>
        <CaptionedImage image={clueBoard} caption="Clue board with movement highlighting"/>
        <p>On the player&apos;s turn, all of his possible moves are highlighted in pink as shown above. When the player moves,
            the piece is animated and moves across the board to its new position. The game also supports hidden passageways
            like in the original board game.
        </p>
        </>

  )
}

export default Clue
