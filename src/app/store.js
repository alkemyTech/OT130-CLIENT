import { configureStore, combineReducers } from '@reduxjs/toolkit';

import { membersReducer } from '../reducers/membersReducer';
import slidesReducer from '../reducers/slidesSlice';
import activitiesReducer from '../reducers/activitiesReducer';

const reducer = combineReducers({
  activities: activitiesReducer,
  members: membersReducer,
  slides: slidesReducer,
});

export default configureStore({
  reducer,
});
