import { createAsyncThunk } from '@reduxjs/toolkit'

export const checkTerms = createAsyncThunk(
  'termsAndConditions/checkTerms',
  (value) => {
    return {
      agree: value,
    }
  }
)