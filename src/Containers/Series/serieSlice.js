import { createSlice } from "@reduxjs/toolkit";

export const serieSlice = createSlice({
    name: 'serie',
    initialState: {
        details: {},
        search: []
    },
    reducers: {
        addserie: (state, action) => {
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

export const { addserie, addSearch } = serieSlice.actions;
export const serieData = (state) => state.serie;
export default serieSlice.reducer;