import "../styles/Table.css"
import { useState } from "react"
import { useSelector } from "react-redux";

export default function Table({ datos }) {
    const [reservado, setReservado] = useState([datos])
    const selector = useSelector((state) => state.tasks);
    var idSeleccionado = selector[0];
    var id = true
    return (
        <div className="ms-5 ps-5 mb-5">
            <section className="fs-4 fecha p-3 rounded-4 text-center mb-4 text-light">
                {datos.date.slice(0, 10)}
            </section>
            <div>
                <section className="tablaContenedor w-75 rounded-4">
                    <div className=" row p-3 border-bottom border-dark">
                        <h4 className="col text-center"> Hora </h4>
                        <h4 className="col text-center"> Nombre </h4>
                        <h4 className="col text-center"> Placa </h4>
                    </div>

                    {
                        datos.reserves?.map(dato =>
                            dato.placeId == idSeleccionado.datos ? (
                                <div className="row p-3">
                                    <p className="col text-center">{dato.entryDate.slice(12, 16) + " - " + dato.retirementDate.slice(12, 16)}</p>
                                    <p className="col text-center">{dato.client.name}</p>
                                    <p className="col text-center">{dato.client.vehicle.plate}</p>
                                </div>
                            ) : null
                        )
                    }
                </section>
            </div>
        </div>)
}