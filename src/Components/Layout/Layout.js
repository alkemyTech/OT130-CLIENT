import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Layout = ({ children }) => {

  return (
    <div className='schema-page'>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
