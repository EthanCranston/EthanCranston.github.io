import { BiTimeFive } from "react-icons/bi"


const EduCard = ({ category, image, skills }) => {
    const skillElement = (name, num) => {
        let clocks = [];
        for (let x = 0; x < num; x++) {
            clocks.push(<BiTimeFive />);
        };

        return (<><div class="flex">{name}</div> <div class="flex ml-2 mt-1"> {clocks} </div></>);
    }


    let allSkills = [];
    //skillElement("Python", 5)

    skills.forEach(element => {
        allSkills.push(skillElement(element[0], element[1]));
    });

    return (
        <div class="max-w-md m-10 bg-white rounded-xl shadow-md overflow-hidden md:max-w-full">
            <div class="md:flex">
                <div class="md:shrink-0">
                    <img src={image} class={"h-48 w-full object-cover md:h-full md:w-48"}></img>
                </div>
                <div class="p-8">
                    <div class="tracking-wide text-sm text-yellow-500 font-semibold">{category}</div>
                    <ul>
                    <div class="grid grid-cols-2">{allSkills}</div>
                    </ul>
                </div>
                </div>
            </div>

    )
}

export default EduCard