import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { AnimatedSwitch } from 'react-router-transition';
import Activities from './Components/Activities';
import ActivitiesCreation from './Screens/Activities/ActivitiesCreation';
import ActivitiesEdition from './Screens/Activities/ActivitiesEdition';
import CategoriesForm from './Components/Categories/CategoriesForm';
import Contacts from './Components/Contact';
import Donation from './Components/Donations/Donation';
import MembersForm from './Components/Members/MembersForm';
import NewsForm from './Components/News/NewsForm';
import ProjectsForm from './Components/Projects/ProjectsForm';
import SchoolCampaign from './Campaigns/School/SchoolCampaign';
import SlidesForm from './Components/Slides/SlidesForm';
import SlidesList from './Components/Slides/SlidesList';
import TestimonialForm from './Components/Testimonials/TestimonialsForm';
import Thanks from './Components/Donations/Thanks';
import ToysCampaign from './Campaigns/Toys/ToysCampaign';
import UserList from './Components/Users/UserList';
import Home from './Components/Home/Index';
import HomeForm from './Components/HomeForm/HomeForm';
import ActivityDetail from './Components/Activities/Detail/ActivityDetail';
import CreateEditUser from './Components/Users/CreateEditUser';
import OrganizationEdit from './Screens/Organization/OrganizationEdit';
import { ScreenDashboard } from './Screens/ScreenDashboard';
import Organization from './Screens/Organization/Organization';
import BackoficeActivitiesList from './Components/Activities/BackofficeActivitiesList';
import NewsLetter from './Components/Newsletter/Newsletter';
import ProtectedRoute from './Components/Auth/ProtectedRoute';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { transitionsConfig } from './config/transitions';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AnimatedSwitch
          atLeave={transitionsConfig.atLeave}
          atActive={transitionsConfig.atActive}
          atEnter={transitionsConfig.atEnter}
          mapStyles={transitionsConfig.mapStyles}
        >
          <Route path="/" exact component={Home} />
          <Route path="/activities" component={Activities} />
          <Route path="/contacts" component={Contacts} />
          <Route path="/backoffice/activities/create" component={ActivitiesCreation} />
          <Route path="/backoffice/activities/edit/:id" component={ActivitiesEdition} />
          <Route path="/create-category" component={CategoriesForm} />
          <Route path="/backoffice/organization/edit" component={OrganizationEdit} />
          <Route path="/create-news" component={NewsForm} />
          <Route path="/backoffice/home" component={HomeForm} />
          <Route path="/backoffice/create-slide" component={SlidesForm} />
          <Route path="/backoffice/slides" component={SlidesList} />
          <Route exact path="/backoffice/organization" component={Organization} />
          <Route exact path="/backoffice/users" component={UserList} />
          <ProtectedRoute path="/newsletter" component={NewsLetter} />
          <Route exact path="/backoffice/users/create" component={CreateEditUser} />
          <Route exact path="/backoffice/users/create/:id" component={CreateEditUser} />
          <Route path="/create-testimonials" component={TestimonialForm} />
          <Route path="/create-member" component={MembersForm} />
          <Route path="/create-project" component={ProjectsForm} />
          <Route path="/donate" component={Donation} />
          <Route path="/school-campaign" component={SchoolCampaign} />
          <Route path="/thanks" component={Thanks} />
          <Route path="/toys-campaign" component={ToysCampaign} />
          <Route path="/activities/:id" component={ActivityDetail} />
          <Route path="/backoffice/activities" component={BackoficeActivitiesList} />
          <Route path="/backoffice" component={ScreenDashboard} />
        </AnimatedSwitch>
      </BrowserRouter>
    </div>
  );
}

export default App;
