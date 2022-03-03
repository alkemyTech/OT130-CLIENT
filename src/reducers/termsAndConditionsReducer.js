import { createReducer } from '@reduxjs/toolkit';
import { checkTerms } from '../actions/termsAndConditionsActions';

const initialState = {
    agree: null
};

const termsAndConditionsReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(checkTerms.fulfilled, (state,action) => {
        state.agree = !!action.payload;
    })
});

export const selectTerms = (state) => state;

export default termsAndConditionsReducer;