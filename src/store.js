import { configureStore } from "@reduxjs/toolkit"
import taskReducer from "./tasks/taskSlice"
import userReducer from "./users/userSlice"
import storage from "redux-persist/lib/storage"
import {persistReducer} from "redux-persist"
import {combineReducers} from "@reduxjs/toolkit"
import thunk from "redux-thunk"

const persistConfig={
    key:"root",
    storage,
    whitelist:["userState"]
}
const rootReducer = combineReducers({
    userState:userReducer
})
const persistedReducer=persistReducer(persistConfig, rootReducer)


export const store = configureStore({


    reducer: {
        tasks: taskReducer,
        users:persistedReducer,
        middleware:[thunk]

    }
})
