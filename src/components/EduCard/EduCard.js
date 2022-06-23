import React from 'react'

const EduCard = ({ title, company, date, image, subTitle }) => {
  return (
        <div className="max-w-md m-10 bg-white rounded-xl shadow-md overflow-hidden md:max-w-full border-amber-500 border-b-2">
            <div className="md:flex">
                <div className="md:shrink-0">
                    <img src={image} className={'h-48 w-full object-cover md:h-full md:w-48'} alt={company + ' logo'}></img>
                </div>
                <div className="p-8">
                    <div className="tracking-wide text-sm text-amber-500">{date}</div>
                    <h2 href="#" className="block mt-1 text-xl leading-tight">{company}</h2>
                    <div href="#" className="tracking-wide text-lg">{title}</div>
                    <div className="tracking-wide">{subTitle}</div>
                </div>
            </div>
        </div>
  )
}

export default EduCard
