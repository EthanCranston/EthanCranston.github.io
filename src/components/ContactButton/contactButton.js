import React from 'react'

const ContactButton = () => {
  const [showing, setShowing] = React.useState(false)

  const nothingToScrapeHere = () => {
    return ['nothingetnothing'.slice(7, 9) + 'hate to the hen'.replace('ate to the he', 'a'), 'ethan cranston is a gom'.replace(' is a g', '.c').replace(' ', '')]
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
