import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    user: null,
}

const userSlice = createSlice({
    name : "User Slice",
    initialState,
    reducers: {}
}) 

const userReducer = userSlice.reducer
export default userReducer;