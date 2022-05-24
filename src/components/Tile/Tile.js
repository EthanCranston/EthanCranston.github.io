import React from "react";
import { useNavigate } from "react-router-dom";


import styles from "./Tile.module.css";

const Tile = ({ title, description, image, link }) => {
    const navigate = useNavigate();

    return (
        // <div class={ "relative w-60 h-60 bg-[url('" + image +"')] bg-cover rounded-lg" } onClick={() => {navigate(link)}}>
        <div class={"relative w-60 h-60 bg-cover rounded-lg"}>

            <img src={image} class={"absolute w-60 h-60 object-cover rounded-lg"} onClick={() => { navigate(link) }}></img>
            <div class={styles.background}>
                <h1 class={styles.tileTitle}> {title}</h1>
                <p class={styles.tileDesc}> {description}</p>
            </div>



        </div>


    );
};

export default Tile;