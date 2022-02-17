import React from 'react'
import { slide as Menu } from 'react-burger-menu'
import "./SideBar.css"
import { SideBarLink } from './SideBarLink'

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




