import React from 'react'
import './Pages.css'
import ContactButton from '../components/ContactButton/contactButton'
import EthanPortrait from '../images/EthanPortrait.jpg'
import CaptionedImages from '../components/CaptionedImage/CaptionedImage'

const HomePage = () => {
  return (
        <>
        <h1>Ethan Cranston</h1>
        <p>I&apos;m a software engineer with a passion for finding elegant solutions to difficult problems.
          I hold myself to a high standard of meticulous software development. My goal is to write code
          that is both maintainable and functional. Take a look at my projects to see these standards in action.</p>
        <CaptionedImages image={EthanPortrait} alt="Portrait of Ethan Cranston" maxHeight={72}/>

        <br></br>
        <h1>Contact</h1>
        <ContactButton/>
        </>
  )
}

export default HomePage
