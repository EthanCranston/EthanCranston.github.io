import React from 'react'

const SkillCard = ({ category, image, skills }) => {
  const allSkills = []

  for (const element of skills) {
    allSkills.push(<div className='text-center' key={element}>{element}</div>)
  }

  return (
        <div className="max-w-md m-10 bg-white rounded-xl shadow-md overflow-hidden md:max-w-full border-amber-500 border-b-2">
            <div className="md:flex">
                <div className="md:shrink-0">
                    <img src={image} className={'h-48 w-full object-cover md:h-full md:w-48'} alt={category + ' graphic'}></img>
                </div>
                <div className="flex flex-col grow justify-center p-8">
                    <div className="text-center text-amber-500">{category}</div>
                    <div className="flex flex-col justify-center">{allSkills}</div>
                </div>
                </div>
            </div>

  )
}

export default SkillCard
