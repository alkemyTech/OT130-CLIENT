import { createAsyncThunk } from '@reduxjs/toolkit'


export const checkTerms = createAsyncThunk(
    'checkTerms',
    () => {
      return {
        acept: true,
        cancel: false,
      }
    }
  )