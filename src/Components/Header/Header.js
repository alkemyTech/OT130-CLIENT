import React from 'react';
import { Button, Nav, Navbar } from 'react-bootstrap';
import { BrowserRouter, Link, NavLink } from 'react-router-dom';

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

const Header = () => {
  return (
    <header>
      <Navbar className=" d-flex justify-content-between">
        <Nav>
          <div className=" d-flex">
            <img src="/src/assets/logo.webp" alt="Img Logo" />

            {links.map((link, index) => (
              <NavLink
                className=" mx-2 text-decoration-none"
                key={index}
                style={(isActive) => ({
                  color: isActive ? 'darkblue' : 'blue',
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
