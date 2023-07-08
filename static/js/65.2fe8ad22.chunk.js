"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[65],{443:function(e,t,a){a(2791);var i=a(184);t.Z=function(e){var t=e.image,a=e.caption,n=e.alt;return void 0===n&&(n=a),(0,i.jsxs)("div",{className:"flex flex-col m-2",children:[(0,i.jsx)("img",{src:t,className:"max-w-80 max-h-80 border-amber-500 rounded-md border-b-2\n            ".concat(void 0!==a?" rounded-bl-none":""),alt:n}),(0,i.jsx)("div",{className:"flex rounded-b-lg",children:(0,i.jsx)("p",{className:"mt-0 px-1 text-sm bg-amber-500 rounded-b-sm",children:a})})]})}},8992:function(e,t,a){a.r(t),a.d(t,{default:function(){return f}});a(2791),a(4311);var i=a(443),n=a.p+"static/media/refuelingArm.fa84c334949823a37cb3.jpg",s=a.p+"static/media/humanDetectionSystemArchitecture.e5b862900f12391ba4c0.png",o=a.p+"static/media/humanDetectionCamera.cd67c7d48f6763620224.png",r=a.p+"static/media/probabilityCloud.d51c71dd2285980f7554.png",c=a.p+"static/media/rawLidarData.73d7930ef26b1dc590bf.png",d=a.p+"static/media/cleanedLidarData.2b5c274976591584534c.png",l=a.p+"static/media/clusteredLidarData.4623e901622042914b20.png",h=a.p+"static/media/humanClusterLidarData.5253aa734d28fee0af36.png",m=a.p+"static/media/finalProductStratom.9da1d1107c6953007458.jpg",p=a(6955),u=a(184),f=function(){return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("h1",{children:"Human Detection using LIDAR and Video"}),(0,u.jsxs)("p",{children:["For my senior capstone project, I worked with a team of 3 other engineering students to develop a reliable system of human detection for the automation company ",(0,u.jsx)("a",{href:"https://www.stratom.com/",children:"Stratom"}),". The project uses live camera and LIDAR data to help Stratom's automated systems avoid human collisions. For example, the project could be implemented on the autonomous refueling arm shown below so that it would pause operation if a human walked too close."]}),(0,u.jsxs)("div",{className:"flex flex-wrap gap-8 justify-center",children:[(0,u.jsx)(i.Z,{maxHeight:72,image:n,caption:"RAPID\u2122 Autonomous Refueling Arm"}),(0,u.jsx)(i.Z,{maxHeight:72,image:m,caption:"Live demo of human identification"})]}),(0,u.jsx)("p",{children:"My primary technical role on this project was the creation of the Docker environment and the development and implementation of the LIDAR detection."}),(0,u.jsx)("br",{}),(0,u.jsx)("h2",{children:"System Overview"}),(0,u.jsx)("p",{children:" Video, LIDAR and position data are taken as input, then processed to produce a final location and confidence interval for each identified human. Additionally, camera and LIDAR images are annotated and published with the detected locations. The program is encapsulated inside of a Docker container so that it can be easily run on any system. The whole system is comprised of ROS nodes as shown in the diagram below."}),(0,u.jsx)(i.Z,{maxHeight:72,image:s,caption:"System Architecture"}),(0,u.jsxs)("div",{children:[(0,u.jsx)("p",{children:"The project utilizes the following technologies:"}),(0,u.jsxs)("ul",{children:[(0,u.jsxs)("li",{children:["\u2022 ",(0,u.jsx)("a",{href:"https://www.docker.com/",children:"Docker"})]}),(0,u.jsxs)("li",{children:["\u2022 ",(0,u.jsx)("a",{href:"https://www.ros.org/",children:"ROS2"})]}),(0,u.jsxs)("li",{children:["\u2022 ",(0,u.jsx)("a",{href:"https://opencv.org/",children:"OpenCV"})]}),(0,u.jsxs)("li",{children:["\u2022 ",(0,u.jsx)("a",{href:"https://scikit-learn.org/",children:"SciKit-Learn"})]})]})]}),(0,u.jsx)("br",{}),(0,u.jsx)("h2",{children:"LIDAR Detection"}),(0,u.jsx)("p",{children:"The LIDAR data is made up of a point cloud created by a series of circular scans from the sensor. The original point cloud data is cleaned to focus in on the important part of the the scan and reduce processing time. Statistical analysis is preformed identify and remove outlier points. View position information is used to crop out the floor and area outside of the relevant image frame."}),(0,u.jsxs)("div",{className:"flex flex-wrap gap-8 justify-center",children:[(0,u.jsx)(i.Z,{maxHeight:72,image:c,caption:"Original LIDAR point cloud"}),(0,u.jsx)(i.Z,{maxHeight:72,image:d,caption:"Cleaned LIDAR point cloud"})]}),(0,u.jsx)("br",{}),(0,u.jsxs)("p",{children:["Next, ",(0,u.jsx)("a",{href:"https://towardsdatascience.com/dbscan-clustering-explained-97556a2ad556",children:"DBSCAN Clustering"})," is used to identify discrete objects in the frame. This isolates individual objects in the frame for future processing."]}),(0,u.jsx)(i.Z,{maxHeight:72,image:l,caption:"Clustered LIDAR point cloud"}),(0,u.jsx)("p",{children:"Each of these clusters are filtered based on size to isolate objects that are approximately human-sized. Next, each cluster is compared to a probability map of expected points for a scan of a human. This probability map was created by normalizing, then averaging a known set of human point cloud clusters. A confidence score is created by summing the difference between a normalized cluster and the probability map."}),(0,u.jsxs)("div",{className:"flex flex-wrap gap-8 justify-center",children:[(0,u.jsx)(i.Z,{maxHeight:72,image:r,caption:"Human probability map"}),(0,u.jsx)(i.Z,{maxHeight:72,image:h,caption:"Clusters after applying filters"})]}),(0,u.jsx)("p",{children:"During testing, this approach was successful about 80% of the time, but excelled in situations with difficult lighting where a camera would have failed."}),(0,u.jsx)(i.Z,{maxHeight:72,image:p,caption:"Final bounding box LIDAR annotation"}),(0,u.jsx)("br",{}),(0,u.jsx)("h2",{children:"Camera Detection"}),(0,u.jsxs)("p",{children:["The programs identifies humans from a video stream using a pre-trained neural network call You Only Look Once (",(0,u.jsx)("a",{href:"https://pjreddie.com/darknet/yolo/",children:"YOLO"}),"). In our testing, the neural network correctly identified humans 85% of the time."]}),(0,u.jsx)(i.Z,{maxHeight:72,image:o,caption:"Bounding boxes around detected humans"}),(0,u.jsx)("br",{}),(0,u.jsx)("p",{children:"View the full project here:"}),(0,u.jsx)("a",{href:"https://github.com/EthanCranston/StratoMiners",children:"https://github.com/EthanCranston/StratoMiners"})]})}},4311:function(){},6955:function(e,t,a){e.exports=a.p+"static/media/identifiedHuman.8977ec07dadffecf391d.png"}}]);
//# sourceMappingURL=65.2fe8ad22.chunk.js.map