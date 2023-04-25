import { createSlice } from "@reduxjs/toolkit";

const initialState = [] 
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
         state.splice(state.indexOf(0),1)
         state.push(action.payload);
      }
   }
})

export const {addTask} = taskSlice.actions;
export default taskSlice.reducer;