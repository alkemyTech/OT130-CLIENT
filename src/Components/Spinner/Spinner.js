import React from 'react';
import DotLoader from "react-spinners/DotLoader";
import { GREEN_BLUE_COLOR } from '../../config/colorConfig';
import "./Spinner.css";

export const Spinner = () => {
  return (
    <>
      <div className='spinner-container'>
        <DotLoader
          color={GREEN_BLUE_COLOR}
          size={150}
        />
      </div>
    </>
  )
};
