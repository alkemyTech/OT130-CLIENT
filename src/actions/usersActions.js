import { createAsyncThunk } from '@reduxjs/toolkit';
import { getUsers, deleteUser } from '../Services/usersService';

const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  const { error, data } = await getUsers();
  return { error: error?.message, data: data };
});

const deleteUsers = createAsyncThunk('users/deleteUsers', async (id) => {
  const { error, data } = await deleteUser(id);
  return { error: error?.message, data: data };
});

export { fetchUsers, deleteUsers };


