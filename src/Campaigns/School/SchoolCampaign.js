import React from 'react';
import Content from './Content';
import FooterCampaings from '../Shared/FooterCampaings';
import Carousel from '../../Components/Carousel/Carousel';

import slides from '../../Services/mocks/schoolSliders';
import HeaderCampaigns from '../Shared/HeaderCampaigns';

const SchoolCampaign = () => {
  return (
    <div className="footer-fix d-flex row">
      <HeaderCampaigns />
      <div>
        <Carousel slides={slides} />
        <Content />
      </div>
      <FooterCampaings />
    </div>
  );
};

export default SchoolCampaign;
