import React from 'react';
import { Switch } from 'react-router-dom';
import { AdminRoute, AuthRoute } from '../Components/Auth/ProtectedRoute';
import ActivitiesCreation from '../Screens/Activities/ActivitiesCreation';
import ActivitiesEdition from '../Screens/Activities/ActivitiesEdition';
import OrganizationEdit from '../Screens/Organization/OrganizationEdit';
import HomeForm from '../Components/HomeForm/HomeForm';
import SlidesForm from '../Components/Slides/SlidesForm';
import SlidesList from '../Components/Slides/SlidesList';
import Organization from '../Screens/Organization/Organization';
import UserList from '../Components/Users/UserList';
import CreateEditUser from '../Components/Users/CreateEditUser';
import BackofficeActivitiesList from '../Components/Activities/BackofficeActivitiesList';
import MembersForm from '../Components/Members/MembersForm';
import NewsForm from '../Components/News/NewsForm';
import ProjectsForm from '../Components/Projects/ProjectsForm';
import CategoriesForm from '../Components/Categories/CategoriesForm';
import TestimonialForm from '../Components/Testimonials/TestimonialsForm';
import { ScreenDashboard } from '../Backoffice/dashboard/ScreenDashboard';

function Backoffice() {
  return (
    <Switch>
        <AuthRoute exact path="/backoffice" component={ScreenDashboard} />
        <AuthRoute exact path="/backoffice/activities" component={BackofficeActivitiesList} />
        <AuthRoute exact path="/backoffice/slides" component={SlidesList} />
        <AuthRoute exact path="/backoffice/organization" component={Organization} />
        <AuthRoute exact path="/backoffice/users" component={UserList} />
        <AdminRoute exact path="/backoffice/categories/create" component={CategoriesForm} />
        <AdminRoute exact path="/backoffice/news/create" component={NewsForm} />
        <AdminRoute exact path="/backoffice/testimonials/create" component={TestimonialForm} />
        <AdminRoute exact path="/backoffice/members/create" component={MembersForm} />
        <AdminRoute exact path="/backoffice/projects/create" component={ProjectsForm} />
        <AdminRoute exact path="/backoffice/activities/create" component={ActivitiesCreation} />
        <AdminRoute exact path="/backoffice/activities/edit/:id" component={ActivitiesEdition} />
        <AdminRoute exact path="/backoffice/organization/edit" component={OrganizationEdit} />
        <AdminRoute exact path="/backoffice/home" component={HomeForm} />
        <AdminRoute exact path="/backoffice/create-slide" component={SlidesForm} />
        <AdminRoute exact path="/backoffice/users/create" component={CreateEditUser} />
        <AdminRoute exact path="/backoffice/users/create/:id" component={CreateEditUser} />
    </Switch>
  );
}

export default Backoffice;
    