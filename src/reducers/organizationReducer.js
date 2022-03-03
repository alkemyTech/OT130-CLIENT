import { createReducer } from '@reduxjs/toolkit';
import { fetchOrganization } from '../actions/organizationActions';

const initialState = {
  organization: [],
  isLoading: false,
  error: null,
};

const organizationReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchOrganization.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(fetchOrganization.fulfilled, (state, action) => {
      state.organization = action.payload.data;
      state.isLoading = false;
    })
    .addCase(fetchOrganization.rejected, (state, action) => {
      state.error = action.payload.error;
      state.isLoading = false;
    });
});


export const selectOrganization = (state) => state.organization;

export default organizationReducer;