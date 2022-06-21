//import { BiTimeFive } from "react-icons/bi"
import {FiPlusSquare} from "react-icons/fi"


const EduCard = ({ category, image, skills }) => {
    const skillElement = (name, num) => {
        let clocks = [];
        for (let x = 0; x < num; x++) {
            clocks.push(<FiPlusSquare />);
        };

        return (<><div class="flex">{name}</div> <div class="flex ml-2 mt-1"> {clocks} </div></>);
    }


    let allSkills = [];
    //skillElement("Python", 5)

    skills.forEach(element => {
        allSkills.push(skillElement(element[0], element[1]));
    });

    return (
        <div class="max-w-md m-10 bg-white rounded-xl shadow-md overflow-hidden md:max-w-full border-gray-500 border-b-2">
            <div class="md:flex">
                <div class="md:shrink-0">
                    <img src={image} class={"h-48 w-full object-cover md:h-full md:w-48"} alt={category + " graphic"}></img>
                </div>
                <div class="p-8">
                    <div class="tracking-wide text-amber-500">{category}</div>
                    <div class="grid grid-cols-2 pl-2 pt-1 gap-1">{allSkills}</div>     
                </div>
                </div>
            </div>

    )
}

export default EduCard