const EduCard = ({ title, company, date, image, subTitle }) => {
    return (
        <div class="max-w-md m-10 bg-white rounded-xl shadow-md overflow-hidden md:max-w-full border-amber-500 border-b-2">
            <div class="md:flex">
                <div class="md:shrink-0">
                    <img src={image} class={"h-48 w-full object-cover md:h-full md:w-48"} alt={company + " logo"}></img>
                </div>
                <div class="p-8">
                    <div class="tracking-wide text-sm text-amber-500">{date}</div>
                    <h2 href="#" class="block mt-1 text-xl leading-tight">{company}</h2>
                    <div href="#" class="tracking-wide text-lg">{title}</div>
                    <div class="tracking-wide">{subTitle}</div>
                </div>
            </div>
        </div>
    )
}

export default EduCard