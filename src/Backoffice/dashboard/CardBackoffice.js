import React from 'react';
import { Link } from 'react-router-dom';
import './cardBackoffice.css';

const CardBackoffice = ({ cardInfo }) => {
  return (
    <div className="card-backoffice-container">
      <div className="w-100 h-100 d-flex flex-column justify-content-around aling-items-center">
        <div>
          <h5 className='title-card-style'>{cardInfo.title}</h5>
        </div>
        <div>
          <span className="icon-card-style">{cardInfo.icon}</span>
        </div>
        <div>
          <span className="link-path-style">
            <Link to={cardInfo.path} variant="primary">
              Ir
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default CardBackoffice;
