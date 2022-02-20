import { membersReducer } from '../reducers/membersReducer';
import { configureStore } from '@reduxjs/toolkit';
import usersReducer from '../reducers/usersReducer';
import termsAndConditionsReducer from '../reducers/termsAndConditionsReducer';
import authReducer from '../reducers/auth/authReducer';
import slidesReducer from '../reducers/slidesSlice';
import activitiesReducer from '../reducers/activitiesReducer';

export default configureStore({
  reducer: {
    activities: activitiesReducer,
    users: usersReducer,
    authUser: authReducer, 
    termsAndConditions: termsAndConditionsReducer,
    members: membersReducer,
    slides: slidesReducer,
  }
});
