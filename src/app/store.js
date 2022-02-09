import { configureStore } from '@reduxjs/toolkit';
import activitiesReducer from '../features/activities/activitiesSlice';
import counterReducer from '../features/counter/counterSlice';

export default configureStore({
  reducer: {
    activities: activitiesReducer,
    counter: counterReducer,
  }, 
});
