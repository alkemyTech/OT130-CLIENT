import { createAsyncThunk } from "@reduxjs/toolkit";

import { getSlides as fetchSlides } from "../Services/slidesService";

import {
  getSlidesRequest,
  getSlidesSuccess,
  getSlidesFailure,
} from "../reducers/slidesSlice";

const getSlides = createAsyncThunk("slides/getSlides", async (arg, { dispatch }) => {
  dispatch(getSlidesRequest());
  const { data: slides, error } = await fetchSlides();
  if (error) {
    return dispatch(getSlidesFailure(error));
  }
  dispatch(getSlidesSuccess(slides));
});

export { getSlides };

