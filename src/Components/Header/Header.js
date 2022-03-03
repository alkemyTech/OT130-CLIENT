import React from 'react';
import { Button, Container, Image, Nav, Navbar, Offcanvas } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectAuth } from '../../reducers/auth/authReducer';
import { HEADER_LINK_COLOR } from '../../config/colorConfig';
import { PUBLIC_PATHS } from '../../routes/config';
import logo from '../../assets/logo.png';
import Logout from '../Auth/Logout';
import Sidebar from '../SideBar';
import './header.css';

const Header = () => {
  const isAuthenticated = useSelector(selectAuth);

  return (
     <Navbar collapseOnSelect expand="lg" className="header">
      <Container>
        <Navbar.Brand href="#home">
          <Image className="image-logo" src={logo} alt="Img Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar" />
        <Navbar.Offcanvas id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel">
          <Image className="image-logo" src={logo} alt="Img Logo" />
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Sidebar paths={PUBLIC_PATHS} />
          </Offcanvas.Body>
        </Navbar.Offcanvas>
        <Navbar.Collapse className='d-none d-lg-inline'>
          <Nav className="me-auto  text-center text-lg-inline">
            {PUBLIC_PATHS.map((path, index) => (
              <NavLink
                className="mx-2 align-items-center link-item-navbar"
                activeClassName="active-link"
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
          </Nav>
          <Nav>
            {isAuthenticated ? (
              <Logout />
            ) : (
              <div className="d-flex justify-content-center align-items-center">
                <Button as={NavLink} to="/login" className="btn-somos-mas">
                  Log in
                </Button>
                <Button
                  as={NavLink}
                  to="/register"
                  className="btn-somos-mas"
                  variant="outline-primary"
                >
                  Registrarse
                </Button>
              </div>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
