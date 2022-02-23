import React, { useEffect } from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { BsLinkedin, BsInstagram, BsTwitter } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { selectOrganization } from '../../reducers/organizationReducer';
import { fetchOrganization } from '../../actions/organizationActions';
import './footer.css';


const Footer = () => {
const dispatch = useDispatch();
const { organization } = useSelector(selectOrganization);

useEffect(() => {
  dispatch(fetchOrganization());
}, [dispatch]);

  return (
    <footer className='footer-ong mt-5'>
        <Container>
            <Row className='border-bottom '>
                <Col className='d-flex align-items-center flex-column flex-md-row justify-content-between mt-4 mt-md-0'xs={12} md={4}>
                    <Link className='link-item p-1' to='/news'>Noticias</Link>
                    <Link className='link-item p-1' to='/activities'>Actividades</Link>
                    <Link className='link-item p-1'to='/news'>Novedades</Link>
                </Col>
                <Col>
                    <Link className='link-item p-1' to='/'><Image src={organization.logo} /></Link>
                </Col>
                <Col className='d-flex align-items-center flex-column flex-md-row justify-content-between mb-4 mb-md-0' xs={12} md={4}>
                    <Link className='link-item p-1' to='/create-testimonials'>Testimonios</Link>
                    <Link className='link-item p-1' to='/about'>Nosotros</Link>
                    <Link className='link-item p-1' to='/contacts'>Contacto</Link>
                </Col>
            </Row>
            <Row className='d-flex justify-content-center align-items-center'>
                <Col className='d-flex justify-content-around align-items-center  mt-4 mb-4' xs={12} md={4}>
                    <Row>
                        <Col>
                            <a className="link-item" href={organization.linkedin_url}><span><BsLinkedin className='icon-item'/></span></a>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <a className="link-item" href={organization.instagram_url}><span><BsInstagram className='icon-item'/></span></a>
                        </Col>
                    </Row>
                    <Row>
                        <Col>   
                            <a className="link-item" href={organization.twitter_url}><span><BsTwitter className='icon-item'/></span></a>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row className='d-flex justify-content-center align-items-center'>
                <Col className='d-flex justify-content-center align-items-center mt-4 mb-4' xs={12} md={4}>
                    <span className='text-rights'>2021 by Alkemy. All Rights Reserved.</span>
                </Col>
            </Row>
        </Container>
    </footer>
  )
}

export default Footer;