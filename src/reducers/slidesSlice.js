import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  isDeleting: false,
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
    deleteSlideRequest(state) {
      state.isDeleting = true;
      state.error = null;
    },
    deleteSlideSuccess(state, action) {
      state.isDeleting = false;
      state.slides = state.slides.filter(
        (slide) => slide.id !== action.payload
      );
    },
    deleteSlideFailure(state, action) {
      state.isDeleting = false;
      state.error = action.payload;
    },
  },
});

export const {
  getSlidesRequest,
  getSlidesSuccess,
  getSlidesFailure,
  deleteSlideRequest,
  deleteSlideSuccess,
  deleteSlideFailure,
} = slidesSlice.actions;
export default slidesSlice.reducer;