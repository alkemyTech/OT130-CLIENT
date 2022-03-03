import React from 'react';
import { Button, Nav } from 'react-bootstrap';
import { SideBarLink } from './SideBarLink';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectAuth } from '../../reducers/auth/authReducer';
import Logout from '../../Components/Auth/Logout';
import './SideBar.css';

const Sidebar = ({ paths }) => {
  const isAuthenticated = useSelector(selectAuth);

  return (
    <Nav className="justify-content-end flex-grow-1 pe-3">
      {paths.map((path, i) => {
        return <SideBarLink route={path.ROUTE} link={path.PLACEHOLDER} key={i} />;
      })}
      <div className="mt-4">
        {isAuthenticated ? (
          <Logout />
        ) : (
          <div className="d-flex justify-content-center align-items-center">
            <Button as={NavLink} to="/login" className="btn-somos-mas">
              Log in
            </Button>
            <Button as={NavLink} to="/register" className="btn-somos-mas" variant="outline-primary">
              Registrarse
            </Button>
          </div>
        )}
      </div>
    </Nav>
  );
};

export default Sidebar;
