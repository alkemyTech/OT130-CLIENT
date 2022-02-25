import React from 'react';
<<<<<<< HEAD
import { BrowserRouter, Route } from 'react-router-dom';
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
import BackofficeActivitiesList from './Components/Activities/BackofficeActivitiesList';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import RegisterForm from './Components/Auth/RegisterForm';
=======
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route } from 'react-router-dom';
import { AnimatedSwitch } from 'react-router-transition';
>>>>>>> d6ec5cdf38aa3a17993926b385cac83bf0f0cf11
import { transitionsConfig } from './config/transitions';
import Backoffice from './rutas/Backoffice';
import Public from './rutas/Public';

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
          <Route path="/backoffice" render={() => <Backoffice />} />
          <Route path="/" render={() => <Public />} />
        </AnimatedSwitch>
      </BrowserRouter>
    </div>
  );
}

export default App;
