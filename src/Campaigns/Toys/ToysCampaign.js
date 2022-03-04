import React from 'react';
import Carousel from '../../Components/Carousel/Carousel';
import Content from './Content/Content';
import HeaderCampaigns from '../Shared/HeaderCampaigns';
import slides from '../../Services/mocks/schoolSliders.json';


const ToysCampaign = () => {
  return (
    <>
      <HeaderCampaigns campaign={'toys'} />
      <div>
      <Carousel slides={slides} />
        <Content />
      </div>
    </>
  );
};

export default ToysCampaign;
