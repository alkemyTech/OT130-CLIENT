import { configureStore, combineReducers } from '@reduxjs/toolkit';
import slidesReducer from '../redux/slides/slidesSlice';
import counterReducer from '../features/counter/counterSlice'

const reducer = combineReducers({
  slides: slidesReducer,
  counter: counterReducer
})

export default configureStore({
  reducer
});
