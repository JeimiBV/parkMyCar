import {configureStore} from "@reduxjs/toolkit"
import  taskReducer  from "./tasks/taskSlice"
 const store= configureStore({

reducer:{
    tasks:taskReducer,
}
})
export default store