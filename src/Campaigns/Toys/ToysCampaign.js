import React from 'react';
import Slider from './Slider';
import Content from './Content/Content';
import HeaderCampaigns from '../Shared/HeaderCampaigns';

const ToysCampaign = () => {
  return (
    <>
      <HeaderCampaigns campaign={'toys'} />
      <div>
        <Slider />
        <Content />
      </div>
    </>
  );
};

export default ToysCampaign;
