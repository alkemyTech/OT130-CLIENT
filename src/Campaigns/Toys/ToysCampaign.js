import React from 'react';
import HeaderCampaings  from '../Shared/HeaderCampaigns';
import Slider from './Slider';
import Content from './Content/Content';

const ToysCampaign = () => {
  return (
    <>
      <HeaderCampaings campaign={"toys"} />
      <div>
        <Slider />
        <Content />
      </div>
    </>
  );
}
 
export default ToysCampaign;