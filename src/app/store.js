import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import newsReducer from '../reducers/novedadesReducer';
import slidesReducer from '../reducers/slidesSlice';
import activitiesReducer from '../reducers/activitiesReducer'
import { membersReducer } from '../reducers/membersReducer';
import usersReducer from '../reducers/usersReducer';
import authReducer from '../reducers/auth/authReducer';

export default configureStore({
  reducer: {
    activities: activitiesReducer,
    users: usersReducer,
    authUser: authReducer, 
    members: membersReducer,
    slides: slidesReducer,
    counter: counterReducer,
    news: newsReducer,
  }
});
