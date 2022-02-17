import { configureStore, combineReducers } from '@reduxjs/toolkit';
import slidesReducer from '../reducers/slidesSlice';
import activitiesReducer from '../reducers/activitiesReducer'

const reducer = combineReducers({
  slides: slidesReducer,
  activities: activitiesReducer
})

export default configureStore({
  reducer
});
