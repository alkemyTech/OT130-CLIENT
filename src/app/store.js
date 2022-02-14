import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import AuthReducer from '../reducers/auth/authReducer';

export default configureStore({
  reducer: {
    counter: counterReducer,
    AuthUser: AuthReducer, 
  },
});
