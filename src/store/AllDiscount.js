import { createSlice } from "@reduxjs/toolkit";

export const AllDiscounts = createSlice({
    name : 'discount',
    initialState : {
        discounts: {},
        link : '',
        count : 1
    },
    reducers : {
        discountsAll : ( state , data ) => {
            state.discounts = data.payload;
        },
        links : (state , linkImage) => {
            state.link = linkImage.payload;
        },
        counts : (state , number) => {
            state.count = number.payload;
        }
    }
})
export const { discountsAll , links ,counts} = AllDiscounts.actions;
export const getAllDiscounts = state => state.discounts.discounts; 
export const getLinkImage = state => state.discounts.link;
export const getCountNumber = state => state.discounts.count;
export default AllDiscounts.reducer; 