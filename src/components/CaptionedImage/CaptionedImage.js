import React from "react";

const CaptionedImage = ({ image, caption, alt}) => {
    if(alt === undefined){
        alt = caption
    }
     
    return (
        <div class={`flex flex-col items-center m-2`}>
            <img src={image} class={`max-w-80 max-h-80 border-amber-500 rounded-md border-b-2
            ${caption !== undefined ? ' rounded-bl-none': ''}`} alt={alt}></img>
            <div className="flex rounded-b-lg">
                <p class={"mt-0 text-sm bg-amber-500 rounded-b-sm"}>{caption}</p>
            </div>
        </div>
    );
};

export default CaptionedImage;