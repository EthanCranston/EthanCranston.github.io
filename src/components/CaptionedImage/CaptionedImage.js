import React from "react";

const CaptionedImage = ({ image, caption, alt, maxHeight}) => {
    if(alt === undefined){
        alt = caption
    }

    var heightSpec = ''
    if(maxHeight != undefined){
        heightSpec = `max-h-${maxHeight}`
    }
    
    return (
        <div class={"bg-white/50 rounded-md p-2 pb-0"}>
            <img src={image} class={`max-w-md ${heightSpec}`} alt={alt}></img>
            <p class={"ml-2 mt-0 mb-0 text-sm"}>{caption}</p>

        </div>
    );
};

export default CaptionedImage;