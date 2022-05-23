import React, { useCallback } from "react";
import classNames from "classnames";
import { AiFillHome } from "react-icons/ai";
import { FaHammer } from "react-icons/fa";
import { GrMail } from "react-icons/gr"
import { ImUserTie } from "react-icons/im"
import { useNavigate } from "react-router-dom";

import styles from "./Tabbar.module.css";

const Tabbar = ({ navigationData, currentRoute, setCurrentRoute }) => {
  const navigate = useNavigate();
  const getTabIcon = useCallback((item) => {
    switch (item) {
      case "Home":
        return <AiFillHome />;
      case "Projects":
        return <FaHammer />;
      case "Contact":
        return <GrMail />;
      case "Experience":
        return <ImUserTie />;
      default:
        return;
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
          onClick={() => {
            if (window.location.pathname !== '/') {
              navigate("/")
            }
            setCurrentRoute(item)
          }}
        >
          <span className={styles.icon}>{getTabIcon(item)}</span>
        </span>
      ))}
    </nav>
  );
};

export default Tabbar;