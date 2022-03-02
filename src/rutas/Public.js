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
import RegisterForm from '../Components/Auth/RegisterForm';
import NewsLetter from '../Components/Newsletter/Newsletter';
import ProtectedRoute from '../Components/Auth/ProtectedRoute';

function Public() {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/activities" component={Activities} />
            <Route path="/contacts" component={Contacts} />
            <Route path="/create-category" component={CategoriesForm} />
            <Route path="/create-news" component={NewsForm} />
            <Route path="/create-testimonials" component={TestimonialForm} />
            <Route path="/create-member" component={MembersForm} />
            <Route path="/create-project" component={ProjectsForm} />
            <Route path="/donate" component={Donation} />
            <ProtectedRoute path="/newsletter" component={NewsLetter} />
            <Route path="/school-campaign" component={SchoolCampaign} />
            <Route path="/thanks" component={Thanks} />
            <Route path="/toys-campaign" component={ToysCampaign} />
            <Route path="/activities/:id" component={ActivityDetail} />
            <Route path="/register" component={RegisterForm} />
        </Switch>
    )
}

export default Public