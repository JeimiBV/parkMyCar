import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   plaza:"",
   id:"", 
   entryDate:"",
   retirementDate:"",
   retirementTime:"",
   entryTime:""
}
/*[
   {
      id: "",
      entryDate: "",
      retirementDate: "",
      placeId: 0,
      client: {
         name: "",
         ci: "",
         phone: 0,
         vehicle: {
            plate: "",
            type: ""
         }
      }
   },
]*/
export const taskSlice = createSlice({
   name: "tarea",
   initialState,
   reducers: {
      addTask: (state, action) =>{
         state.plaza=action.payload.plaza    
         state.id=action.payload.id
         state.entryDate=action.payload.entryDate
         state.entryTime=action.payload.entryTime
         state.retirementTime=action.payload.retirementTime
      }
      
   }
})
export const {addTask} = taskSlice.actions;
export default taskSlice.reducer;