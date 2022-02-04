import React from 'react';
import DotLoader from "react-spinners/DotLoader";
import { SPINNER_COLOR_VERDITER } from '../../config/spinnerConfig';
import "./Spinner.css";

export const Spinner = () => {
  return (
    <>
      <div className='spinner-container'>
        <DotLoader
          color={SPINNER_COLOR_VERDITER}
          size={150}
        />
      </div>
    </>
  )
};
