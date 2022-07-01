import React from 'react'
import shavedIceImage from '../images/shavedIceParadise.jpg'
import comResImage from '../images/communityResources.jpg'
import minesFoundationImage from '../images/minesFoundation.png'

const allActivities = [
  {
    title: 'Founder',
    company: 'Project Provider',
    date: 'Spring 2020',
    image: minesFoundationImage,
    description:
    <>
        <ul className="list-disc">
            <li>Founded a non-profit that helps fund students&apos; personal tinkering projects</li>
            <li>Successfully competed through several rounds of pitching to the Mines
                Foundation&apos;s &quot;Philanthropy Tank&quot;</li>
            <li>Managed thousands of dollars of organization funding</li>
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
            <li>Designed, built and coded remote control hovercraft kits</li>
            <li>Produced the kits using the Mill, Lathe, CAD, and 3D Printing</li>
            <li>Taught a student how to assemble the kit and program a micro-controller to wirelessly
                control the hovercraft</li>
        </ul>
    </>
  },
  {
    title: 'Founder and CEO',
    company: 'Shaved Ice Paradise',
    date: 'Summer 2019',
    image: shavedIceImage,
    description:
        <>
            <ul className="list-disc">
                <li>Founded a mobile food company to serve shaved ice to the Denver Metro area</li>
                <li>Independently designed and constructed an up-to-code mobile food cart complete with
                    running water, propane heating, electrical supply, ice cooling, storage, and logistics systems
                </li>
                <li>Prototyped, design and created technical drawings for initial permit approval</li>
                <li>Navigated paperwork and inspections to receive an official food cart license</li>
            </ul>
        </>
  }

]

export default allActivities
