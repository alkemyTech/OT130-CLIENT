import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Activities from '../Activities';
import CategoriesForm from '../Categories/CategoriesForm';
import Contacts from '../Contact';
import Donation from '../Donations/Donation';
import MembersForm from '../Members/MembersForm';
import NewsForm from '../News/NewsForm';
import ProjectsForm from '../Projects/ProjectsForm';
import SchoolCampaign from '../../Campaigns/School/SchoolCampaign';
import TestimonialForm from '../Testimonials/TestimonialsForm';
import Thanks from '../Donations/Thanks';
import ToysCampaign from '../../Campaigns/Toys/ToysCampaign';
import Home from '../Home/Index';
import ActivityDetail from '../Activities/Detail/ActivityDetail';

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
            <Route path="/school-campaign" component={SchoolCampaign} />
            <Route path="/thanks" component={Thanks} />
            <Route path="/toys-campaign" component={ToysCampaign} />
            <Route path="/activities/:id" component={ActivityDetail} />
        </Switch>
    )
}

export default Public