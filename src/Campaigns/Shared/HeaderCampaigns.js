// import React from 'react';
// import { Container, Col, Row, Image } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import { LOGO } from '../../assets';
// import { CAMPAIGNS_DATA } from '../config/campaignConfig';
// import './headerCampaign.css';

// const HeaderCampaigns = ({ campaign }) => {
//   return (
//     <header className="bkg-header">
//       <Container >
//         <Row >
//           <Col className='d-flex d-lg-flex justify-content-xs-start d-xxl-flex justify-content-xxl-start align-items-center'>
//             <Link to="">
//               <Image src={CAMPAIGNS_DATA[campaign]?.logoSrc} alt="logo" className="logo-header-campaign" />
//             </Link>
//           </Col>
//           <Col className='d-none d-md-none d-lg-flex justify-content-lg-center align-items-center  d-xxl-flex '>
//             <span className='text-eslogan'>{CAMPAIGNS_DATA[campaign]?.eslogan}</span>
//           </Col>
//           <Col className='d-none d-md-flex justify-content-md-end d-lg-flex justify-content-lg-end d-xxl-flex justify-content-xxl-end'>
//             <Link to="">
//               <Image src={LOGO} alt="logo-ong" className="logo-header-ong" />
//             </Link>
//           </Col>
//         </Row>
//       </Container>
//     </header>
//   );
// }
 
// export default HeaderCampaigns;