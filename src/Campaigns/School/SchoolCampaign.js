import React from 'react';
import Content from './Content';
import Carousel from '../../Components/Carousel/Carousel';

import slides from '../../Services/mocks/schoolSliders';
import HeaderCampaigns from '../Shared/HeaderCampaigns';

const SchoolCampaign = () => {
  return (
    <>
      <HeaderCampaigns campaign={'school'} />
      <div>
        <Carousel slides={slides} />
        <Content />
      </div>
    </>
  );
};

export default SchoolCampaign;
