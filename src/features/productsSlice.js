import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

const initialState = {
    items : [],
    status: null
}
export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
    const result = await axios.get('http://localhost:8080/products')
    return result.data
})



const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.pending, (state, action) => {
            state.status = null;
            state.items = []
        }).addCase(fetchProducts.fulfilled, (state, action) => {
            state.status = null
            state.items = action.payload;
        }).addCase(fetchProducts.rejected, (state, action) => {
            state.status = null;
            state.items = []
        })
    }
 
});
 
const productReducer = productsSlice.reducer;
export default productReducer;














