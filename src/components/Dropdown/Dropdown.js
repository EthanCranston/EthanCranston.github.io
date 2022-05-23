import React, { useState } from "react";
import styles from "./Dropdown.module.css"
import { IoIosArrowDown } from "react-icons/io"
import { IoIosArrowUp } from "react-icons/io"



const summaryBar = (title, isExpanded, toggleFunction) => {
    return (
         <>
             <div onClick={toggleFunction}>{isExpanded ? <IoIosArrowDown/> : <IoIosArrowUp/>}</div>
        </>
    )
}


const deatilView = (summary) => {
    return (
        <p>{summary}</p>
    )
}

const Dropdown = ({ title, description }) => {
    const [isExpanded, setExpansion] = useState(false);
    function toggleExpansion() {
        setExpansion(!isExpanded);
    }

    if (isExpanded) {
        return (
            <>
            {summaryBar(title, isExpanded, toggleExpansion)}
            {deatilView(description)}
            </>
        )
    }
    else {
        return (
            <>
            {summaryBar(title, isExpanded, toggleExpansion)}
            </>
        )
    }

}

export default Dropdown