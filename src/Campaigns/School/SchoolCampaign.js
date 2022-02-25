import React from 'react';
import Header from './Header';
import Slider from './Slider';
import Content from './Content';
import CampaignFooter from '../Footer/CampaignFooter';

const SchoolCampaign = () => {
  return (
    <>
      <Header />
      <Slider />
      <Content />
      <CampaignFooter />
    </>
  );
}
 
export default SchoolCampaign;