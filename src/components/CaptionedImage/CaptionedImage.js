import React from "react";

const CaptionedImage = ({ image, caption, alt}) => {
    if(alt === undefined){
        alt = caption
    }
    return (
        <div class={"bg-white/50 rounded-md p-2 pb-0 m-4"}>
            <img src={image} class={"max-w-md"} alt={alt}></img>
            <p class={"ml-2 mt-0 mb-0 text-sm"}>{caption}</p>

        </div>
    );
};

export default CaptionedImage;