import React from 'react';
import { FcHighPriority } from "react-icons/fc";

import { FETCH_ERROR } from '../../Helpers/messagesText';

export const ErrorMessage = ({message}) => {
  return (
    <div className='p-5  d-flex justify-content-center'>

    <div className='border border-danger d-flex p-5 shadow'>
      <FcHighPriority className='m-2 h1'/>
      <p className='fw-bolder lh-base text-danger m-2'>
          {message || FETCH_ERROR}
      </p>
  </div>
    </div>
  );
};
