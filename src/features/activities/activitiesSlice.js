import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
  getActivities,
  saveActivityData,
  updateActivityDataById,
} from '../../Services/activitiesService';

export const fetchActivities = createAsyncThunk('activities/fetchActivities', async () => {
  const { error, data } = await getActivities();
  console.log(error, data);
  return { error: error?.message, data: data?.data };
});

export const saveActivity = createAsyncThunk('activities/saveActivity', async (params) => {
    console.log(params)
    const {id, body} = params
    const { error, data } = id
    ? await updateActivityDataById(id, body)
    : await saveActivityData(body);
  console.log(error, data);
  return { error: error?.message, data };
});

export const activitiesSlice = createSlice({
  name: 'activities',
  initialState: {
    activities: [],
    loading: false,
    error: null,
  },
  reducers: {
      setLoading: (state, action) =>{
        state.loading = action.payload
      }
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
  },
});

export const selectActivities = (state) => state.activities;

export const {setLoading} = activitiesSlice.actions

export default activitiesSlice.reducer;
