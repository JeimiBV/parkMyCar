import "../styles/PagesStyles/generarReporte.css"
import DatePicker from "react-datepicker";
import { useState } from "react";
export default function () {
    const [dateEntrada, setDateEntrada] = useState(new Date());
    const [dateSalida, setDateSalida] = useState(new Date());
    const [data, setData] = useState([

        {

            "dia": "12/05/2022",
            "id": "1",
            "nombre": "Jeimi Alejandra",
            "apellido": "Barral Valverde",
            "UserName": "@JeimiBV"
        },

        {
            "dia": "14/05/2022",
            "id": "2",
            "nombre": "Edwin Ramiro",
            "apellido": "Garcia Chambilla",
            "UserName": "ramiro777"
        },

        {
            "dia": "12/05/2022",
            "id": "3",
            "nombre": "Ale",
            "apellido": "Alañes",
            "UserName": "@homie"
        },

        {
            "dia": "12/05/2022",
            "id": "4",
            "nombre": "Xaver",
            "apellido": "Montaño",
            "UserName": "@xavi"
        },

        {
            "dia": "12/05/2022",
            "id": "5",
            "nombre": "Jeimi ",
            "apellido": "Barral Valverde",
            "UserName": "@JeimiBV"
        },

    ]);
    return (
        <div className="containerReporte">
            <h1>Generar Reporte</h1>
            <div className="cardReporte p-5">
                <div className="row w-100 me-0 ms-0">
                    <div className="col row d-flex justify-content-center">
                        <label className="col">Fecha inicial</label>
                        <div className="col">
                            <DatePicker
                                selected={dateEntrada}
                                onChange={(date) => {
                                    setDateEntrada(date);
                                }}
                                showTimeSelect
                                timeFormat="HH:mm"
                                timeIntervals={60}
                                timeCaption="Hora"
                                dateFormat="Pp"
                                locale="vi"
                                className="bg-date h-100"
                            />
                        </div>
                    </div>

                    <div className="col row d-flex justify-content-center">
                        <label className="col">Fecha final</label>
                        <div className="col">
                            <DatePicker
                                selected={dateSalida}
                                onChange={(date) => {
                                    setDateSalida(date);
                                }}
                                showTimeSelect
                                timeFormat="HH:mm"
                                timeIntervals={60}
                                timeCaption="Hora"
                                dateFormat="Pp"
                                locale="vi"
                                className="bg-date h-100"
                            />
                        </div>
                    </div>

                    <div className="col d-flex justify-content-center row">
                        <button type="button" class="btn botonReporte w-50">
                            <i class="fa-solid fa-magnifying-glass me-2"></i>
                            Buscar
                        </button>
                    </div>
                </div>
                <div className="p-2 cardTable mt-5">
                    <label className="mb-4 fs-3 d-flex justify-content-center">Reporte abril 2023</label>
                    <table class="table table-striped table-hover w-100 table-light">
                        <caption className="text-light">Reporte de la fecha xxx hasta la fecha xxx</caption>
                        <thead className="table-dark">
                            <tr>
                                <th>#</th>
                                <th>fecha</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Username</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map((dato) => (
                                    <tr>
                                        <th scope="row">{dato.id}</th>
                                        <td>{dato.dia}</td>
                                        <td>{dato.nombre}</td>
                                        <td>{dato.apellido}</td>
                                        <td>{dato.UserName}</td>
                                    </tr>

                                ))
                            }
                            <tr>
                                <th scope="row">Total</th>
                                <td colspan="4">000</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="me-0 ms-0 mt-4 d-flex justify-content-end">
                    <button type="button" class="btn botonReporte w-25">
                    <i class="fa-solid fa-download me-2"></i>
                        Descargar
                    </button>
                </div>

            </div>
        </div>
    );
}