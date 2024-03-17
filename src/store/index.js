import { configureStore } from "@reduxjs/toolkit";
import checkUsers  from "./CheckUser";
import AllDiscount  from "./AllDiscount";
import  Categories  from "./AllCategories";
import  Products  from "./AllProducts";
import LinksSlice from "./LinksSlice";

export default configureStore({
    reducer : {
       users : checkUsers,
       discounts : AllDiscount,
       category : Categories,
       products: Products,
       links : LinksSlice
    }
})