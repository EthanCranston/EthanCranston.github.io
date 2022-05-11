import React from "react";
import { useNavigate } from "react-router-dom";

import { ReactComponent as EthanLogo } from '../../data/EthanLogo1.svg';
import classNames from "classnames";


import styles from "./Navbar.module.css";

const Navbar = ({ navigationData, currentRoute, setCurrentRoute }) => {
  const navigate = useNavigate();
  return (
    <nav className={styles.navbar}>
      <span className={styles.logo}>
        <EthanLogo/>
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
              if (window.location.pathname !== '/'){
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
    </nav>
  );
};

export default Navbar;