import React from 'react'
import '../Pages.css'
import CaptionedImage from '../../components/CaptionedImage/CaptionedImage'
import refuelingArm from '../../images/refuelingArm.jpg'
import systemArchitecture from '../../images/humanDetectionSystemArchitecture.png'

const HumanDetection = () => {
  return (
        <>
        <h1>Human Detection Using Camera and LIDAR</h1>
        <p>For my senior capstone project, I worked with a team of 3 other engineering students to
          develop a reliable system for human detection for the automation company <a href="https://www.stratom.com/">Stratom</a>.
          The project uses live camera and LIDAR data to help Stratom's automated systems avoid human collisions. For example,
          the project could be implemented on the autonomous refueling arm shown below so that it would pause operation if a 
          human got too close. 
        </p>
        <CaptionedImage maxHeight={72} image={refuelingArm} caption="RAPID™ Autonomous Refueling Arm"/>
        <p>My primary technical role in this project was the creation of the Docker environment and the development and 
          implementation of the LIDAR detection.</p>
        <br></br>


        <h2>System Overview</h2>
        <p> Camera, LIDAR and position data are consumed and processed to produce a final location and confidence 
          interval for each human. Additionally, camera and LIDAR images are annotated and published with the 
          detected locations. The program lives inside of a Docker container so that it can be easily run on any system. 
          It is comprised of ROS nodes as shown in the diagram below.
        </p>
        <CaptionedImage maxHeight={72} image={systemArchitecture} caption="System Architecture"/>

        <div>
        <p>The project utilizes the following technologies:</p>
        <ul>
          <li>• <a href="https://www.docker.com/">Docker</a></li>
          <li>• <a href="https://www.ros.org/">ROS2</a></li>
          <li>• <a href="https://opencv.org/">OpenCV</a></li>
          <li>• <a href="https://scikit-learn.org/">SciKit-Learn</a></li>
        </ul>
        </div>
        <br></br>


        <h2>Camera Detection</h2>
        <p></p>
        <br></br>
        
        <h2>LIDAR Detection</h2>
        <p></p>
        <br></br>

        </>
  )
}

export default HumanDetection
