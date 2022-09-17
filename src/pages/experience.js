import React from 'react'
import './Pages.css'

import Card from '../components/Card/Card'
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

  for (const [index, element] of allExperience.entries()) {
    experience.push(
      <Card
          title={element.title}
          company={element.company}
          date={element.date}
          image={element.image}
          subtitle={element.subtitle}
          description={element.description}
          key={element.title + index}
      />
    )
  }

  for (const [index, element] of allEducation.entries()) {
    education.push(
      <Card
        title={element.title}
        company={element.company}
        date={element.date}
        image={element.image}
        subtitle={element.subtitle}
        description={element.description}
        key={element.title + index}
      />
    )
  }

  for (const [index, element] of allSkills.entries()) {
    skills.push(
      <SkillCard
          category={element.category}
          image={element.image}
          skills={element.skills}
          key={element.category + index}
      />
    )
  }

  for (const [index, element] of allActivities.entries()) {
    activities.push(
      <Card
        title={element.title}
        company={element.company}
        date={element.date}
        image={element.image}
        subtitle={element.subtitle}
        description={element.description}
        key={element.title + index}
      />
    )
  }

  for (const [index, element] of allAchievements.entries()) {
    achievements.push(
      <Card
        title={element.title}
        company={element.company}
        date={element.date}
        image={element.image}
        subtitle={element.subtitle}
        description={element.description}
        key={element.title + index}
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

        <h1>Achievements</h1>
        <div>
            {achievements}
        </div>
        
        <h1>Activities</h1>
        <div>
            {activities}
        </div>
    </>
  )
}

export default ExperiencePage
