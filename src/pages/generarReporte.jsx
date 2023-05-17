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
            <div className="cardReporte ms-5 w-100">
                <div className="row">
                    <div className="col bg-primary row">
                        <label className="col">Fecha inicial</label>
                        <div className="col date">
                            <DatePicker
                                selected={dateEntrada}
                                onChange={(date) => {
                                    setDateEntrada(date);
                                }}
                                showTimeSelect
                                timeFormat="HH:mm"
                                timeIntervals={60}
                                timeCaption="Hora"
                                dateFormat="HH:mm"
                                locale="vi"
                            />
                        </div>
                    </div>

                    <div className="col bg-primary row">
                        <label className="col">Fecha final</label>
                        <div className="col date">
                            <DatePicker
                                selected={dateSalida}
                                onChange={(date) => {
                                    setDateSalida(date);
                                }}
                                showTimeSelect
                                timeFormat="HH:mm"
                                timeIntervals={60}
                                timeCaption="Hora"
                                dateFormat="HH:mm"
                                locale="vi"
                            />
                        </div>
                    </div>

                    <div className="col ms-3 ">
                        <i class="fa-solid fa-magnifying-glass me-2"></i>
                        <button className="me-2 botonSearch"> Buscar </button>
                    </div>
                </div>
                <table class="table table-striped table-hover w-100 mt-2">
                    <caption>Reporte de la fecha xxx hasta la fecha xxx</caption>
                    <thead className="table-dark">
                        <tr class="">
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

                    </tbody>
                </table>
            </div>
        </div>
    );
}