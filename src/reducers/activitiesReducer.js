import { createReducer } from '@reduxjs/toolkit';
import { fetchActivities } from '../actions/activitiesActions';

const initialState = {
  activities: [],
  isLoading: false,
  error: null,
};

const activitiesReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchActivities.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(fetchActivities.fulfilled, (state, action) => {
      if (action.payload.error) {
        state.error = action.payload.error;
      } else {
        state.activities = action.payload.data;
      }
      state.isLoading = false;
    })
});

export const selectActivities = (state) => state.activities;

export default activitiesReducer;
