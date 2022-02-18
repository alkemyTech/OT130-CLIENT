import React from 'react';
import Header from './Header';
import Slider from './Slider';
import Content from './Content';
import CampaignFooter from '../../Components/CampaignFooter/CampaignFooter';

const ToysCampaign = () => {
  return (
    <>
      <Header />
      <Slider />
      <Content />
      <CampaignFooter />
    </>
  );
}
 
export default ToysCampaign;