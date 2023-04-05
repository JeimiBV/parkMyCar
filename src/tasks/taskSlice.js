import { createSlice } from "@reduxjs/toolkit";

const initialState = [
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
   }
]
export const taskSlice = createSlice({
   name: "tarea",
   initialState: initialState,
   reducers: {

   }
})

export default taskSlice.reducer