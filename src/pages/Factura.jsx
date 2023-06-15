import { useState } from "react";
import "../styles/Factura.css"
export default function Factura() {
    const [pay, setPay] = useState(false)
    return (
        <div className="containerFactura overflow-y-scroll d-flex flex-column justify-content-center align-items-center">
            {!pay ? <>
                <img src="valid.png" className="valid mt-3 mb-4" ></img>
                <button className="btn btn-success mt-2 download" onClick={() => {setPay(true)}}>Confirmar pago</button>
            </> : <>
                <img src="Factura.png" className="factura mt-3" ></img>
                <a href="Factura.png" className="w-100 text-center" download>
                    <button className="btn btn-block mt-2 download">Descargar factura</button>
                </a>
            </>}
        </div>
    );
}

