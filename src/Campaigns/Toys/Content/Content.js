import React from 'react';
import './Content.css'
const url = "https://encrypted-tbn0.gstatic.com/img?q=tbn:ANd9GcSgM1ukvKoMuh5le72I8MUgzLBuU_YuY1M2pqXfzybz9AN5LpucBBaLUQpo2IcvsZDnFuY&usqp=CAU"

const Content = () => {
  return (
    <div className='content-container '>
      <h5 className='content-date  m-3'>fecha</h5>
      <div className='content-container-date-image'>
        <div className='content-image content-image-rotate-27'>
          <img src={url}/>
        </div>
        <div>
          <h4 className='content-Countdown m-3 m-3'>cuenta regresiva</h4>
        </div>
        <div className='content-image content-image-rotate-reverse-27'>
        <img src={url}/>
        </div>
      </div>
      <p className='content-descriptin m-3'>
        is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
        text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only
        five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of
        Lorem Ipsum.
      </p>
      <div className='content-container-image'>
        <div className='content-image content-image-rotate-27'>
        <img src={url}/>
        </div>
        <div className='content-image'>
        <img src={url}/>
        </div>
        <div className='content-image content-image-rotate-reverse-27'>
        <img src={url}/>
        </div>
      </div>
    </div>
  );
}

export default Content;