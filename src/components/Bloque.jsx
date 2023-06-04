import "../styles/Bloques.css"
import Plaza from "./Plaza"
import { useState } from "react"


export default function Bloque({espacios}) {
    const [plazas, setPlazas] = useState(espacios);
    
    return (<div className="row m-1 bloqueEstilo rounded">
        {
            plazas.map(plaza => <Plaza
                datos={plaza}/>)
        }
    </div>)

}