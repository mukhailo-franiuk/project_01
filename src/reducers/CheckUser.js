import { createSlice } from "@reduxjs/toolkit";

export const checkUsers = createSlice({
    name: "users",
    initialState: {
        users: "aaa"
    },
    reducers: {
        increment : (state, data) => {
            state.users = data.payload;
            console.log(state.users);
        }
    },
})
export const { increment } = checkUsers.actions;
export const getUsers = state => state.users.users;
export default checkUsers.reducer;