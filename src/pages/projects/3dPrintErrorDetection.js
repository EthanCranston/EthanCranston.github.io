import React from 'react'
import '../Pages.css'
import CaptionedImage from '../../components/CaptionedImage/CaptionedImage'

import successfulPrint from '../../images/successfulCube.jpg'
import failedPrint from '../../images/failedCube.jpg'
import cannyExample from '../../images/cannyExampleImage.png'
import imageContours from '../../images/imageContours.png'
import filteredContours from '../../images/filteredContours.png'
import outlinedPrint from '../../images/successfulPrintWithOutline.png'
import CodeSnippet from '../../components/CodeSnippet/CodeSnippet'

const ThisWebsite = () => {
  return (
        <>
        <h1>3D Print Error Detection</h1>
        <p>I used <a href="https://opencv.org/">OpenCV</a> to identify when a 3D print fails.
            This is accomplished by digitally projecting the model onto print bed,
            then comparing the identified print with the expected projection. The program
            takes in an image stream of the 3D printer and the original stl file to determine 
            when a failure occurs.</p>
          
        <div className='flex flex-wrap gap-8 justify-center'>
          <CaptionedImage image={successfulPrint} caption='Successful Print'/>
          <CaptionedImage image={failedPrint} caption='Failed Print'/>
        </div>
        <br></br>
        <p>The program starts by identifying <a href="https://docs.opencv.org/4.x/d5/dae/tutorial_aruco_detection.html">ArUco markers</a> that are placed on the corner of the print bed.
          This establish the scale, position and orientation of the image. <a href="https://docs.opencv.org/3.4/da/d22/tutorial_py_canny.html">Canny Edge Detection</a> is applied to 
          the image to identify the outlines of image features. Next, OpenCV's findContours() function is used
          to isolate the contiguous shapes in the image. The contour in the location of the bed's center is saved for comparison.</p>
        
        <div className='flex flex-wrap gap-8 justify-center'>
          <CaptionedImage image={cannyExample} caption='Image after applying Canny Edge Detection'/>
          <CaptionedImage image={imageContours} caption='Identified contours'/>
          <CaptionedImage image={filteredContours} caption='Contours filtered by location'/>
        </div>
        <br></br>
        <p>To know what shape should be expected, points are extracted from the stl file using the <a href="https://github.com/WoLpH/numpy-stl/">numpy-stl</a> Python library. 
        The homography identified from the ArUco markers is used to transform of these 3D
        points onto a 2D plane with the correct perspective using the following transformation code.</p>
          
        <br></br>
        <CodeSnippet language="python"code={transformationCode}/>

        <p> The <a href="https://en.wikipedia.org/wiki/Graham_scan">Graham Scan</a> convex hull algorithm is then used to identify the outline that 
          should be expected. OpenCV's matchShapes() function is used to compare this calculated outline contour
          with the print contour that was found in the image. If the contours match within 
          an acceptable threshold, the print is labeled as successful.
        </p>
        <CaptionedImage image={outlinedPrint} caption='Image labeled with expected edge contour'/>
        
        <br></br>
        <h2>Discussion and Use</h2>
        <p>To be used, this program would be coordinated with a print imaging software like <a href="\https://plugins.octoprint.org/plugins/octolapse/">Octolapse</a> to
          move the printhead out of the way after each layer so that a clear image can be taken. To accommodate these intermediate steps,
          the points from the stl file would be interpolated, then filtered by z height. Notifications could be sent
          or the print could be paused if an issue was detected. In practice, an AI approach 
          like <a href="https://github.com/TheSpaghettiDetective/obico-server">Obico</a> would be more practical for general printing because 
          it it does not require the use of ArUco markers. However, this computer vision
          approach is useful for verifying dimensions and quality since it can detect small variation from the original
          3D model - even if the print is not completely ruined.
        </p>
        </>
  )
}

const transformationCode = "# Create the transformation matrix\nR, _ = cv2.Rodrigues(rvec)\nex = np.block([R, tvec.T])\ntransformation = np.block([transformation, 1])\n\n# Apply the transformation matrix to a point\npoint = K @ ex @ transformation\n\n# normalize the coordinates with respect to the z-axis\npoint = np.divide(point, point[2])\n\n# Report the new (x, y) coordinates\nreturn point[:2]"

export default ThisWebsite
