import React from 'react';
import Header from './Header';
import BackofficeRoutes from '../routes/BackofficeRoutes';

const Backoffice = () => {
  return (
    <div>
      <Header />
      <div className="d-flex justify-content-center my-5">
        <BackofficeRoutes />
      </div>
    </div>
  );
};

export default Backoffice;
