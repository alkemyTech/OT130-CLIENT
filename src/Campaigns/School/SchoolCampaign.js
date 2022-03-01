import React from 'react';
import HeaderCampaings from '../Shared/HeaderCampaings';
import Slider from './Slider';
import Content from './Content';
import Footer from './Footer';

const SchoolCampaign = () => {
  return (
    <>
      <HeaderCampaings campaing={"school"} />
      <Slider />
      <Content />
      <Footer />
    </>
  );
}
 
export default SchoolCampaign;