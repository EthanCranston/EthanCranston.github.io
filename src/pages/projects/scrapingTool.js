import React from 'react'
import '../Pages.css'
import CaptionedImage from '../../components/CaptionedImage/CaptionedImage'
import gui from '../../images/technicalAppendixGUI.jpg'

const ScrapingTool = () => {
  return (
        <>
        <h1>Security Scraping Tool</h1>
        <p>I developed this tool to automate the collection and formatting of data
            from different online security evaluation sites. The user can input different domains and indicate which
            tests should be run on them. Each of the different tests run a check against the domain
            such as checking for open ports, email server protocols, DNS, SPF or DMARK records.</p>
        <CaptionedImage image={gui} caption="Domain input user input"/>
        <p>Each test visits a website that checks the relevant records. The program navigates each site and records
            the results using Selenium. Some results can be automatically scored. The rest are scored by the user in
            an interactive GUI. All of the test results and scores are summarized in an automatically generated report
            exported to Microsoft Word using the Python Docx library.
        </p>
        <p>Each test extends a general Selenium test class that allows for a shared web driver and simple implementation
            and maintenance. Additionally, the tests are architected to be segmented from the rest of the program.
            This allows the tests to safely fail if there is any issue with the website they are visiting. It also allows
            the test to be run in parallel to optimize efficiency.
        </p>
        </>
  )
}

export default ScrapingTool
