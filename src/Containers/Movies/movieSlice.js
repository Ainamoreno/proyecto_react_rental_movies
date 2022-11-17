import { createSlice } from '@reduxjs/toolkit';

export const movieSlice = createSlice({
  name: 'movie',
  initialState: {
    details: {},
    search: []
  },
  reducers: {
    addMovie: (state, action) => {
      return {
        ...state,
        ...action.payload
      }
    },
    addSearch: (state, action) => {
      return {
        ...state,
        ...action.payload
      }
    },
  }

});

export const { addMovie, addSearch } = movieSlice.actions;

export const movieData = (state) => state.movie;

export default movieSlice.reducer;