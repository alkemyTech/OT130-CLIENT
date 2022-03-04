import React from 'react';
import CampaignsRoutes from '../routes/CampaignsRoutes';
import FooterCampaings from './Shared/FooterCampaings';

const Campaigns = () => {
  return (
    <div className="footer-fix d-flex row">
      <CampaignsRoutes />
      <FooterCampaings />
    </div>
  );
};

export default Campaigns;
