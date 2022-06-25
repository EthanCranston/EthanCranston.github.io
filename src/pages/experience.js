import React from 'react'
import './Pages.css'

import Dropdown from '../components/Dropdown/Dropdown'

import EduCard from '../components/EduCard/EduCard'

import SkillCard from '../components/SkillCard/SkillCard'

import allExperience from '../data/experienceData'

import allEducation from '../data/educationData'

import allSkills from '../data/skillData'

import allAchievements from '../data/achievementsData'

const ExperiencePage = () => {
  const experience = []
  const education = []
  const skills = []
  const achievements = []

  allExperience.forEach(element => {
    experience.push(
            <Dropdown
                title={element.title}
                company={element.company}
                date={element.date}
                image={element.image}
                description={element.description}
            />
    )
  })

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
  })

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
                title={element.company}
                company={element.title}
                date={element.date}
                image={element.image}
                subTitle={element.subTitle}
            />
    )
  })

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
            <div>
                {skills}
            </div>

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
  )
}

export default ExperiencePage
