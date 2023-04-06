import "../styles/Bloques.css"
import { useState } from "react"
import Plaza from "./Plaza"
import Axios from "axios";

const peticion = Axios({
    method: 'GET',
    url: 'http://testingapi12023-001-site1.atempurl.com/places',
}).then(response => {
    if (!response.data.error) {
        console.log(response.data)
        setPlazas(response.data)
    } else {
        console.log(response.data.error[0]);
    }
})
    .catch(error => {
        console.log(error);
    });

export default function Bloque() {
    const [plazas, setPlazas] = useState([])
    
    

    const cambiarEstado = (id) => {

    }

    return (<div className=" row  m-2  bloqueEstilo rounded">
        {
            plazas.map(plaza => <Plaza
                datos={plaza}
                cambiar={cambiarEstado()}
            />)
        }

    </div>)

}