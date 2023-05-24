import "../styles/Table.css"
import { useState } from "react"


export default function Table({ datos }) {
    const [reservado, setReservado] = useState([datos])
    return (
        <div className="ms-md-5 ps-md-5 mb-5">
            <section className="fs-4 fecha p-3 rounded-4 text-center mb-4 text-light">
                {datos.date.slice(0, 10)}
            </section>
            <div>
                <section className="tablaContenedor w-75 ms-md-5 rounded-4 ms-4 ms-md-0">
                    <div className=" row p-3 border-bottom border-dark">
                        <h4 className="col text-center"> Hora </h4>
                        <h4 className="col text-center"> Nombre </h4>
                        <h4 className="col text-center"> Placa </h4>
                    </div>

                    {
                       datos.reserves?.map(dato =>
                            <div className="row p-3">
                                <p className="col text-center">{dato.entryDate.slice(11,16)+" - "+ dato.retirementDate.slice(11,16)}</p>
                                <p className="col text-center">{dato.name}</p>
                                <p className="col text-center">{dato.plate}</p>
                            </div>
                        )
                    }
                </section>
            </div>
        </div>)
}