import { createReducer } from '@reduxjs/toolkit';
import { setLoading, fetchActivities, saveActivity } from '../actions/activitiesActions';

const initialState = {
  activities: [],
  loading: false,
  error: null,
};

const activitiesReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setLoading, (state, action) => {
      state.loading = action.payload
    })
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
    .addCase(saveActivity.pending, (state) => {
      state.loading = true;
    })
    .addCase(saveActivity.fulfilled, (state, action) => {
      if (action.payload.error) {
        state.error = action.payload.error;
      } else {
        state.data = action.payload.data;
        state.activities = [...state.activities, action.payload.data.data];
      }
      state.loading = false;
    });
});

export const selectActivities = (state) => state.activities;

export default activitiesReducer;
