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
    desciption:
            <>
                <ul className="list-disc">
                    <li>Worked in an Agile developement environment with a large codebase</li>
                    <li>Wrote Cypress tests to establish Test Driven Developement</li>
                </ul>
            </>

  },
  {
    title: 'Security Analyst and Software Engineering Intern',
    company: 'Turnkey Cyber Security and Privacy Solutions',
    date: 'March 2021 - Present',
    image: tcpsImage,
    desciption:
            <>
                <ul className="list-disc">
                    <li>Proposed, designed, and developed RPA software that reduced the company's menial workload by 10x</li>
                    <li>Wrote documentation for the company's new security enclave environment</li>
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
    desciption:
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
    desciption:
            <>
                <ul className="list-disc">
                    <li>Designed and built remote control hovercraft kits from scratch</li>
                    <li>Produced the kits using Mill, Lathe, CAD, and 3D Printing</li>
                    <li>Taught a student how to assemble the kit and program a microcontroller to control the hovercraft</li>
                </ul>
            </>

  }

]

export default allExperience
