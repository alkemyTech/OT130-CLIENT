import { createAction, createAsyncThunk} from "@reduxjs/toolkit";
import { getActivities, saveActivityData, updateActivityDataById } from "../Services/activitiesService";

const fetchActivities = createAsyncThunk('activities/fetchActivities', async () => {
  const { error, data } = await getActivities();
  console.log(error, data);
  return { error: error?.message, data: data?.data };
});

const saveActivity = createAsyncThunk('activities/saveActivity', async (params) => {
  console.log(params);
  const { id, body } = params;
  const { error, data } = id
    ? await updateActivityDataById(id, body)
    : await saveActivityData(body);
  console.log(error, data);
  return { error: error?.message, data };
});

const setLoading = createAction('activities/setLoading')

export {fetchActivities, saveActivity, setLoading}
