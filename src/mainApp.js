import React from "react";
import { useParams} from "react-router-dom";

import styles from "./App.module.css";
import useNavigation from "./hooks/useNavigation";
import navigationData from "./data/navigation";

import Navbar from "./components/Navbar/Navbar";
import Tabbar from "./components/Tabbar/Tabbar";
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
      <div className="m-5 pb-16 grid place-items-center">
        <div className={"flex flex-col w-2/3 items-center"}>
          <CurrentPage className={'flex-none w-64'} currentRoute={currentRoute}/>
        </div>
      </div>

      <Tabbar
        navigationData={navigationData}
        currentRoute={currentRoute}
        setCurrentRoute={setCurrentRoute}
      />
      
    </div>
  );
};

export default MainApp;