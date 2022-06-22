import React from "react";
import { useParams} from "react-router-dom";

import useNavigation from "./hooks/useNavigation";
import navigationData from "./data/navigation";

import Navbar from "./components/Navbar/Navbar";
import CurrentPage from "./pages/pageControl";


const MainApp = () => {
  const { currentRoute, setCurrentRoute } = useNavigation();
  
  let { projectName } = useParams();

  if (projectName) setCurrentRoute(projectName);

  return (
    //<div className="md:container md:mx-auto">
    <div className="flex flex-col h-full w-full items-center overflow-hidden bg-gradient-to-t from-gray-100 to-gray-300">
    
      
      <Navbar
        navigationData={navigationData}
        currentRoute={currentRoute}
        setCurrentRoute={setCurrentRoute}
      />
      <div className={"flex flex-col items-center md:w-2/3 w-full mb-16"}>
        <CurrentPage currentRoute={currentRoute}/>
      </div>  
    </div>
  );
};

export default MainApp;