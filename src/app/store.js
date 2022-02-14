import { configureStore } from '@reduxjs/toolkit';

import counterReducer from '../features/counter/counterSlice';
import { membersReducer } from '../reducers/membersReducer';

export default configureStore({
  reducer: {
    counter: counterReducer,
    members: membersReducer,
  },
});
