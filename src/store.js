import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./tasks/taskSlice";
import userReducer from "./users/userSlice";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist"
import thunk from "redux-thunk";

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['user']
}

const rootReducer = combineReducers({
    userState: userReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: {
        tasks: taskReducer,
    },
    reducer: persistedReducer,
    middleware: [thunk]
})
/*
export const user= configureStore({
    reducer: {
        users:userReducer,
    }
})
*/