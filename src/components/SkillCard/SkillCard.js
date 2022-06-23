// import { BiTimeFive } from "react-icons/bi"
import { FiPlusSquare } from 'react-icons/fi'

const EduCard = ({ category, image, skills }) => {
  const skillElement = (name, num) => {
    const clocks = []
    for (let x = 0; x < num; x++) {
      clocks.push(<FiPlusSquare />)
    };

    return (<><div className="flex">{name}</div> <div className="flex ml-2 mt-1"> {clocks} </div></>)
  }

  const allSkills = []
  // skillElement("Python", 5)

  skills.forEach(element => {
    allSkills.push(skillElement(element[0], element[1]))
  })

  return (
        <div className="max-w-md m-10 bg-white rounded-xl shadow-md overflow-hidden md:max-w-full border-amber-500 border-b-2">
            <div className="md:flex">
                <div className="md:shrink-0">
                    <img src={image} className={'h-48 w-full object-cover md:h-full md:w-48'} alt={category + ' graphic'}></img>
                </div>
                <div className="p-8">
                    <div className="tracking-wide text-amber-500">{category}</div>
                    <div className="grid grid-cols-2 pl-2 pt-1 gap-1">{allSkills}</div>
                </div>
                </div>
            </div>

  )
}

export default EduCard
