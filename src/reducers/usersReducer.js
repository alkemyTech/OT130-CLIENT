import { createReducer } from '@reduxjs/toolkit';
import { fetchUsers, deleteUsers } from '../actions/usersActions';

const initialState = {
  users: [],
  isDeleted: false,
  isLoading: false,
  error: null,
};

const usersReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchUsers.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(fetchUsers.fulfilled, (state, action) => {
      if (action.payload.error) {
        state.error = action.payload.error;
      } else {
        state.users = action.payload.data;
      }
      state.isLoading = false;
    })
    .addCase(deleteUsers.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(deleteUsers.fulfilled, (state, action) => {
      if (action.payload.error) {
        state.error = action.payload.error;
      } else {
        state.isDeleted = true;
        state.users = state.users.filter((user) => user.id !== action.payload);
      }
      state.isDeleted = false;
      state.isLoading = false;

    })
    .addCase(deleteUsers.rejected, (state, action) => {
      state.error = action.payload.error;
      state.isLoading = false;
    }) 
});

export const selectUsers = (state) => state.users;

export default usersReducer;