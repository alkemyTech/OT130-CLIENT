import { React } from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { useSelector } from 'react-redux';
import { selectUserAuth } from '../../reducers/auth/authReducer'
import DonationButton from '../Donations/DonationButton'

function Header() {

    const currentUser = useSelector(selectUserAuth);
    const role = currentUser ? currentUser.user.role_id : null;

    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        {
                            role &&
                            <Nav.Link href="#donation"> <DonationButton /> </Nav.Link>

                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header