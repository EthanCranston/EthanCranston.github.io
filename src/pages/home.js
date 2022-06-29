import React from 'react'
import './Pages.css'
import ContactButton from '../components/ContactButton/contactButton'
import EthanPortrait from '../images/EthanPortrait.jpg'
import CaptionedImages from '../components/CaptionedImage/CaptionedImage'

const HomePage = () => {
  return (
        <>
        <h1>Ethan Cranston</h1>
        <p>Updated</p>
        <p>I&apos;m a software engineer with a passion for creating elegant code. I hold myself to a high
          standard of writing programs that are both maintainable and functional.  Take a look at my
          projects to see these standards in action. </p>
        <CaptionedImages image={EthanPortrait} alt="Portrait of Ethan Cranston" maxHeight={72}/>
        <p>I was born and raised in Golden, Colorado. I enjoy spending my
        weekend hiking or skiing depending on the season.</p>

        <br></br>
        <h1>Contact</h1>
        <ContactButton/>
        </>
  )
}

export default HomePage
