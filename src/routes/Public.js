import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Activities from '../Components/Activities';
import ActivityDetail from '../Components/Activities/Detail/ActivityDetail';
import Contacts from '../Components/Contact';
import Donation from '../Components/Donations/Donation';
import Home from '../Components/Home';
import RegisterForm from '../Components/Auth/RegisterForm';
import LoginForm from '../Components/Auth/LoginForm';
import Thanks from '../Components/Donations/Thanks';
import { AuthRoute } from '../Components/Auth/ProtectedRoute';
import { PublicRoute } from '../router/PublicRoute';
import Layout from '../Components/Layout/Layout';
import About from '../Components/About';

function Public() {
  return (
    <Switch>
      <Layout>
        <Route path="/" exact component={Home} />
        <Route path="/activities" component={Activities} />
        <Route path="/activities/:id" component={ActivityDetail} />
        <Route path="/contacts" component={Contacts} />
        <Route path="/us" component={About} />
        <Route path="/thanks" component={Thanks} />
        <AuthRoute path="/donate" component={Donation} />
        <PublicRoute path="/login" component={LoginForm} />
        <PublicRoute path="/register" component={RegisterForm} />
      </Layout>
    </Switch>
  );
}

export default Public;
