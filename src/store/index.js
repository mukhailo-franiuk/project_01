import { configureStore } from "@reduxjs/toolkit";
import checkUsers  from "../reducers/CheckUser";


export default configureStore({
    reducer : {
       users : checkUsers 
    }
})