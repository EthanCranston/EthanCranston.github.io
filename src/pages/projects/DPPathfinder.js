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
        <h1>DP Pathfinding</h1>
        <p>This program was part of a school project to determine the most efficient path through a given terrain. 
            The program intakes the  terrain elevation and finds the path left to right of the data that experiences 
            the least elevation change. The elevations are represented as a grayscale image. The optimal path from each
            left pixel is plotted in blue, and the most optimal path is plotted in yellow.</p>
            <CodeSnippet language="clike"
            code={dpCode}/>
            <CaptionedImage image={coloradoImage} caption={"Path through the rockies"}/>
            <CaptionedImage image={grandCanyonImage} caption={"Path through the Grand Canyon"}/>
            <CaptionedImage image={kiliImage} caption={"Path through Kilimanjaro"}/>

            
        </>

    );
};
export default DPPathfinder


let dpCode ='\
_dynamic_paths.resize(_height);\n\
        for (int i = 0; i < _height; i++) {\n\
            _dynamic_paths.at(i).resize(_width);\n\
            _dynamic_paths.at(i).at(_width - 1) = 0;\n\
        }\n\
        int north_distance, lateral_distance, south_distance, curr_pos;\n\
        for (int w = _width - 2; w > -1; w--) {\n\
            for (int h = 0; h < _height; h++) {\n\
                curr_pos = _elevations.at(h).at(w);\n\
                if (h == 0) {\n\
                    lateral_distance = abs(curr_pos - _elevations.at(h).at(w + 1)) + _dynamic_paths.at(h).at(w + 1);\n\
                    south_distance = abs(curr_pos - _elevations.at(h + 1).at(w + 1)) + _dynamic_paths.at(h + 1).at(w + 1);\n\
\n\
                    if (lateral_distance <= south_distance) _dynamic_paths.at(h).at(w) = lateral_distance;\n\
                    else _dynamic_paths.at(h).at(w) = south_distance;\n\
\n\
                } else if (h == _height - 1) {\n\
                    lateral_distance = abs(curr_pos - _elevations.at(h).at(w + 1)) + _dynamic_paths.at(h).at(w + 1);\n\
                    north_distance = abs(curr_pos - _elevations.at(h - 1).at(w + 1)) + _dynamic_paths.at(h - 1).at(w + 1);\n\
\n\
                    if (lateral_distance <= north_distance) _dynamic_paths.at(h).at(w) = lateral_distance;\n\
                    else _dynamic_paths.at(h).at(w) = north_distance;\n\
                } else {\n\
                    lateral_distance = abs(curr_pos - _elevations.at(h).at(w + 1)) + _dynamic_paths.at(h).at(w + 1);\n\
                    north_distance = abs(curr_pos - _elevations.at(h - 1).at(w + 1)) + _dynamic_paths.at(h - 1).at(w + 1);\n\
                    south_distance = abs(curr_pos - _elevations.at(h + 1).at(w + 1)) + _dynamic_paths.at(h + 1).at(w + 1);\n\
\n\
                    if (lateral_distance <= north_distance && lateral_distance <= south_distance)\n\
                        _dynamic_paths.at(h).at(w) = lateral_distance;\n\
                    else if (north_distance <= south_distance) _dynamic_paths.at(h).at(w) = north_distance;\n\
                    else _dynamic_paths.at(h).at(w) = south_distance;\n\
                }\n\
            }\n'