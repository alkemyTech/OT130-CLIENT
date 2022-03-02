import React from 'react';
import HeaderCampaings  from '../Shared/HeaderCampaigns';
import Slider from './Slider';
import Content from './Content';
import Footer from './Footer';

const ToysCampaign = () => {
  return (
    <>
      <HeaderCampaings campaign={"school"} />
      <Slider />
      <Content />
      <Footer />
    </>
  );
}
 
export default ToysCampaign;