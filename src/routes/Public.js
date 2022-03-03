import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Activities from '../Components/Activities';
import ActivityDetail from '../Components/Activities/Detail/ActivityDetail';
import Contacts from '../Components/Contact';
import Donation from '../Components/Donations/Donation';
import Home from '../Components/Home';
import RegisterForm from '../Components/Auth/RegisterForm';
import LoginForm from '../Components/Auth/LoginForm';
import SchoolCampaign from '../Campaigns/School/SchoolCampaign';
import Thanks from '../Components/Donations/Thanks';
import ToysCampaign from '../Campaigns/Toys/ToysCampaign';
import { AuthRoute } from '../Components/Auth/ProtectedRoute';
import { PublicRoute } from '../router/PublicRoute';
import Layout from '../Components/Layout/Layout';

function Public() {
  return (
    <Switch>
      <Layout>
        <Route path="/" exact component={Home} />
        <Route path="/activities" component={Activities} />
        <Route path="/activities/:id" component={ActivityDetail} />
        <Route path="/contacts" component={Contacts} />
        <Route path="/thanks" component={Thanks} />
        <PublicRoute path="/login" component={LoginForm} />
        <PublicRoute path="/register" component={RegisterForm} />
        <AuthRoute path="/donate" component={Donation} />
        <Route path="/school-campaign" component={SchoolCampaign} />
        <Route path="/toys-campaign" component={ToysCampaign} />
      </Layout>
    </Switch>
  );
}

export default Public;
