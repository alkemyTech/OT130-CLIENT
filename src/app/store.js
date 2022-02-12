import { configureStore } from '@reduxjs/toolkit';
import activitiesReducer from '../reducers/activitiesReducer';

export default configureStore({
  reducer: {
    activities: activitiesReducer,
  }, 
});
