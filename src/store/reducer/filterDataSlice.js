// filterDataSlice.js

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    propType: "",
    propLocation: "",
    minPrice: "",
    maxPrice: "",
    postedSince: "",
};

const filterDataSlice = createSlice({
    name: "filterData",
    initialState,
    reducers: {
        updateFilterData: (state, action) => {
            return {
                ...state,
                ...action.payload,
            };
        },
        clearFilterData: (state) => {
            return {
                propType: "",
                propLocation: "",
                minPrice: "",
                maxPrice: "",
                postedSince: "",
            };
        },
    },
});

export const { updateFilterData, clearFilterData } = filterDataSlice.actions;
export default filterDataSlice.reducer;
