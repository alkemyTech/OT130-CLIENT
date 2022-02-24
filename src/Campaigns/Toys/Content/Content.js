import React from 'react';
import { countDown } from '../../../Helpers/daysUntilDate';
import './Content.css';

const urlImage = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThcJF7uzhXbdY2WeZuHPo65_OAgZWfxZclNw&usqp=CAU";

const Content = () => {

  const CountDown = countDown("2022-06-14");

  return (
    <div className='content-container '>
      <h5 className='content-date  m-3'>2022-06-14 hs Calle 123, Localidad, Provincia</h5>
      <div className='content-container-date-image'>
        <div className='content-image content-image-rotate-27'>
          <img src={urlImage} />
        </div>
        <div>
          <h4 className='content-Countdown m-3 m-3'>Te quedan: {CountDown} para participar</h4>
        </div>
        <div className='content-image content-image-rotate-reverse-27'>
          <img src={urlImage} />
        </div>
      </div>
      <p className='content-descriptin m-3'>
        Descripcion de la campaña lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
        ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>
      <div className='content-container-image'>
        <div className='content-image content-image-rotate-27'>
          <img src={urlImage} />
        </div>
        <div className='content-image'>
          <img src={urlImage} />
        </div>
        <div className='content-image content-image-rotate-reverse-27'>
          <img src={urlImage} />
        </div>
      </div>
    </div>
  );
}

export default Content;