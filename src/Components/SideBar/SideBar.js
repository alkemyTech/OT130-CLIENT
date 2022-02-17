import React from 'react'
import { slide as Menu } from 'react-burger-menu'
import { SideBarLink } from './SideBarLink'
import "./SideBar.css"

export const SideBar = ({ paths }) => {
  return (
    <Menu>
      {
        paths.map(( path, i ) => {
          <SideBarLink
            route={path.ROUTE}
            link={path.PLACEHOLDER}
            key={i}
          />
        })
      }
    </Menu>
  )
};




