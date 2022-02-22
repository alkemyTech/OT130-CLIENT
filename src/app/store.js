import { membersReducer } from '../reducers/membersReducer';
import { configureStore } from '@reduxjs/toolkit';
import usersReducer from '../reducers/usersReducer';
import slidesReducer from '../reducers/slidesSlice';
import activitiesReducer from '../reducers/activitiesReducer';
import authReducer from '../reducers/auth/authReducer';

export default configureStore({
  reducer: {
    activities: activitiesReducer,
    users: usersReducer,
    authUser: authReducer, 
    members: membersReducer,
    slides: slidesReducer,
  }
});
