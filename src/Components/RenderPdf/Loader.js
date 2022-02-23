import React from 'react';
import { Spinner } from '../Spinner/Spinner';

const Loader = ({isLoading}) => {
  if(!isLoading) return null;
  return (
    <div className="d-flex justify-content-center">
      <Spinner animation="border" role="status"/>
    </div>
  )
}

export default Loader
