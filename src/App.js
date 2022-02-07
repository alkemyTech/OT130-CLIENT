import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Activities from './Components/Activities';
import ActivitiesCreation from './Screens/Activities/ActivitiesCreation';
import ActivitiesEdition from './Screens/Activities/ActivitiesEdition';
import CategoriesForm from './Components/Categories/CategoriesForm';
import Donation from './Components/Donations/Donation';
import MembersForm from './Components/Members/MembersForm';
import NewsForm from './Components/News/NewsForm';
import ProjectsForm from './Components/Projects/ProjectsForm';
import SchoolCampaign from './Campaigns/School/SchoolCampaign';
import SlidesForm from './Components/Slides/SlidesForm';
import TestimonialForm from './Components/Testimonials/TestimonialsForm';
import Thanks from './Components/Donations/Thanks';
import ToysCampaign from './Campaigns/Toys/ToysCampaign';
import Home from './Components/Home/Index';
import HomeForm from './Components/HomeForm/HomeForm';
import ActivityDetail from './Components/Activities/Detail/ActivityDetail';
import CreateEditUser from './Components/Users/CreateEditUser';
import OrganizationEdit from './Screens/Organization/OrganizationEdit';
import { ScreenDashboard } from './Screens/ScreenDashboard';
import Organization from './Screens/Organization/Organization';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/activities" component={Activities} />
          <Route path="/create-activity" component={ActivitiesCreation} />
          <Route path="/edit-activity/:id" component={ActivitiesEdition} />
          <Route path="/create-category" component={CategoriesForm} />
          <Route path="/backoffice/organization/edit" component={OrganizationEdit} />
          <Route path="/create-news" component={NewsForm} />
          <Route path="/backoffice/home" component={HomeForm} />
          <Route path="/backoffice/create-slide" component={SlidesForm} />
          <Route exact path="/backoffice/organization" component={Organization} />
          <Route path="/create-testimonials" component={TestimonialForm} />
          <Route path="/create-user" component={CreateEditUser} />
          <Route path="/create-member" component={MembersForm} />
          <Route path="/create-project" component={ProjectsForm} />
          <Route path="/donate" component={Donation} />
          <Route path="/school-campaign" component={SchoolCampaign} />
          <Route path="/thanks" component={Thanks} />
          <Route path="/toys-campaign" component={ToysCampaign} />
          <Route path="/activities/:id" component={ActivityDetail} />
          <Route path="/backoffice" component={ScreenDashboard} />
        </Switch>
      </BrowserRouter>
      
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Counter />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <span>
            <span>Learn </span>
            <a
              className="App-link"
              href="https://reactjs.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              React
            </a>
            <span>, </span>
            <a
              className="App-link"
              href="https://redux.js.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Redux
            </a>
            <span>, </span>
            <a
              className="App-link"
              href="https://redux-toolkit.js.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Redux Toolkit
            </a>
            ,<span> and </span>
            <a
              className="App-link"
              href="https://react-redux.js.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              React Redux
            </a>
          </span>
        </header>
      </div>
    </>
  );
}

export default App;
