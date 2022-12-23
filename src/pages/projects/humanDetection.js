import React from 'react'
import '../Pages.css'
import CaptionedImage from '../../components/CaptionedImage/CaptionedImage'
import refuelingArm from '../../images/refuelingArm.jpg'
import systemArchitecture from '../../images/humanDetectionSystemArchitecture.png'
import humanDetectionCamera from '../../images/humanDetectionCamera.png'
import probabilityCloud from '../../images/probabilityCloud.png'
import rawLidarData from '../../images/rawLidarData.png'
import cleanedLidarData from '../../images/cleanedLidarData.png'
import clusterLidarData from '../../images/clusteredLidarData.png'
import humanClusterLidarData from '../../images/humanClusterLidarData.png'
import finalResult from '../../images/finalProductStratom.jpg'
import identifiedHuman from '../../images/identifiedHuman.png'

const HumanDetection = () => {
  return (
        <>
        <h1>Human Detection using LIDAR and Video</h1>
        <p>For my senior capstone project, I worked with a team of 3 other engineering students to
          develop a reliable system of human detection for the automation company <a href="https://www.stratom.com/">Stratom</a>.
          The project uses live camera and LIDAR data to help Stratom's automated systems avoid human collisions. For example,
          the project could be implemented on the autonomous refueling arm shown below so that it would pause operation if a 
          human got too close. 
        </p>
        <div className='flex flex-wrap gap-8 justify-center'>
          <CaptionedImage maxHeight={72} image={refuelingArm} caption="RAPID™ Autonomous Refueling Arm"/>
          <CaptionedImage maxHeight={72} image={finalResult} caption="Live demo of human identification"/>
        </div>
        <p>My primary technical role in this project was the creation of the Docker environment and the development and 
          implementation of the LIDAR detection.</p>
        <br></br>


        <h2>System Overview</h2>
        <p> Video, LIDAR and position data are consumed and processed to produce a final location and confidence 
          interval for each identified human. Additionally, camera and LIDAR images are annotated and published with the 
          detected locations. The program is encapsulated inside of a Docker container so that it can be easily run on any system. 
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

        <h2>LIDAR Detection</h2>
        <p>The LIDAR data is made up of a point cloud created by a series of circular scans from the sensor.
          The original point cloud data is cleaned to focus in on the important part of the the scan and reduce processing time. 
          Statistical analysis is preformed identify and remove outlier points. Robot position information is used to crop out the floor
          and area outside of the relevant image frame.
        </p>
        <div className='flex flex-wrap gap-8 justify-center'>
          <CaptionedImage maxHeight={72} image={rawLidarData} caption="Original LIDAR point cloud"/>
          <CaptionedImage maxHeight={72} image={cleanedLidarData} caption="Cleaned LIDAR point cloud"/>
        </div>
        <br></br>
        <p>Next, <a href="https://towardsdatascience.com/dbscan-clustering-explained-97556a2ad556">DBSCAN Clustering</a> is
        used to identify discrete objects in the frame. This isolates individual objects in the frame for future processing.</p>
        <CaptionedImage maxHeight={72} image={clusterLidarData} caption="Clustered LIDAR point cloud"/>

        <p>Each of these clusters are filtered based on size to isolate objects that are approximated human-sized. Next, each cluster
          is compared to a probability map of expected points for a scan of a human. This probability map was
          created by normalizing, then averaging a known set of human point cloud clusters. A confidence score is created
          by summing the difference between a normalized cluster and the probability map.
          
        </p>
        <div className='flex flex-wrap gap-8 justify-center'>
          <CaptionedImage maxHeight={72} image={probabilityCloud} caption="Human probability map"/>
          <CaptionedImage maxHeight={72} image={humanClusterLidarData} caption="Clusters after applying filters"/>
        </div>
        <p>During testing, this approach was successful about 80% of the time, but excelled in situations with difficult lighting
          where a camera would have failed.
        </p>
        <CaptionedImage maxHeight={72} image={identifiedHuman} caption="Final bounding box LIDAR annotation"/>

        <br></br>

        <h2>Camera Detection</h2>
        <p>The programs identifies humans from a video stream using a pre-trained neural network call You Only Look 
        Once (<a href="https://pjreddie.com/darknet/yolo/">YOLO</a>). In our testing, the neural network correctly 
        identified humans 85% of the time.</p>
        <CaptionedImage maxHeight={72} image={humanDetectionCamera} caption="Bounding boxes around detected humans"/>
        <br></br>

        <p>View the full project here:</p>
        <a href="https://github.com/EthanCranston/StratoMiners">
        https://github.com/EthanCranston/StratoMiners</a>
        
        </>
  )
}

export default HumanDetection
