import React from 'react';
import { FETCH_ERROR } from '../../Helpers/messagesText';

export const ErrorMessage = ({message}) => {

  return (
  <div>
      <h3>
          {message || FETCH_ERROR}
      </h3>
  </div>
  );
};
