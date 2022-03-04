import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import FooterCampaings from '../../Campaigns/Shared/FooterCampaings';

const Layout = ({ children }) => {
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split('/');

  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
