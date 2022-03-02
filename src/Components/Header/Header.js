import React from 'react';
import { Button, Image, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import logo from '../../assets/logo.png';
import { HEADER_LINK_COLOR } from '../../config/colorConfig';
import { PUBLIC_PATHS } from '../../rutas/config';

import './header.css';

const links = [];

const Header = () => {
  return (
    <header>
      <Navbar className=" d-flex flex-column flex-sm-row d-sm-flex justify-content-sm-between header  ">
        <Nav className=" navbar ">
          <div className=" d-flex justify-content-center align-items-center flex-column flex-sm-row ">
            <Image className="image-logo" src={logo} alt="Img Logo" />

            {PUBLIC_PATHS.map((path, index) => (
              <NavLink
                className="mx-2 text-decoration-none align-items-center link-item"
                key={index}
                style={(isActive) => ({
                  color: isActive ? 'blue' : HEADER_LINK_COLOR,
                })}
                exact={true}
                to={path.ROUTE}
              >
                {path.PLACEHOLDER}
              </NavLink>
            ))}
          </div>
        </Nav>
        <div className=" d-flex">
          <Button className=" mx-2" variant="outline-primary">
            Login
          </Button>
          <Button className=" mx-2">Registrarse</Button>
        </div>
      </Navbar>
    </header>
  );
};

export default Header;
