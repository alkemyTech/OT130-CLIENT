import React from 'react';
import Header from './Header';
import Slider from './Slider';
import Content from './Content';
import FooterCampaings from '../Shared/FooterCampaings';


const SchoolCampaign = () => {
  return (
    <div className='footer-fix'>
      <Header />
      <div>
        <Slider />
        <Content />
      </div>
      <FooterCampaings />
    </div >
  );
}
 
export default SchoolCampaign;