import React from 'react';
import Header from './Header';
import Slider from './Slider';
import Content from './Content';

const SchoolCampaign = () => {


  return (
    <div className='footer-fix'>
      <Header />
      <div>
        <Slider />
        <Content />
      </div>
    </div >
  );
};

export default SchoolCampaign;
