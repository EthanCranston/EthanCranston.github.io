import React, { useState } from 'react'

const Dropdown = ({ title, company, date, image, description }) => {
  const [isExpanded, setExpansion] = useState(false)
  function toggleExpansion () {
    setExpansion(!isExpanded)
  }

  return (
        <div className="max-w-md m-10 bg-white rounded-xl shadow-md overflow-hidden md:max-w-full border-amber-500 border-b-2">
            <div className="md:flex">
                <div className="md:shrink-0">
                    <img src={image} className={'h-48 w-full object-cover md:h-full md:w-48'} alt={company + ' logo'}></img>
                </div>
                <div className="p-8">
                    <div className="tracking-wide text-sm text-amber-500">{date}</div>
                    <h2 href="#" className="block mt-1 text-xl leading-tight">{title}</h2>
                    <div className="tracking-wide text-lg">{company}</div>
                    <div className="mt-2">{isExpanded ? description : null}</div>
                    <span className={'text-sm hover:border-b-2 cursor-pointer border-amber-500 border-b-1'} onClick={toggleExpansion}>{isExpanded ? 'Show Less' : 'Show More'}</span>
                </div>
            </div>
        </div>
  )
}

export default Dropdown
