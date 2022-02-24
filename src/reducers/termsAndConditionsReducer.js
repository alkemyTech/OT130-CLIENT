import { createReducer } from '@reduxjs/toolkit';

const initialState = {
    agree: null
};

const termsAndConditionsReducer = createReducer(initialState, (builder) => {
  builder
    .addCase('termsAndConditions/checkTerms', (state,action) => {
        state.agree = !!action.payload;
    })
});

export const selectTerms = (state) => state;

export default termsAndConditionsReducer;