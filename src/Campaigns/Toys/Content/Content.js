import React from 'react';
import { CAMPAING_END_DATE, IMAGE_TOY_URL } from '../../../Helpers/constants';
import { countDown } from '../../../Helpers/daysUntilDate';
import './Content.css';

const Content = () => {

  const countDownResult = countDown( CAMPAING_END_DATE );

  return (
    <div className='content-container '>
      <h5 className='content-date  m-3'>{CAMPAING_END_DATE} hs Calle 123, Localidad, Provincia</h5>
      <div className='content-container-date-image'>
        <div className='content-image content-image-rotate-27'>
          <img src={IMAGE_TOY_URL} />
        </div>
        <div>
          <h4 className='content-Countdown m-3 m-3'>Te quedan: {countDownResult} para participar</h4>
        </div>
        <div className='content-image content-image-rotate-reverse-27'>
          <img src={IMAGE_TOY_URL} />
        </div>
      </div>
      <p className='content-descriptin m-3'>
        Descripcion de la campaña lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
        ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>
      <div className='content-container-image'>
        <div className='content-image content-image-rotate-27'>
          <img src={IMAGE_TOY_URL} />
        </div>
        <div className='content-image'>
          <img src={IMAGE_TOY_URL} />
        </div>
        <div className='content-image content-image-rotate-reverse-27'>
          <img src={IMAGE_TOY_URL} />
        </div>
      </div>
    </div>
  );
}

export default Content;