import "../styles/Bloques.css"
import { useState } from "react"
import Plaza from "./Plaza"
import Axios from "axios";


export default function Bloque({espacios}) {
    const [plazas, setPlazas] = useState(espacios)
    
    const cambiarEstado = (id) => {

    }

    return (<div className=" row  m-2  bloqueEstilo rounded">
        {
            plazas.map(plaza => <Plaza
                datos={plaza.id}
                cambiar={cambiarEstado()}
            />)
        }

    </div>)

}