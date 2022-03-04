import React, { useEffect } from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { BsLinkedin, BsInstagram, BsTwitter } from 'react-icons/bs';
import { selectOrganization } from '../../reducers/organizationReducer';
import { fetchOrganization } from '../../actions/organizationActions';
import { LOGO } from '../../assets';
import './footer.css';

const Footer = () => {
  const dispatch = useDispatch();
  const { organization }  = useSelector(selectOrganization);
  
  const rightsYear = new Date().getFullYear();

  useEffect(() => {
    dispatch(fetchOrganization());
  }, [dispatch]);

  return (
    <footer className='footer-ong mt-5'>
      <Container>
        <Row>
          <Col className='d-flex align-items-center flex-column flex-md-row justify-content-between mt-4 mt-md-0'xs={12} md={4}>
            <li>
              <Link className='link-item p-1' to='/news'>Noticias</Link>
            </li>
            <li>
              <Link className='link-item p-1' to='/activities'>Actividades</Link>
            </li>
            <li>                   
              <Link className='link-item p-1'to='/news'>Novedades</Link>
            </li>
          </Col>
          <Col>
            <Link className='d-flex align-items-center flex-column flex-md-row justify-content-between mb-4 mb-md-0 link-item p-1' to='/'><Image className='img-fluids m-auto d-flex justify-content-center' src={LOGO}  alt="logo"/></Link>
          </Col>
          <Col className='d-flex align-items-center flex-column flex-md-row justify-content-between mb-4 mb-md-0' xs={12} md={4}>
            <li>
              <Link className='link-item p-1' to='/create-testimonials'>Testimonios</Link>
            </li>
            <li>
              <Link className='link-item p-1' to='/about'>Nosotros</Link>
            </li>
            <li>
              <Link className='link-item p-1' to='/contacts'>Contacto</Link>
            </li>
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
            <span className='text-rights'>{rightsYear} by Alkemy. All Rights Reserved.</span>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer;