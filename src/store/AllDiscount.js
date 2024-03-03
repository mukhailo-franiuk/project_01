import { createSlice } from "@reduxjs/toolkit";
import { getDatabase , ref , set } from 'firebase/database';
import { app } from '../options/environment/env';

export const AllDiscounts = createSlice({
    name : 'discount',
    initialState : {
        discounts : {},
        discountsBack : {},
        id : 0
    },
    reducers : {
        getObjDiscount : (state , obj) => {
            state.discounts = obj.payload;
            console.log(state.discounts.id);
            const db = getDatabase(app);
            set(ref(db, 'discounts/' + state.discounts.id), {
                title : state.discounts.title,
                description : state.discounts.description,
                imagePatch : state.discounts.imagePatch
            });
        },
        getAllDiscounts : (state , data) => {

        }
    }
})
export const { getObjDiscount } = AllDiscounts.actions;
export const getAllDiscount = state => state.discounts.discount; 
export default AllDiscounts.reducer; 