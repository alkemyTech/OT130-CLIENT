import React from 'react';
import { Button } from 'react-bootstrap';

const links = [
  {
    name: 'Inicio',
    url: '/',
    status: 'ALL-USERS',
  },
  {
    name: 'Nosotros',
    url: '/',
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
    <header className=" d-flex justify-content-lg-between">
      <div>
        <img src="/src/assets/logo.webp" alt="Img Logo" />
        {links.map(({ name, url }) => (
          <a className=" mx-2 text-decoration-none " href={url}>
            {name}
          </a>
        ))}
      </div>
      <div>
        <Button className=" mx-2" variant="outline-primary">
          Login
        </Button>
        <Button className=" mx-2">Registrarse</Button>
      </div>
    </header>
  );
};

export default Header;
