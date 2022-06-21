import React from "react";
import { useParams} from "react-router-dom";

import styles from "./App.module.css";
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
    <div className={styles.container}>
    
      
      <Navbar
        navigationData={navigationData}
        currentRoute={currentRoute}
        setCurrentRoute={setCurrentRoute}
      />
      <div className="flex flex-col items-center w-full overflow-hidden">
        <div className={"flex flex-col items-center w-2/3 mb-16"}>
          <CurrentPage currentRoute={currentRoute}/>
        </div>  
      </div>
    </div>
  );
};

export default MainApp;