import { configureStore } from '@reduxjs/toolkit';
import usersReducer from '../reducers/usersReducer';
import slidesReducer from '../reducers/slidesSlice';
import activitiesReducer from '../reducers/activitiesReducer';

export default configureStore({
  reducer: {
    slides: slidesReducer,
    activities: activitiesReducer,
    users: usersReducer
  },
});
