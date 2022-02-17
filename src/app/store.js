import { configureStore, combineReducers } from '@reduxjs/toolkit';

import { membersReducer } from '../reducers/membersReducer';
import slidesReducer from '../reducers/slidesSlice';

const reducer = combineReducers({
  slides: slidesReducer,
  members: membersReducer,
});

export default configureStore({
  reducer,
});
