import React from "react";

const CaptionedImage = ({ image, caption, alt, maxHeight}) => {
    if(alt === undefined){
        alt = caption
    }

    var pb;
    if (caption === undefined) pb = ''
    else pb = ' pb-0'
    

    var heightSpec = ''
    if(maxHeight !== undefined){
        heightSpec = ` max-h-${maxHeight}`
    }
    
    return (
        <div class={`bg-white/50 rounded-md p-2${pb}`}>
            <img src={image} class={`max-w-md border-amber-500 border-b-2${heightSpec}`} alt={alt}></img>
            <p class={"ml-2 mt-0 mb-0 text-sm"}>{caption}</p>

        </div>
    );
};

export default CaptionedImage;