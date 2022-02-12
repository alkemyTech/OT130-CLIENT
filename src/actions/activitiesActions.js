import { createAsyncThunk } from '@reduxjs/toolkit';
import { getActivities } from '../Services/activitiesService';

const fetchActivities = createAsyncThunk('activities/fetchActivities', async () => {
  const { error, data } = await getActivities();
  return { error: error?.message, data: data };
});

export { fetchActivities };
