import { createAsyncThunk } from '@reduxjs/toolkit'

export const checkTerms = createAsyncThunk(
  'termsAndConditions/checkTerms',
  () => {
    return {
      agree: true
    }
  }
)