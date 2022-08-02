import React from 'react'
import { useNavigate } from 'react-router-dom'

import logo from '../../logo.svg'
import classNames from 'classnames'

const Navbar = () => {
  const navigate = useNavigate()
  const navigationData = ['Home', 'Experience', 'Projects']
  const updateRoute = (location) => {
    let currLocation = location.toLowerCase()
    if (currLocation === 'home') {
      currLocation = ''
    }
    navigate(currLocation)
  }

  return (
    <nav className="w-full h-18 rounded-b-2xl md:rounded-b-3xl bg-white">
      <div className="flex flex-row h-10 md:h-12 mt-4 md:mt-3 px-3 md:px-5 justify-between">
        <img className="object-contain" src={logo} alt="Logo" onClick={() => updateRoute('Home')}/>
        <div className="grow flex flex-row justify-around max-w-xxs">
          {navigationData.map((item, index) => (
          <p className={classNames([
            'hover:text-amber-500 cursor-pointer font-mono text-sm selection:bg-amber-400'])}
            key={index}
            onClick={() => updateRoute(item)}>
            {item}
          </p>
          ))}
        </div>
        <div></div>
      </div>
    </nav >
  )
}

export default Navbar
