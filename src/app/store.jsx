import { configureStore } from "@reduxjs/toolkit"
import useReducer from "../slices/UserSclice"


const store = configureStore({
    reducer: {
        userInfo: useReducer,
    }
})

export default store;