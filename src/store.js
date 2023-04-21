import { configureStore } from "@reduxjs/toolkit"
import taskReducer from "./tasks/taskSlice"
import userReducer from "./users/userSlice"

export const store = configureStore({
    reducer: {
        tasks: taskReducer,
        users:userReducer,

    }
})
/*
export const user= configureStore({
    reducer: {
        users:userReducer,
    }
})
*/