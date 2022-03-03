import React from 'react';
import HeaderCampaings  from '../Shared/HeaderCampaigns';
import Slider from './Slider';
import Content from './Content/Content';
import FooterCampaings from '../Shared/FooterCampaings';

const ToysCampaign = () => {
  return (
    <>
      <HeaderCampaings campaign={"toys"} />
      <div>
        <Slider />
        <Content />
      </div>
      <FooterCampaings />
    </>
  );
}
 
export default ToysCampaign;