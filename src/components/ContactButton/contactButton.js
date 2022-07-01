import React from 'react'

const ContactButton = () => {
  const [showing, setShowing] = React.useState(false)

  const nothingToScrapeHere = () => {
    return ['nothingecnothing'.slice(7, 9) + 'race to the enston'.replace('ace to the e', 'a'), 'mines is an edu'.replace(' is an ', '.')]
  }
  let component
  if (showing) {
    component =
      <div>
        <p className='underline text-blue-600'>
          {nothingToScrapeHere().join('@')}</p>
     </div>
  } else {
    component =
      <p
        onClick={() => setShowing(true)}
        className={'inline-block px-6 py-2.5 bg-gray-700  border-amber-500 border-b-2 font-bold text-white rounded shadow-lg hover:bg-amber-500 active:bg-amber-600 transition duration-150 ease-in-out'}
      >
        Click for Details
      </p>
  }

  return (
        <React.Suspense fallback={<div>loading...</div>}>
          <div>
            {component}
          </div>
        </React.Suspense>
  )
}

export default ContactButton
