import { createReducer } from '@reduxjs/toolkit';

const initialState = {
    acept: false
};

const termsAndConditionsReducer = createReducer(initialState, (builder) => {
  builder
    .addCase('checkTerms', (state,action) => {
        state.acept = action.payload;
    })
});

export const selectTerms = (state) => state;

export default termsAndConditionsReducer;