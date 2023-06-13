import "../styles/Factura.css"
export default function Factura() {
    return (
        <div className="containerFactura overflow-y-scroll d-flex flex-column justify-content-center align-items-center">
            <img src="Factura.png" className="factura mt-3" ></img>
            <a href="Factura.png"  className="w-100 text-center" download>
                <button className="btn btn-block mt-2 download">Descargar factura</button>
            </a>
        </div>
    );
}