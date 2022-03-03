import React from 'react';
import HeaderCampaings from '../Shared/HeaderCampaings';
import Slider from './Slider';
import Content from './Content';
import FooterCampaings from '../Shared/FooterCampaings';


const SchoolCampaign = () => {
  return (
    <div className='footer-fix'>
      <HeaderCampaings campaing={"school"} />
      <div>
        <Slider />
        <Content />
      </div>
      <FooterCampaings />
    </div >
  );
};

export default SchoolCampaign;
