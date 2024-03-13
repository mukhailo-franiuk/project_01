import { createSlice } from "@reduxjs/toolkit";

export const Categories = createSlice({
    name : "category",
    initialState : {
        categories : {},
        patch : ''
    },
    reducers : {
        category : ( state , data ) => {
            state.categories = data.payload;
        }
    }
});

export const { category } = Categories.actions;
export const getCategories = state => state.category.categories;
export default Categories.reducer;