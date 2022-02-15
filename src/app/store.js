import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import newsReducer from '../reducers/novedadesReducer';

export default configureStore({
  reducer: {
    counter: counterReducer,
    news: newsReducer,
  },
});
