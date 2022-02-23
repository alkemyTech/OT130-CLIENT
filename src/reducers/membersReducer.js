import { createReducer } from '@reduxjs/toolkit';

import { fetchMembers } from '../actions/membersAction';

const initialState = {
  members: [],
  isLoading: false,
  error: null,
};

export const membersReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchMembers.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(fetchMembers.fulfilled, (state, action) => {
      state.members = action.payload.data;
      state.isLoading = false;
    })
    .addCase(fetchMembers.rejected, (state, action) => {
      state.error = action.payload.error;
      state.isLoading = false;
    });
});
