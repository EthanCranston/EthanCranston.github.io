import React from "react";
import { useNavigate } from "react-router-dom";

import logo from "../../images/logo3.jpg"
import classNames from "classnames";


import styles from "./Navbar.module.css";

const Navbar = ({ navigationData, currentRoute, setCurrentRoute }) => {
  const navigate = useNavigate();
  return (
    <nav className={styles.navbar}>
      <span className={styles.logo} onClick={() => {
        if (window.location.pathname !== '/') {
          navigate("/")
        }
        setCurrentRoute("Home")
      }}>
        <img src={logo} alt="Logo"/>
      </span>

      <ul className={styles.navItems}>
        {navigationData.map((item, index) => (
          <li
            className={classNames([
              styles.navItem,
              currentRoute === item && styles.selectedNavItem,
            ])}
            key={index}
            onClick={() => {
              if (window.location.pathname !== '/') {
                navigate("/")
              }

              setCurrentRoute(item)
            }}
          >
            {item}
          </li>
        ))}
      </ul>
      <div></div>
    </nav >
  );
};

export default Navbar;