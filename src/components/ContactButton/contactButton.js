import React from "react";

const ContactButton = () => {
    const [showing, setShowing] = React.useState(false);

    
    const nothingToScrapeHere = () => {
      return ['nothingecnothing'.slice(7,9) + 'race to the enston'.replace('ace to the e', 'a'), 'mines is an edu'.replace(' is an ','.')]
    }
    var component;
    if (showing){
      component = 
      <div>
        <p>{nothingToScrapeHere().join('@')}</p>
     </div>
    } else{
      component =
      <p
        onClick={() => setShowing(true)}
        class={"inline-block px-6 py-2.5 bg-gray-700 font-bold text-white rounded shadow-md hover:bg-amber-500 hover:shadow-lg focus:bg-amber-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-amber-700 active:shadow-lg transition duration-150 ease-in-out"}
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
      );
};

export default ContactButton