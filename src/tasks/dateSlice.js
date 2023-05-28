import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    entryDate:"",
    retirementDate:"",
    retirementTime:"",
    entryTime:""
 }
 export const dateSlice=createSlice({
    name:"date",
    initialState,
    reducers:{
        addDate:(state, action) =>{
            state.entryDate=action.payload.entryDate
            state.entryTime=action.payload.entryTime
            state.retirementTime=action.payload.retirementTime
        }
    }
 })
 export const {addDate}=dateSlice.actions;
 export default dateSlice.reducer;