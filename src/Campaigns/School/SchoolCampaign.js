import React from 'react';
import Content from './Content';
import Carousel from '../../Components/Carousel/Carousel';

import slides from '../../Services/mocks/schoolSliders.json';
import HeaderCampaigns from '../Shared/HeaderCampaigns';

const SchoolCampaign = () => {
  return (
    <>
      <HeaderCampaigns campaign={'school'} />
      <Carousel slides={slides} />
      <Content />
    </>
  );
};

export default SchoolCampaign;
