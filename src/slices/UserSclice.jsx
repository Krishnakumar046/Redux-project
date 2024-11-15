import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    users: [],
};

export const UserSclice = createSlice({

    name: "users",
    initialState,
    reducers: {
        addUsers: (state, action) => {
            state.users = [...state.users, action.payload]
        },
        deleteUsers: (state, action) => {
            state.users.splice(action.payload, 1);
        }
    }
})
export const { addUsers, deleteUsers } = UserSclice.actions;

export default UserSclice.reducer;