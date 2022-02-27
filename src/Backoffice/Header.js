import React from 'react';
import { Navbar, Container, Offcanvas } from 'react-bootstrap';
import { BACKOFFICE_PATHS } from '../routes/config';
import Sidebar from './SideBar';

const Header = () => {
  return (
    <Navbar bg="light" expand={false}>
      <Container fluid>
        <Navbar.Toggle aria-controls="offcanvasNavbar" />
        <Navbar.Brand href="/">Navbar Offcanvas</Navbar.Brand>
        <Navbar.Offcanvas id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel">Offcanvas</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Sidebar paths={BACKOFFICE_PATHS} />
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default Header;
