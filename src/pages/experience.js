import React from 'react'
import './Pages.css'

import Dropdown from '../components/Dropdown/Dropdown'
import EduCard from '../components/EduCard/EduCard'
import SkillCard from '../components/SkillCard/SkillCard'
import allExperience from '../data/experienceData'
import allEducation from '../data/educationData'
import allSkills from '../data/skillData'
import allAchievements from '../data/achievementsData'
import allActivities from '../data/activitiesData'

const ExperiencePage = () => {
  const experience = []
  const education = []
  const skills = []
  const achievements = []
  const activities = []

  for (const element of allExperience) {
    experience.push(
      <Dropdown
          title={element.title}
          company={element.company}
          date={element.date}
          image={element.image}
          description={element.description}
          key={element.title}
      />
    )
  }

  for (const element of allEducation) {
    education.push(
      <EduCard
          title={element.title}
          company={element.company}
          date={element.date}
          image={element.image}
          subTitle={element.subTitle}
          key={element.title}
      />
    )
  }

  for (const element of allSkills) {
    skills.push(
      <SkillCard
          category={element.category}
          image={element.image}
          skills={element.skills}
          key={element.category}
      />
    )
  }

  for (const element of allActivities) {
    activities.push(
      <Dropdown
          title={element.title}
          company={element.company}
          date={element.date}
          image={element.image}
          description={element.description}
          key={element.title}
        />
    )
  }

  for (const element of allAchievements) {
    achievements.push(
            <EduCard
                title={element.company}
                company={element.title}
                date={element.date}
                image={element.image}
                subTitle={element.subTitle}
                key={element.title}
            />
    )
  }

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

        <h1>Activities</h1>
        <div>
            {activities}
        </div>

        <h1>Achievements</h1>
        <div>
            {achievements}
        </div>
    </>
  )
}

export default ExperiencePage
