import React from "react";
import "../Pages.css";
import CaptionedImage from "../../components/CaptionedImage/CaptionedImage";
import CodeSnippet from "../../components/CodeSnippet/CodeSnippet";
import coloradoImage from "../../images/coloradoPath.png"
import kiliImage from "../../images/kilimanjaroPath.png"
import grandCanyonImage from "../../images/grandCanyonPath.png"


const DPPathfinder = () => {
    return (
        <>
        <h1>DP Path-Finding</h1>
        <p>This program determines the most efficient path through a given terrain. It generates a grayscale map of the given 
            elevation data with optimal paths plotted as an output.</p>

        <div class='flex place-items-center'>
            <CaptionedImage image={kiliImage} caption={"Path through Kilimanjaro"}/>
            <CaptionedImage image={grandCanyonImage} caption={"Path through The Grand Canyon"}/>
            <CaptionedImage image={coloradoImage} caption={"Path through The Rockies"}/>
        </div>
        <br></br>
        <p>The program uses the given terrain elevation and finds the path left to right that experiences 
            the least elevation change. The program also represents the elevations as a grayscale image. The optimal path from each
            left pixel is plotted in blue, and the most optimal path is plotted in yellow.</p>
        <br></br>
        <CodeSnippet language="c"code={dpCode}/>
        <p>This simplified code snippet shows the algorithm used to  efficiently calculate the path</p>

            
        </>

    );
};
export default DPPathfinder


let dpCode ='// traverse table in reverse order\nfor (int w = _width - 2; w > -1; w--) {\n    for (int h = 0; h < _height; h++) {\n        //get current elevation from previously-generated elevation table\n        curr_pos = _elevations.at(h).at(w);\n\n        //  calculate total distance for each possible movement   \n        straight_dist = abs(curr_pos - _elevations.at(h).at(w + 1)) + _dynamic_paths.at(h).at(w + 1);\n        down_dist = abs(curr_pos - _elevations.at(h + 1).at(w + 1)) + _dynamic_paths.at(h + 1).at(w + 1);\n        up_dist = abs(curr_pos - _elevations.at(h - 1).at(w + 1)) + _dynamic_paths.at(h - 1).at(w + 1);\n\n        //choose the shortest path and update the path table\n        _dynamic_paths.at(h).at(w) = min(straight_dist, up_dist, down_dist)\n    }\n'