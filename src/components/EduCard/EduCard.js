import React, { useState } from "react";


const EduCard = ({ title, company, date, image, subTitle }) => {
    return (
        <div class="max-w-md m-10 bg-white rounded-xl shadow-md overflow-hidden md:max-w-full">
            <div class="md:flex">
                <div class="md:shrink-0">
                    <img src={image} class={"h-48 w-full object-cover md:h-full md:w-48"}></img>
                </div>
                <div class="p-8">
                    <div class="tracking-wide text-sm text-yellow-500 font-semibold">{date}</div>
                    <h3 href="#" class="block mt-1 text-md leading-tight font-small text-black">{company}</h3>
                    <h2 href="#" class="block mt-1 text-lg leading-tight font-medium text-black">{title}</h2>
                    <div class="tracking-wide text-sm font-semibold">{subTitle}</div>
                </div>
            </div>
        </div>
    )
}

export default EduCard