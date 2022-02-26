import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Activities from '../Components/Activities';
import ActivityDetail from '../Components/Activities/Detail/ActivityDetail';
import Contacts from '../Components/Contact';
import Donation from '../Components/Donations/Donation';
import Home from '../Components/Home/Index';
import SchoolCampaign from '../Campaigns/School/SchoolCampaign';
import Thanks from '../Components/Donations/Thanks';
import ToysCampaign from '../Campaigns/Toys/ToysCampaign';
import { RequireAuth } from '../Components/Auth/ProtectedRoute';

function Public() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/activities" component={Activities} />
      <Route path="/activities/:id" component={ActivityDetail} />
      <Route path="/contacts" component={Contacts} />
      <Route path="/school-campaign" component={SchoolCampaign} />
      <Route path="/toys-campaign" component={ToysCampaign} />
      <Route path="/thanks" component={Thanks} />
      <RequireAuth>
        <Route path="/donate" component={Donation} />
      </RequireAuth>
    </Switch>
  );
}

export default Public;
