import React, { useState } from "react";


const Dropdown = ({ title, company, date, image, description }) => {
    const [isExpanded, setExpansion] = useState(false);
    function toggleExpansion() {
        setExpansion(!isExpanded);
    }

    return (
        <div class="max-w-md m-10 bg-white rounded-xl shadow-md overflow-hidden md:max-w-full">
            <div class="md:flex">
                <div class="md:shrink-0">
                    <img src={image} class={"h-48 w-full object-cover md:h-full md:w-48"} alt={company + " logo"}></img>
                </div>
                <div class="p-8">
                    <div class="tracking-wide text-sm text-yellow-500 font-semibold">{date}</div>
                    <h2 href="#" class="block mt-1 text-lg leading-tight font-medium text-black">{title}</h2>
                    <div class="tracking-wide text-sm font-semibold">{company}</div>
                    <div class="mt-2 text-slate-500">{isExpanded ? description : null}</div>
                    <span class={"hover:underline cursor-pointer"} onClick={toggleExpansion}>{isExpanded ? "Show Less" : "Show More"}</span>
                </div>
            </div>
        </div>
    )
}

export default Dropdown