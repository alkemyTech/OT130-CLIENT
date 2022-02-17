import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import usersReducer from '../reducers/usersReducer';
import termsAndConditionsReducer from '../reducers/termsAndConditionsReducer';

export default configureStore({
  reducer: {
    counter: counterReducer,
    users: usersReducer,
    termsAndConditions: termsAndConditionsReducer,
  },
});
