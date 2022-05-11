import React from "react";
import { ReactComponent as EthanLogo } from '../../data/EthanLogo1.svg';
import classNames from "classnames";


import styles from "./Navbar.module.css";

const Navbar = ({ navigationData, currentRoute, setCurrentRoute }) => {
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
              if (window.location.pathname != '/'){
                window.location.pathname = '/'
              }
              //console.log(item)

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