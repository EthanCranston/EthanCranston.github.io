import React, { useCallback } from "react";
import classNames from "classnames";
import { AiFillHome } from "react-icons/ai";
import { FaHammer } from "react-icons/fa";
import { GrMail } from "react-icons/gr"

import styles from "./Tabbar.module.css";

const Tabbar = ({ navigationData, currentRoute, setCurrentRoute }) => {
  const getTabIcon = useCallback((item) => {
    switch (item) {
      case "Home":
        return <AiFillHome />;
      case "Projects":
        return <FaHammer />;
      case "Contact":
        return <GrMail />;
    }
  }, []);

  return (
    <nav className={styles.tabbar}>
      {navigationData.map((item, index) => (
        <span
          key={index}
          className={classNames([
            styles.tabItem,
            currentRoute === item && styles.tabItemActive,
          ])}
          onClick={() => setCurrentRoute(item)}
        >
          <span className={styles.icon}>{getTabIcon(item)}</span>
        </span>
      ))}
    </nav>
  );
};

export default Tabbar;