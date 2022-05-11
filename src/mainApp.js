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
    <div className={styles.container}>
      <Navbar
        navigationData={navigationData}
        currentRoute={currentRoute}
        setCurrentRoute={setCurrentRoute}
      />
      <Tabbar
        navigationData={navigationData}
        currentRoute={currentRoute}
        setCurrentRoute={setCurrentRoute}
      />
      <div>
        <CurrentPage currentRoute={currentRoute}/>
      </div>
    </div>
  );
};

export default MainApp;