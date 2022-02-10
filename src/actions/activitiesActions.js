import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { getActivities } from '../Services/activitiesService';

const fetchActivities = createAsyncThunk('activities/fetchActivities', async () => {
  const { error, data } = await getActivities();
  console.log(error, data);
  return { error: error?.message, data: data?.data };
});

export { fetchActivities };
