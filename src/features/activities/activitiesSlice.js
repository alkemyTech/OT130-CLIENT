import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getActivities, saveActivityData } from '../../Services/activitiesService';

export const fetchActivities = createAsyncThunk('activities/fetchActivities', async () => {
  const { error, data } = await getActivities();
  return { error: error?.message, data: data?.data };
});

export const activitiesSlice = createSlice({
  name: 'activities',
  initialState: {
    activities: [],
    loading: false,
    error: null,
  },
  extraReducers(builder) {
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
      });
  },
});

export const selectActivities = (state) => state.activities;

export default activitiesSlice.reducer;
