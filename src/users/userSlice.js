import { createSlice } from "@reduxjs/toolkit";


const initialState={
    nombre:"Carlos Reyes ",
    rol:"seguridad",
    estado:true
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
            state.nombre=action.payload.nombre    
            state.apellido=action.payload.apellido
            state.rol=action.payload.rol
            state.estado=action.payload.estado
        },
        cerrarSesion:(state,action)=>{
            state.nombre=""
            state.apellido=""
            state.rol=""
            state.estado=false
        }

    }
})

export const {addUser, cerrarSesion, iniciarSesion}= userSlice.actions;
export default userSlice.reducer;