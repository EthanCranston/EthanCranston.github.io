import React from 'react'
import '../Pages.css'
import CaptionedImage from '../../components/CaptionedImage/CaptionedImage'

import scoringGUI from '../../images/scoringGUI.jpg'

const CustomerManagement = () => {
  return (
        <>
          <h1>Client Management System</h1>
          <p>As a software contractor, I developed this polished client management system for
             cyber security evaluations. The software consolidates client data by creating a client profile,
            providing a graphic user interface to evaluate and score their security practices, then exports
            the results into a standardized excel spreadsheet or a custom file format.</p>
          <p>The software can read and use any set of security standards such as the NIST Cyber Security Framework,
             or custom requirements. It can even handle multiple different standards and automatically
             update related questions between the standards.</p>
          <CaptionedImage image={scoringGUI} caption="Scoring GUI"/>
          <p>The client&apos;s compliance can be assessed interactively with the window shown above. In addition
            to scoring, the GUI allows the user to attach associated files and add notes.
            Previously-completed compliance data can be imported from excel sheets or from the software&apos;s
            custom file format.
          </p>
        </>
  )
}

export default CustomerManagement
