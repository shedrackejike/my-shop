import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"


export const productApi = createApi({
    reducerPath : "productsApi",
    baseQuery: fetchBaseQuery({baseUrl: process.env.REACT_APP_BASE_URL}),
    endpoints: (builder) => ({
        getAllProducts: builder.query({
            query : () => "products"
        })
    })
})


export const {useGetALLProductsQuery } = productApi



















// export const productsApi = createApi({
//     reducerPath: "productApi",
//     baseQuery: fetchBaseQuery({baseUrl: "http://localhost:8080"}),
//     endpoints: (builder) => ({
//         getAllProducts: builder.query({
//             query: () => "products",
//         })
//     })
// })