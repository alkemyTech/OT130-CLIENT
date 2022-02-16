import React from 'react'
import { slide as Menu } from 'react-burger-menu'
import "./SideBar.css"

export const SideBar = () => {
 

  return (
    
      <Menu>
        <a id="home" className="menu-item" href="/">Home</a>
        <a id="about" className="menu-item" href="/about">About</a>
        <a id="contact" className="menu-item" href="/contact">Contact</a>
      </Menu> 

    
  )
}



 