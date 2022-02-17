import { configureStore, combineReducers } from '@reduxjs/toolkit';
import slidesReducer from '../reducers/slidesSlice';

const reducer = combineReducers({
  slides: slidesReducer,
})

export default configureStore({
  reducer
});
