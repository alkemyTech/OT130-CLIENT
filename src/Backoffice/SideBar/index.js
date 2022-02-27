import React from 'react';
import { Nav } from 'react-bootstrap'
import { SideBarLink } from './SideBarLink';
import './SideBar.css'

const Sidebar = ({ paths }) => {
  return (
    <Nav className="justify-content-end flex-grow-1 pe-3">
      {paths.map((path, i) => {
        return (
          <SideBarLink
            route={path.ROUTE}
            link={path.PLACEHOLDER}
            key={i}
          />
        )
      })}
    </Nav>
  );
};

export default Sidebar;
