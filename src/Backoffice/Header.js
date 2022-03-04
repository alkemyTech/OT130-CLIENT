import React from 'react';
import { Navbar, Container, Offcanvas, NavLink, Button } from 'react-bootstrap';
import Sidebar from '../Components/SideBar';
import { BACKOFFICE_PATHS } from '../routes/config';

const Header = () => {
  return (
    <Navbar bg="light" expand={false}>
      <Container fluid>
        <Navbar.Toggle aria-controls="offcanvasNavbar" />
        <Navbar.Brand href="/">
          <Button className="btn-somos-mas">WebPublica</Button>
        </Navbar.Brand>
        <Navbar.Brand href="/backoffice"><Button className="btn-somos-mas">BackOffice</Button></Navbar.Brand>
        <Navbar.Offcanvas id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel">
              MENÚ
            </Offcanvas.Title>
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
