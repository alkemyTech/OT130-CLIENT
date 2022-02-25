import { React } from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { selectUserAuth } from '../../reducers/auth/authReducer'
import { useSelector } from 'react-redux';
import DonationButton from '../Donations/DonationButton'

function Header() {

    const currentUser = useSelector(selectUserAuth);
    const role = currentUser?.user?.role_id;
    const standartUserRole = 2;
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        {
                            role === standartUserRole ?
                                <Nav.Link href="#donation"> <DonationButton /> </Nav.Link>
                                :
                                null
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header