import { createSlice } from "@reduxjs/toolkit";


export const Products = createSlice({
    name : "products",
    initialState : {
        allProducts : {}
    },
    reducers : {
        products : ( state , data ) => {
            state.allProducts = data.payload;
        }
    }
});

export const { products } = Products.actions;
export const getAllProducts = state => state.products.allProducts;
export default Products.reducer;