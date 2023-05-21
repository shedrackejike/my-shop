import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart : []
}

const cartSlice = createSlice({
    name : "Cart",
    initialState,
    reducers: {},
}) 

const cartReducer = cartSlice.reducer
export default cartReducer