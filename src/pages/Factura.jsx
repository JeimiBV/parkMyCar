import { useState } from "react";
import "../styles/Factura.css"
import { patchVerificacion } from "../functions/useFetch";
export default function Factura() {
    const [pay, setPay] = useState(false)

    const cambiarEstado=()=>{
        patchVerificacion();
        setPay(true);
    }

    return (
        <div className="containerFactura overflow-y-scroll d-flex flex-column justify-content-center align-items-center">
            {!pay ? 
            <>
                <img src="warning.png" className="valid mt-3 mb-4" ></img>
                <button className="btn btn-warning mt-2 download" onClick={() => { cambiarEstado() }}>Confirmar pago</button>
            </> : <>
                <img src="valid.png" className="valid mt-3 mb-4" ></img>
                <h1 >Pago confirmado</h1>
            </>}
        </div>
    );
}

