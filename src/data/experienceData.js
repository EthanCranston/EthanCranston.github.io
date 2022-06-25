import React from 'react'
import sketchupImage from '../images/sketchup.jpg'
import tcpsImage from '../images/Turnkeylogo.png'
import rockitImage from '../images/rockIt.jpg'
import comResImage from '../images/communityResources.jpg'

const allExperience = [
  {
    title: 'Software Engineering Intern',
    company: 'Trimble SketchUp',
    date: 'May 2022 - Present',
    image: sketchupImage,
    description:
            <>
                <ul className="list-disc">
                    <li>Worked in an Agile development environment and contributed to daily Scrum meetings</li>
                    <li>Solved bugs in large codebase</li>
                    <li>Wrote Cypress tests to develope Test Driven Development</li>
                </ul>
            </>

  },
  {
    title: 'Security Analyst and Software Engineering Intern',
    company: 'Turnkey Cyber Security and Privacy Solutions',
    date: 'March 2021 - Present',
    image: tcpsImage,
    description:
            <>
                <ul className="list-disc">
                    <li>Proposed, designed, and developed RPA software that reduced the company&apos;s menial workload by 10x</li>
                    <li>Wrote documentation for the company&apos;s new security enclave environment</li>
                    <li>Learned about a variety of network and hardware vulnerabilities</li>
                    <li>Gained experience with a variety of essential security practices</li>
                </ul>
            </>

  },
  {
    title: 'Technical Advisor',
    company: 'Rock It Relationships',
    date: 'September 2021 - May 2022',
    image: rockitImage,
    description:
            <>
                <ul className="list-disc">
                    <li>Worked with a team with three other developers to create a high-quality social networking app</li>
                    <li>Established and maintained a secure software development lifecycle</li>
                    <li>Used React Native to help develop the app frontend</li>
                </ul>
            </>

  },

  {
    title: 'STEM Mentor',
    company: 'Community Resources Inc.',
    date: 'Fall 2020',
    image: comResImage,
    description:
            <>
                <ul className="list-disc">
                    <li>Designed and built remote control hovercraft kits from scratch</li>
                    <li>Produced the kits using Mill, Lathe, CAD, and 3D Printing</li>
                    <li>Taught a student how to assemble the kit and program a micro-controller to control the hovercraft</li>
                </ul>
            </>

  }

]

export default allExperience
