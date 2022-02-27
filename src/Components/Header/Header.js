import React from 'react';
import { Button } from 'react-bootstrap';

const links = [
  {
    name: 'Inicio',
    url: '/',
  },
  {
    name: 'Nosotros',
    url: '/',
  },
  {
    name: 'Contacto',
    url: '/contacts',
  },
  {
    name: 'Campaña Escuelas',
    url: '/school-campaign',
  },
  {
    name: 'Campaña juguetes',
    url: '/toys-campaign',
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
