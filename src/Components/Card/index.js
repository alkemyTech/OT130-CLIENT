import React from 'react';
import { IMAGE_NOT_AVAIBLE } from '../../Helpers/messagesText';
import { EmptyScreen } from '../EmptyScreen';
import './styles.css';

const Card = ({ data }) => {
  console.log(data);
  return (
    <div className="card">
      {data.image ? (
        <img className="card-img" src={data.image} alt="Card cap" />
      ) : (
        <div className="empty-image">{IMAGE_NOT_AVAIBLE}</div>
      )}
      <div className="card-body">
        <h5 className="card-title">{data.name}</h5>
        <p className="card-text">{data.description || data.content}</p>
      </div>
    </div>
  );
};

export default Card;
