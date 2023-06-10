import { createSlice } from "@reduxjs/toolkit";

const initialState={
    nombre:"",
    rol:"",
    telefono:"",
    nit:"",
    estado:false,
    guardId:null,
    vehicles:[
        {plate:"asdffg"},
        {plate:"asddfff"}
    ]

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
            state.nombre=action.payload.name    
            state.rol=action.payload.role
            state.estado=action.payload.iss
            state.guardId=action.payload.id
            state.telefono=action.payload.phone
            state.nit=action.payload.nit
            state.vehicles=[{plate:"asdffg"},
                            {plate:"asddfff"}]
        },
        cerrarSesion:(state,action)=>{
            state.nombre=""
            state.rol=""
            state.nit=""
            state.telefono=""
            state.estado=false
            state.guardId=null
        }

    }
})

export const {addUser, cerrarSesion, iniciarSesion}= userSlice.actions;
export default userSlice.reducer;