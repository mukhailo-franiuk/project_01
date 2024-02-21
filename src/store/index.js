import { configureStore } from "@reduxjs/toolkit";
import checkUsers  from "./CheckUser";


export default configureStore({
    reducer : {
       users : checkUsers 
    }
})