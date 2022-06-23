import React from 'react'
import { useNavigate } from 'react-router-dom'

import styles from './Tile.module.css'

const Tile = ({ title, description, image, link }) => {
  const navigate = useNavigate()

  return (
        <div className={'relative w-60 h-60 bg-cover rounded-lg'} onClick={() => { navigate(link) }}>
            <img src={image} className={'absolute w-full h-full object-cover rounded-lg'} alt={'Project' + title}></img>
            <div className={styles.background}>
                <h1 className={styles.tileTitle}> {title}</h1>
                <p className={styles.tileDesc}> {description}</p>
            </div>
        </div>
  )
}

export default Tile
