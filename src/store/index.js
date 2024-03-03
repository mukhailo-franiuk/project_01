import { configureStore } from "@reduxjs/toolkit";
import checkUsers  from "./CheckUser";
import AllDiscount  from "./AllDiscount";


export default configureStore({
    reducer : {
       users : checkUsers,
       discounts : AllDiscount
    }
})