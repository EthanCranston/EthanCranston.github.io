import React, { useState } from "react";
import styles from "./Dropdown.module.css"
import { IoIosArrowDown } from "react-icons/io"
import { IoIosArrowUp } from "react-icons/io"
import { FaPlus, FaMinus } from "react-icons/fa"


const Dropdown = ({ title, date, image, description }) => {
    const [isExpanded, setExpansion] = useState(false);
    function toggleExpansion() {
        setExpansion(!isExpanded);
    }

    return (
        <div class="max-w-md m-10 bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
            <div class="md:flex">
                <div class="md:shrink-0">
                    {/* <div class={"h-48 w-full object-cover md:h-full md:w-48 bg-[url('" + image + "')] bg-cover"}></div> */}
                    <img src={image} class={"h-48 w-full object-cover md:h-full md:w-48"}></img>
                </div>
                <div class="p-8">
                    <div class="uppercase tracking-wide text-sm text-yellow-500 font-semibold">{date}</div>
                    <div class="flex">
                        <h2 href="#" class="block mt-1 text-lg leading-tight font-medium text-black">{title}</h2>
                    </div>
                    <p class="mt-2 text-slate-500">{isExpanded ? description : null}</p>
                    <span class={"hover:underline cursor-pointer"} onClick={toggleExpansion}>{isExpanded ? "Show Less" : "Show More"}</span>
                </div>
            </div>
        </div>
    )
}

export default Dropdown