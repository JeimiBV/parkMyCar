import { createSlice } from "@reduxjs/toolkit";

const initialState={
    nombre:"",
    rol:"",
    estado:false,
    guardId:null

}

export const userSlice= createSlice({
    name: "user",
    initialState,
    reducers:{
        addUser:(state,action)=>{
            state.splice(state)
            state.push(action.payload)
        },
        iniciarSesion:(state, action)=>{
            state.nombre=action.payload.aud    
            state.rol=action.payload.role
            state.estado=action.payload.iss
            state.guardId=action.payload.id
        },
        cerrarSesion:(state,action)=>{
            state.nombre=""
            state.rol=""
            state.estado=false
            state.guardId=null
        }

    }
})

export const {addUser, cerrarSesion, iniciarSesion}= userSlice.actions;
export default userSlice.reducer;