import React from 'react';

const Card = ({ data }) => (
  <div className="card">
    <img className="card-img-top" src={data.image} alt="Card cap" />
    <div className="card-body">
      <h5 className="card-title">{data.name}</h5>
      <p
        className="card-text"
        dangerouslySetInnerHTML={{ __html: data.description || data.content }}
      ></p>
    </div>
  </div>
);

export default Card;
