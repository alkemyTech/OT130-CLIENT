import { createAsyncThunk } from '@reduxjs/toolkit';

import { getMembers } from '../Services/membersService';

const fetchMembers = createAsyncThunk('members/fetchMembers', async () => {
  const { error, data } = await getMembers();
  return { error, data };
});

export { fetchMembers };
