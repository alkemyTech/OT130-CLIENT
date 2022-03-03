import React from 'react';
import HeaderCampaings from '../Shared/HeaderCampaings';
import Slider from './Slider';
import Content from './Content/Content';
import Footer from './Footer';

const ToysCampaign = () => {
  return (
    <>
      <HeaderCampaings campaign={"toys"} />
      <Slider />
      <Content />
      <Footer />
    </>
  );
}
 
export default ToysCampaign;