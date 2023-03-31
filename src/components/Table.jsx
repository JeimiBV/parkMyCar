import "../styles/Table.css"
export default function Table({ datos }) {
    return (
        <div className="ms-5 ps-5">
            <section className="fs-4 fecha p-3 rounded-4 text-center mb-4">
                Fecha
            </section>
            <div>
                <section className="tablaContenedor w-75 rounded-4">
                    <div className=" row p-3 border-bottom border-dark">
                        <h4 className="col text-center"> Hora </h4>
                        <h4 className="col text-center"> Nombre </h4>
                        <h4 className="col text-center"> Placa </h4>
                    
                    </div>
                    {
                        datos.map(dato => (<div className="row p-3">
                            <p className="col text-center">{dato.hora}</p>
                            <p className="col text-center">{dato.nombre}</p>
                            <p className="col text-center">{dato.placa}</p>
                        </div>))
                    }
                </section>
            </div>
        </div>
    )
}