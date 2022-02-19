import { membersReducer } from '../reducers/membersReducer';
import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../reducers/auth/authReducer';
import slidesReducer from '../reducers/slidesSlice';
import activitiesReducer from '../reducers/activitiesReducer';

export default configureStore({
  reducer: {
    activities: activitiesReducer,
    authUser: authReducer,
    members: membersReducer,
    slides: slidesReducer,
  },
});
