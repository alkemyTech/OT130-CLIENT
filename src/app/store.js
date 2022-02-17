import { configureStore, combineReducers } from '@reduxjs/toolkit';
import slidesReducer from '../reducers/slidesSlice';
import activitiesReducer from '../reducers/activitiesReducer'
import counterReducer from '../features/counter/counterSlice';
import newsReducer from '../reducers/novedadesReducer';

export default configureStore({
  reducer: {
    counter: counterReducer,
    news: newsReducer,
  },

const reducer = combineReducers({
  slides: slidesReducer,
  activities: activitiesReducer
})

export default configureStore({
  reducer
});
