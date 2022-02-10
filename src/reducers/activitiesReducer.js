import { createReducer } from '@reduxjs/toolkit';
import { fetchActivities } from '../actions/activitiesActions';

const initialState = {
  activities: [],
  loading: false,
  error: null,
};

const activitiesReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchActivities.pending, (state) => {
      state.loading = true;
    })
    .addCase(fetchActivities.fulfilled, (state, action) => {
      if (action.payload.error) {
        state.error = action.payload.error;
      } else {
        state.activities = action.payload.data;
      }
      state.loading = false;
    })
});

export const selectActivities = (state) => state.activities;

export default activitiesReducer;
