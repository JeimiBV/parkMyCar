import "../styles/Bloques.css"
import { useState } from "react"
import Plaza from "./Plaza"
export default function Bloque(){
    const [plazas, getPlazas]=useState([
        {estado:false, id:1},
        {estado:false, id:2},
        {estado:false, id:3},
        {estado:false, id:4},
        {estado:false, id:5},
        {estado:false, id:6},
        {estado:false, id:7},
        {estado:false, id:8},
        {estado:false, id:9},
        {estado:false, id:10},
        {estado:false, id:11},
        {estado:false, id:12},
    ])

    const cambiarEstado=(id)=>{
      
    }
    return(<div className=" row  m-2  bloqueEstilo rounded">
    {
        plazas.map( plaza=><Plaza
             datos={plaza}
             cambiar={cambiarEstado()}
        /> )
    }

    </div>)

}