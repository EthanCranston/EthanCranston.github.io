import React from "react";
import "./Pages.css";
import { BiTimeFive } from "react-icons/bi"

import Dropdown from "../components/Dropdown/Dropdown";

import EduCard from "../components/EduCard/EduCard";

import SkillCard from "../components/SkillCard/SkillCard"

import allExperience from "../data/experienceData";

import allEducation from "../data/educationData";

import allSkills from "../data/skillData";

import allAchievements from "../data/achievementsData";

const ExperiencePage = () => {
    let experience = [];
    let education = [];
    let skills = [];
    let achievements = [];

    allExperience.forEach(element => {
        experience.push(
            <Dropdown
                title={element.title}
                company={element.company}
                date={element.date}
                image={element.image}
                description={element.desciption}
            />
        )
    });

    allEducation.forEach(element => {
        education.push(
            <EduCard
                title={element.title}
                company={element.company}
                date={element.date}
                image={element.image}
                subTitle={element.subTitle}
            />
        )
    });

    allSkills.forEach(element => {
        skills.push(
            <SkillCard
                category={element.category}
                image={element.image}
                skills={element.skills}
            />
        )
    })


    allAchievements.forEach(element => {
        achievements.push(
            <EduCard
                title={element.title}
                company={element.company}
                date={element.date}
                image={element.image}
                subTitle={element.subTitle}
            />
        )
    });


    return (
        <>
            <h1>Experience</h1>


            <div>
                {experience}
            </div>

            <h1>Education</h1>
            <div>
                {education}
            </div>
            <h1>Skills</h1>
            <p class="flex">Each <BiTimeFive class="m-1"/> represents an order of magnitude of experience in hours (ex. <BiTimeFive class="mt-1 ml-1"/><BiTimeFive class="mt-1 mr-1"/> = 100hrs)</p>

            {skills}



            <h1>Achievements</h1>
            <div>
                {achievements}
            </div>
            {/* <Dropdown
            title={"Test Title Test Title"}
            date={"April 2022 - June 2023"}
            image={sketchupImage}
            description={"TestDescription"}
            /> */}

        </>
    );
};

export default ExperiencePage