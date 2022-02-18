import { configureStore, combineReducers } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import newsReducer from '../reducers/novedadesReducer';
import slidesReducer from '../reducers/slidesSlice';
import activitiesReducer from '../reducers/activitiesReducer'

const reducer = combineReducers({
  slides: slidesReducer,
  activities: activitiesReducer,
  counter: counterReducer,
  news: newsReducer,
})

export default configureStore({
  reducer
});
