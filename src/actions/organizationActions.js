import { createAsyncThunk } from '@reduxjs/toolkit';
import { Get } from '../Services/publicApiService';

const fetchOrganization = createAsyncThunk('organization/fetchOrganization', async () => {
  const { data, error } = await Get('organization',1);
  return { data: data?.data, error };
});

export { fetchOrganization };
