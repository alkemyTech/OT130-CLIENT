import React from 'react';
import { countDown } from '../../../Helpers/daysUntilDate';
import './Content.css'

const Content = ({ eventDate, urlImage, eventDescription, Address }) => {

  const CountDown = countDown( eventDate );

  return (
    <div className='content-container '>
      <h5 className='content-date  m-3'>{eventDate} hs {Address}</h5>
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
       {eventDescription}
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