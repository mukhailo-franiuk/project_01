import { createSlice } from "@reduxjs/toolkit";

export const checkUsers = createSlice({
    name: "users",
    initialState: {
        admin:{},
        users: {}
    },
    reducers: {
        getingUsers : (state, data) => {
            state.users = data.payload;
           
        },
        getingAdmin : (state , data) => {
            state.admin = data.payload;
        }
    },
})
export const { getingUsers , getingAdmin } = checkUsers.actions;
export const getUsers = state => state.users.users;
export const getAdmin = state => state.users.admin;
export default checkUsers.reducer;