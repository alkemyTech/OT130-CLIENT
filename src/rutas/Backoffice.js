import React from 'react';
import { Route, Switch } from 'react-router-dom';
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
import { ScreenDashboard } from '../Screens/ScreenDashboard';

function Backoffice() {
    return (
        <Switch>
            <Route path="/backoffice/activities/create" component={ActivitiesCreation} />
            <Route path="/backoffice/activities/edit/:id" component={ActivitiesEdition} />
            <Route path="/backoffice/organization/edit" component={OrganizationEdit} />
            <Route path="/backoffice/home" component={HomeForm} />
            <Route path="/backoffice/create-slide" component={SlidesForm} />
            <Route path="/backoffice/slides" component={SlidesList} />
            <Route exact path="/backoffice/organization" component={Organization} />
            <Route exact path="/backoffice/users" component={UserList} />
            <Route exact path="/backoffice/users/create" component={CreateEditUser} />
            <Route exact path="/backoffice/users/create/:id" component={CreateEditUser} />
            <Route path="/backoffice/activities" component={BackofficeActivitiesList} />
            <Route path="/" component={ScreenDashboard} />
        </Switch>
    )
}

export default Backoffice