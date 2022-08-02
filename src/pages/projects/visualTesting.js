import React from 'react'
import '../Pages.css'
import CaptionedImage from '../../components/CaptionedImage/CaptionedImage'

import cubeImage from '../../images/test-base.png'
import cylinderImage from '../../images/test-actual.png'
import diffImage from '../../images/test-diff.png'

const VisualTesting = () => {
  return (
        <>
        <h1>Visual Regression Tests</h1>

        <p>While writing regression tests for a 3D modeling software, I was faced with the challenge of verifying
            the state of the modeling canvas. The specific architecture of this web application made the canvas
            a complete black box to <a href="https://www.cypress.io/">Cypress</a>, the testing framework.
            To overcome this, I implemented visual testing to identify regressions with pixel differences.</p>

        <div className='flex flex-wrap gap-8 justify-center'>
            <CaptionedImage image={cubeImage} caption='Cube base image'/>
            <CaptionedImage image={cylinderImage} caption='Cylinder regression'/>
        </div>
        <CaptionedImage image={diffImage} caption='Pixel difference highlights the issue'/>
        <p>Visual testing takes a screenshot of the test run and compares it to a base image to check for any discrepancies</p>
        <p>I used the <a href="https://github.com/mjhea0/cypress-visual-regression">cypress-visual-regression</a> open
            source plugin for the core of the visual testing logic, and added custom command line arguments for testers
            to easily interact with the library. </p>
        </>
  )
}

export default VisualTesting
