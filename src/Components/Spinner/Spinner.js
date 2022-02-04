import React from 'react';
import DotLoader from "react-spinners/DotLoader";
import "./Spinner.css";

const color = "#36D7B7"

export const Spinner = () => {
  return (
    <>
      <div className='spinner-container'>
        <DotLoader
          color={color}
          size={150}
        />
      </div>
    </>
  )
};
