import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   plaza:"",
   id:""
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
      }
      
   }
})
export const {addTask} = taskSlice.actions;
export default taskSlice.reducer;