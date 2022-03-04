import React from 'react';
import Header from './Header';
import Slider from './Slider';
import Content from './Content';
import FooterCampaings from '../Shared/FooterCampaings';
import Carousel from '../../Components/Carousel/Carousel';

import slides from '../../Services/mocks/schoolSliders';

const SchoolCampaign = () => {
  return (
    <div className="footer-fix d-flex row">
      <div>
        <Carousel slides={slides} />
        <Content />
      </div>
      <FooterCampaings />
    </div>
  );
};

export default SchoolCampaign;
