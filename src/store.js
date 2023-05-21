import { configureStore } from "@reduxjs/toolkit";
import { productReducer, productApi } from './features';

const store = configureStore({
    reducer: {
        products : productReducer,
      [productApi.reducerPath] : productApi.reducer
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(productApi.middleware);
    }
})

export default store
