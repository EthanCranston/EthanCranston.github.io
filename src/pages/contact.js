import React from "react";
import "./Pages.css";

const ContactPage = () => {
    const [showingEmail, setShowingEmail] = React.useState(false);

    
    const nothingToScrapeHere = ['nothingmynothing'.slice(7,9) + 'emxil'.replace('x', 'a'), 'websitexcom'.replace('x','.')]

    const comp = <div>
        <p>{nothingToScrapeHere.join('@')}</p>
    </div>

    let email = showingEmail ? comp : (
        <p
        onClick={() => setShowingEmail(true)}
        class={"inline-block px-6 py-2.5 bg-yellow-500 text-white rounded shadow-md hover:bg-yellow-600 hover:shadow-lg focus:bg-yellow-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-yellow-700 active:shadow-lg transition duration-150 ease-in-out"}
      >
        Click for contact info
      </p>
    );
    return (
        <React.Suspense fallback={<div>loading...</div>}>
          <div>
            {email}
          </div>
        </React.Suspense>
      );
};

export default ContactPage