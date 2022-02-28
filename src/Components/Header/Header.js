import React from 'react';
import { Button, Image, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png';
import './header.css';

const links = [
  {
    name: 'Inicio',
    url: '/',
    status: 'ALL-USERS',
  },
  {
    name: 'Nosotros',
    url: '/us',
    status: 'ALL-USERS',
  },
  {
    name: 'Contacto',
    url: '/contacts',
    status: 'ALL-USERS',
  },
  {
    name: 'Campaña Escuelas',
    url: '/school-campaign',
    status: 'ALL-USERS',
  },
  {
    name: 'Campaña juguetes',
    url: '/toys-campaign',
    status: 'ALL-USERS',
  },
];

const linkColor = '#18A0FB';

const Header = () => {
  return (
    <header>
      <Navbar className=" d-flex flex-column flex-sm-row d-sm-flex justify-content-sm-between header  ">
        <Nav className=" navbar ">
          <div className=" d-flex justify-content-center align-items-center flex-column flex-sm-row ">
            <Image className="image-logo" src={logo} alt="Img Logo" />

            {links.map((link, index) => (
              <NavLink
                className="mx-2 text-decoration-none align-items-center link-item"
                key={index}
                style={(isActive) => ({
                  color: isActive ? 'blue' : linkColor,
                })}
                exact={true}
                to={link.url}
              >
                {link.name}
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
