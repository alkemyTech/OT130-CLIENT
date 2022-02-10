import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  error: null,
  slides: [],
};

const slidesSlice = createSlice({
  name: "slides",
  initialState,
  reducers: {
    getSlidesRequest(state) {
      state.isLoading = true;
    },
    getSlidesSuccess(state, action) {
      state.isLoading = false;
      state.slides = action.payload;
    },
    getSlidesFailure(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { getSlidesRequest, getSlidesSuccess, getSlidesFailure } =
  slidesSlice.actions;
export default slidesSlice.reducer;