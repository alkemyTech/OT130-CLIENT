import { configureStore } from '@reduxjs/toolkit';
import usersReducer from '../reducers/usersReducer';
import termsAndConditionsReducer from '../reducers/termsAndConditionsReducer';
import authReducer from '../reducers/auth/authReducer';
import organizationReducer from '../reducers/organizationReducer';
import slidesReducer from '../reducers/slidesSlice';
import activitiesReducer from '../reducers/activitiesReducer';
import newsReducer from '../reducers/novedadesReducer';
import { membersReducer } from '../reducers/membersReducer';

export default configureStore({
  reducer: {
    activities: activitiesReducer,
    users: usersReducer,
    authUser: authReducer, 
    termsAndConditions: termsAndConditionsReducer,
    members: membersReducer,
    slides: slidesReducer,
    organization: organizationReducer,
    news: newsReducer,
  }
});
