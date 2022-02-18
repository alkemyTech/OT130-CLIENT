import { configureStore } from '@reduxjs/toolkit';
import usersReducer from '../reducers/usersReducer';
import termsAndConditionsReducer from '../reducers/termsAndConditionsReducer';
import authReducer from '../reducers/auth/authReducer';
import slidesReducer from '../reducers/slidesSlice';
import activitiesReducer from '../reducers/activitiesReducer'

export default configureStore({
  reducer: {
    slides: slidesReducer,
    activities: activitiesReducer,
    authUser: authReducer, 
    users: usersReducer,
    termsAndConditions: termsAndConditionsReducer,
  }
});