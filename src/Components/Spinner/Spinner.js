import React from 'react';
import DotLoader from "react-spinners/DotLoader";
import { SPINNER_COLOR_GREEN_BLUE } from '../../config/colorConfig';
import "./Spinner.css";

export const Spinner = () => {
  return (
    <>
      <div className='spinner-container'>
        <DotLoader
          color={SPINNER_COLOR_GREEN_BLUE}
          size={150}
        />
      </div>
    </>
  )
};
