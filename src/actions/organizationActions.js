import { createAsyncThunk } from '@reduxjs/toolkit';
import { getOrganizationData } from '../Services/organizationService';

const fetchOrganization = createAsyncThunk('organization/fetchOrganization', async () => {
  const { data, error } = await getOrganizationData();
  return { data: data?.data, error };
});

export { fetchOrganization };
