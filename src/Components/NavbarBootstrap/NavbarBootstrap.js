import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectAuth } from '../../reducers/auth/authReducer';
import Logout from '../Auth/Logout';

// ESTE COMPONENTE DEBE SER MODIFICADO, REEMPLAZADO o BORRADO CUANDO SE REALICE EL PR CORRESPONDIENTE
// ESTE COMPONENTE SI FUNCIONA
export const NavbarBootstrap = () => {
  const isAuthenticated = useSelector(selectAuth);

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">LOGO SOMOS MAS</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Inicio</Nav.Link>
            <Nav.Link href="#pricing">Nosotros</Nav.Link>
            <Nav.Link href="#pricing">Actividades</Nav.Link>
          </Nav>
          <Nav>
            {isAuthenticated ? (
              <Logout />
            ) : (
              <>
                <Nav.Link as={NavLink} to="/register">
                  Registro
                </Nav.Link>
                <Nav.Link as={NavLink} to="/login">
                  Iniciar Sesión
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
