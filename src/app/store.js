import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import AuthReducer from '../reducers/authReducer';

export default configureStore({
  reducer: {
    counter: counterReducer,
    AuthUser: AuthReducer, 
  },
});
