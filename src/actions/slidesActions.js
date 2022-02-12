import { createAsyncThunk } from "@reduxjs/toolkit";

import {
  getSlides as getSlidesFromAPI,
  deleteSlide as deleteSlideFromAPI,
} from "../Services/slidesService";

import {
  ErrorAlert,
  SuccessAlert,
  showDeleteConfirmationAlert,
} from "../Components/Alert";

import {
  getSlidesRequest,
  getSlidesSuccess,
  getSlidesFailure,
  deleteSlideRequest,
  deleteSlideSuccess,
  deleteSlideFailure,
} from "../reducers/slidesSlice";

const getSlides = createAsyncThunk(
  "slides/getSlides",
  async (arg, { dispatch }) => {
    dispatch(getSlidesRequest());
    const { data, error } = await getSlidesFromAPI();
    if (error) {
      dispatch(getSlidesFailure(error));
      return ErrorAlert("Error", error.message);
    }
    const slides = data?.data;
    dispatch(getSlidesSuccess(slides));
  }
);

const deleteSlide = createAsyncThunk(
  "slides/deleteSlide",
  async (slideId, { dispatch, getState }) => {
    dispatch(deleteSlideRequest());
    const { isConfirmed } = await showDeleteConfirmationAlert(async () => {
      const { error } = await deleteSlideFromAPI(slideId);
      if (error) {
        dispatch(deleteSlideFailure(error));
        return ErrorAlert("Error", error.message);
      }
    });
    const { slides } = getState();
    if (isConfirmed && !slides.error) {
      dispatch(deleteSlideSuccess(slideId));
      SuccessAlert("Eliminado!", "El slide fue eliminado");
    }
  }
);

export { getSlides, deleteSlide };

