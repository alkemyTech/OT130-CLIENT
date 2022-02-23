import { createReducer } from '@reduxjs/toolkit';

const initialState = {
    acept: null
};

const termsAndConditionsReducer = createReducer(initialState, (builder) => {
  builder
    .addCase('termsAndConditions/checkTerms', (state,action) => {
        state.acept = null;
        if(action.payload){
            state.acept = true;
        }else{
            state.acept = false;
        }
    })
});

export const selectTerms = (state) => state;

export default termsAndConditionsReducer;