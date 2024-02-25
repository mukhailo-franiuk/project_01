import { createSlice } from "@reduxjs/toolkit";

export const checkUsers = createSlice({
    name: "users",
    initialState: {
        users: {}
    },
    reducers: {
        getingUsers : (state, data) => {
            state.users = data.payload;
        }
    },
})
export const { getingUsers } = checkUsers.actions;
export const getUsers = state => state.users.users;
export default checkUsers.reducer;