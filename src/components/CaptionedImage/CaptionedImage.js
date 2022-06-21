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
        <div class={`p-2${pb}`}>
            <img src={image} class={`max-w-md border-amber-500 rounded-md border-b-2
            ${caption !== undefined ? ' rounded-bl-none': ''}${heightSpec}`} alt={alt}></img>
            <div className="flex rounded-b-lg">
                <p class={"ml-0 mt-0 mb-0 text-sm pl-1 pr-1 bg-amber-500 rounded-b-sm"}>{caption}</p>
            </div>
        </div>
    );
};

export default CaptionedImage;