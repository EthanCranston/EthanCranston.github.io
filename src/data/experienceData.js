import React from 'react'
import spaceXImage from '../images/spaceX.jpg'
import sketchupImage from '../images/sketchup.jpg'
import tcpsImage from '../images/Turnkeylogo.jpg'
import rockitImage from '../images/rockIt.jpg'
import i9Image from '../images/i9logo.jpg'

const allExperience = [
{
    title: 'Software Engineer',
    company: 'SpaceX',
    date: 'Launching February 2023',
    image: spaceXImage,
    },
  {
    title: 'Software Engineering Intern',
    company: 'Trimble SketchUp',
    date: 'May 2022 - August 2022',
    image: sketchupImage,
    description:
            <>
                <ul className="list-disc">
                    <li>Worked in an Agile development environment and contributed to daily Scrum meetings</li>
                    <li>Solved bugs in a large codebase</li>
                    <li>Wrote Cypress tests and used Test Driven Development</li>
                    <li>Implemented visual testing to verify graphic components</li>
                </ul>
            </>

  },
  {
    title: 'Software Engineering and Security Analyst Intern',
    company: 'Turnkey Cyber Security and Privacy Solutions',
    date: 'March 2021 - May 2022',
    image: tcpsImage,
    description:
            <>
                <ul className="list-disc">
                    <li>Proposed, designed, and developed RPA software that reduced the company&apos;s manual workload by several hours per customer</li>
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
                    <li>Worked with experts to develop app architecture</li>
                    <li>Established and maintained a secure software development lifecycle</li>
                </ul>
            </>

  },
  {
    title: 'Site Manager',
    company: 'i9 Sports',
    date: 'March 2017 - August 2019',
    image: i9Image,
    description:
            <>
                <ul className="list-disc">
                    <li>Was responsible for overseeing field locations which
                        hosted a variety of different sports leagues</li>
                    <li>Coordinated coaches, players, parents, and referees</li>
                </ul>
            </>
  }

]

export default allExperience
