import { configureStore } from '@reduxjs/toolkit';
import activitiesReducer from '../reducers/activitiesReducer';
import counterReducer from '../features/counter/counterSlice';

export default configureStore({
  reducer: {
    activities: activitiesReducer,
    counter: counterReducer,
  }, 
});
