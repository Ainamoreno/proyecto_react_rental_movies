import { createSlice } from '@reduxjs/toolkit';

export const rentalSlice = createSlice({
  name: 'rental',
  initialState: {
    detailsMovie: {},
    detailsRental: {}
  },
  reducers: {
    addRental: (state, action) => {
      return {
        ...state,
        ...action.payload
      }
    },
  }

});

export const { addRental } = rentalSlice.actions;

export const rentalData = (state) => state.rental;

export default rentalSlice.reducer;