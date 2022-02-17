import { configureStore, combineReducers } from '@reduxjs/toolkit';
import slidesReducer from '../reducers/slidesSlice';
import activitiesReducer from '../reducers/activitiesReducer'
import AuthReducer from '../reducers/auth/authReducer';


const reducer = combineReducers({
  slides: slidesReducer,
  activities: activitiesReducer,
  AuthUser: AuthReducer, 
})

export default configureStore({
  reducer
});
