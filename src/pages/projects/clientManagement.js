import React from 'react'
import '../Pages.css'
import CaptionedImage from '../../components/CaptionedImage/CaptionedImage'

import scoringGUI from '../../images/scoringGUI.jpg'

const CustomerManagement = () => {
  return (
        <>
          <h1>Client Management System</h1>
          <p>As a software contractor, I developed a polished client management system for
             cyber security evaluations. The software consolidates client data by creating a client profile,
            providing a graphic user interface to evaluate and score their security practices, then export
            the results into a standardized excel spreadsheet.</p>
          <CaptionedImage image={scoringGUI} caption="scoring GUI"/>
        </>
  )
}

export default CustomerManagement
