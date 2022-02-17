import React from 'react';
import { Spinner } from 'react-bootstrap';
const Loader = ({isLoading}) => {
  if(!isLoading) return null;
  return (
    <div className="d-flex justify-content-center">
      <Spinner animation="border" role="status"/>
 
    </div>
  )
}

export default Loader
