import React from 'react'
import './Pages.css'

import Tile from '../components/Tile/Tile'
import allProjects from '../data/projectData'

const ProjectSelect = () => {
  const tiles = []

  allProjects.forEach(element => {
    tiles.push(
            <Tile
                title={element.title}
                description={element.description}
                image={element.image}
                link={element.link}
                key={element.title}
            />)
  })

  return (
        <>
            <h1>My Projects:</h1>
            <div className='flex flex-wrap justify-center mt-10 gap-8'>
                {tiles}
            </div>
        </>
  )
}

export default ProjectSelect
