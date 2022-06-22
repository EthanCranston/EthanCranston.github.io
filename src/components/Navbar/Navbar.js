import React from "react";
import { useNavigate } from "react-router-dom";

import logo from "../../images/logo.png"
import classNames from "classnames";




const Navbar = ({ navigationData, currentRoute, setCurrentRoute }) => {
  const navigate = useNavigate();

  const updateRoute= (location) => {
    if (window.location.pathname !== '/') navigate("/")
    setCurrentRoute(location)
  }
  return (
    <nav className="flex flex-row w-full items-center justify-between h-14 md:h-18 rounded-b-2xl md:rounded-b-3xl bg-white">
        <img className="py-3 md:pl-6 pl-4 h-full" src={logo} alt="Logo" onClick={() => updateRoute("Home")}/>
        <div className="flex flex-row pb-3 pr-4">
          {navigationData.map((item, index) => (
          <p className={classNames([
              "mx-2 md:mx-4 hover:text-amber-500 cursor-pointer font-medium font-mono text-sm selection:bg-amber-500",
              currentRoute === item && 'text-gray-700 titleUnderline',])}
            key={index}
            onClick={() => updateRoute(item)}>
            {item}
          </p>
        ))}
        </div>
      <div></div>
    </nav >
  );
};

export default Navbar;