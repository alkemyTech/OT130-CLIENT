import { configureStore } from '@reduxjs/toolkit';
import AuthReducer from '../reducers/auth/authReducer';

export default configureStore({
  reducer: {
    AuthUser: AuthReducer, 
  },
});
