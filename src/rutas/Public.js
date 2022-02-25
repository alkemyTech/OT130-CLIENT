import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Activities from '../Components/Activities';
import CategoriesForm from '../Components/Categories/CategoriesForm';
import Contacts from '../Components/Contact';
import Donation from '../Components/Donations/Donation';
import MembersForm from '../Components/Members/MembersForm';
import NewsForm from '../Components/News/NewsForm';
import ProjectsForm from '../Components/Projects/ProjectsForm';
import SchoolCampaign from '../Campaigns/School/SchoolCampaign';
import TestimonialForm from '../Components/Testimonials/TestimonialsForm';
import Thanks from '../Components/Donations/Thanks';
import ToysCampaign from '../Campaigns/Toys/ToysCampaign';
import Home from '../Components/Home/Index';
import ActivityDetail from '../Components/Activities/Detail/ActivityDetail';
import LoginForm from '../Components/Auth/LoginForm';
import RegisterForm from '../Components/Auth/RegisterForm';

function Public() {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login" exact component={LoginForm} />
            <Route path="/register" exact component={RegisterForm} />
            <Route path="/activities" component={Activities} />
            <Route path="/contacts" component={Contacts} />
            <Route path="/create-category" component={CategoriesForm} />
            <Route path="/create-news" component={NewsForm} />
            <Route path="/create-testimonials" component={TestimonialForm} />
            <Route path="/create-member" component={MembersForm} />
            <Route path="/create-project" component={ProjectsForm} />
            <Route path="/donate" component={Donation} />
            <Route path="/school-campaign" component={SchoolCampaign} />
            <Route path="/thanks" component={Thanks} />
            <Route path="/toys-campaign" component={ToysCampaign} />
            <Route path="/activities/:id" component={ActivityDetail} />
        </Switch>
    )
}

export default Public