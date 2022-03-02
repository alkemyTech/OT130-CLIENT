import { createReducer } from '@reduxjs/toolkit';
import { saveNovedades, updateNovedades, getNovedades, getNovedadesByParams } from '../actions/novedadesActions';

const initialState = {
  news: [],
  isLoading: false,
  error: null,
};

export const newsReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(saveNovedades.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(saveNovedades.fulfilled, (state, action) => {
      state.news = action.payload.data;
      state.isLoading = false;
    })
    .addCase(saveNovedades.rejected, (state, action) => {
      state.error = action.payload.error;
      state.isLoading = false;
    })

    .addCase(updateNovedades.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(updateNovedades.fulfilled, (state, action) => {
      state.news = action.payload.data;
      state.isLoading = false;
    })
    .addCase(updateNovedades.rejected, (state, action) => {
      state.error = action.payload.error;
      state.isLoading = false;
    })

    .addCase(getNovedades.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(getNovedades.fulfilled, (state, action) => {
      state.news = action.payload.data;
      state.isLoading = false;
    })
    .addCase(getNovedades.rejected, (state, action) => {
      state.error = action.payload.error;
      state.isLoading = false;
    })

    .addCase(getNovedadesByParams.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(getNovedadesByParams.fulfilled, (state, action) => {
      state.news = action.payload.data;
      state.isLoading = false;
    })
    .addCase(getNovedadesByParams.rejected, (state, action) => {
      state.error = action.payload.error;
      state.isLoading = false;
    })
});

export const selectNews = (state) => state.news;

export default newsReducer;