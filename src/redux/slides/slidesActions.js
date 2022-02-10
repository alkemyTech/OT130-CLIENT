import { createAsyncThunk } from "@reduxjs/toolkit";

import { getSlides as fetchSlides } from "../../Services/slidesService";

import {
  getSlidesRequest,
  getSlidesSuccess,
  getSlidesFailure,
} from "./slidesSlice";

const getSlides = createAsyncThunk("slides/getSlides", async (_, thunkAPI) => {
  thunkAPI.dispatch(getSlidesRequest());
  const { data: slides, error } = await fetchSlides();
  if (error) {
    return thunkAPI.dispatch(getSlidesFailure(error));
  }
  thunkAPI.dispatch(getSlidesSuccess(slides));
});

export { getSlides };

