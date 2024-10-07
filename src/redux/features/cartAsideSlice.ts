import { createSlice } from "@reduxjs/toolkit";

export const cartAsideSlice = createSlice({
    name: "cartAside",
    initialState: {
        isOpen: false
    },
    reducers: {
        openAside: (state) => {
            state.isOpen = true;
        },
        closeAside: (state) => {
            state.isOpen = false;
        }
    }
})

export const { openAside, closeAside } = cartAsideSlice.actions;

export default cartAsideSlice.reducer;