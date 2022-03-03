import React from 'react';
import HeaderCampaings  from '../Shared/HeaderCampaigns';
import Slider from './Slider';
import Content from './Content';

const SchoolCampaign = () => {

  return (
    <div className='footer-fix'>
      <HeaderCampaings campaign={"school"} />
      <div>
        <Slider />
        <Content />
      </div>
    </div >
  );
};

export default SchoolCampaign;
