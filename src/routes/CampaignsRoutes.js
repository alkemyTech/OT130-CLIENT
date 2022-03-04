import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ToysCampaign from '../Campaigns/Toys/ToysCampaign';
import SchoolCampaign from '../Campaigns/School/SchoolCampaign';

function CampaignsRoutes() {
  return (
    <Switch>
      <Route path="/campaing/school" component={SchoolCampaign} />
      <Route path="/campaing/toys" component={ToysCampaign} />
    </Switch>
  );
}

export default CampaignsRoutes;
