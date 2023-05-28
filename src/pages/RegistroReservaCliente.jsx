//import { MuiPickersUtilsProvider } from "@material-ui/pickers"
//import DateFnsUtils from "@date-io/date-fns"
//import { DateTimePicker, DatePicker } from "@material-ui/pickers"
import Modal from "../components/Modal";
//import esLocale from "date-fns/locale/es"
import Card from "../components/Card";
import "../styles/PagesStyles/RegistroReserva.css";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import QRCode from "react-qr-code";
import { useSelector } from "react-redux";
import { espaciosVacios, validarInput } from "../functions/validaciones";
import { postPeticion } from "../functions/useFetch";
import { useNavigate } from "react-router-dom";
import moment from "moment";

//import 'moment/locale/en-gb'

export default function RegistroReserva() {
    const usuario = useSelector((state) => state.users).userState;
    const selector = useSelector((state) => state.tasks);
    console.log(selector, "aaaaaaaaaaaaaaaaaaaa")
    const [dateEntrada, setDateEntrada] = useState(moment(`${selector.entryDate} ${selector.entryTime}`).toDate());
    const [dateSalida, setDateSalida] = useState(moment(`${selector.entryDate} ${selector.retirementTime}`).toDate());
    const [modalQR, setModalQR] = useState(false);
    const [fechaEntrada, setFechaEntrada] = useState("");
    const [fechaSalida, setFechaSalida] = useState("");
    const [tarifa, setTarifa] = useState(0);
    const navigate = useNavigate();
    const [datosForm, setDatosForm] = useState({
        name: usuario.nombre,
        phone: usuario.telefono,
        nit: usuario.nit,

    });
    const handleChange = (e) => {
        setDatosForm({ ...datosForm, [e.target.name]: e.target.value });
    };

    const handlePost = async (e) => {
        e.preventDefault();
        await postPeticion(
            "http://testingapi12023-001-site1.atempurl.com/reserves",
            datosForm
        );
        navigate("/parqueo");
        console.log(datosForm, dateEntrada.toString(), dateSalida.toISOString(), "datos para enviar")
    };

    const modificarDate = (currentDate) => {
        return `${currentDate.getFullYear()}-${(currentDate.getMonth() + 1).toString().padStart(2, '0')}-${currentDate.getDate().toString().padStart(2, '0')}T${currentDate.getHours().toString().padStart(2, '0')}:${currentDate.getMinutes().toString().padStart(2, '0')}:${currentDate.getSeconds().toString().padStart(2, '0')}.${currentDate.getMilliseconds().toString().padStart(3, '0')}Z`
    }

    useEffect(() => {

        formatearFecha(dateEntrada, true);
        formatearFecha(dateSalida, false);
        calcularTarifa(5);
        setDatosForm({
            ...datosForm,
            entryDate: modificarDate(dateEntrada),
            retirementDate: modificarDate(dateSalida),
            placeId: selector.id,
            guardId: usuario.guardId,
            price: tarifa
        });
    }, [dateEntrada, dateSalida]);

    const formatearFecha = (date, tipo) => {
        const dias = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
        let dia = dias[date.getDay()];
        let fecha = dia + " " + date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
        if ((date.getMonth() + 1) < 10) {
            fecha = dia + " " + date.getDate() + "/0" + (date.getMonth() + 1) + "/" + date.getFullYear();
        }
        if (date.getDate() < 10) {
            fecha = dia + " 0" + date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
        }
        if (tipo == true) {
            setFechaEntrada(fecha);
        } else {
            setFechaSalida(fecha);
        }

    }
    const calcularTarifa = (precio) => {
        let hours = Math.abs(dateEntrada.getHours() - dateSalida.getHours());
        let minutes = Math.abs(dateEntrada.getMinutes() - dateSalida.getMinutes());
        setTarifa((hours + minutes / 60) * precio);
    };
    return (
        <div className="overflow-y-scroll containerReserva">
            <div className="row w-100 position-relative">
                <h1 className="text-center text-light my-4 ">Reserva</h1>
                <div className="mx-3 my-0 my-md-3 col-md-8 col-12">
                    <Card titulo={"Tiempo de reserva"}>
                        <div className="row">
                            <div className="my-md-2 my-0 col">
                                <i class="fa-solid fa-car me-2"></i>
                                <i class="fa-solid fa-arrow-right"> </i>
                            </div>
                            <div className="col my-md-2 my-0">
                                <p>Parqueo desde</p>
                            </div>
                            <div className="col my-md-2 my-0">

                                {fechaEntrada} : {selector.entryTime}

                            </div>
                        </div>
                        <div className="row">
                            <div className="my-md-2 my-0 col">
                                <i class="fa-solid fa-car me-2"></i>
                                <i class="fa-solid fa-arrow-left"></i>
                            </div>
                            <div className="col my-md-2 my-0">
                                <p>Parqueo hasta</p>
                            </div>
                            <div className="col my-md-2 my-0">

                                {fechaSalida} : {selector.retirementTime}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col my-md-2 my-0 ">
                                <i class="fa-regular fa-clock"></i>
                            </div>
                            <div className="col my-md-2 my-0">
                                <p>Duración</p>
                            </div>
                            <div className="col my-md-2 my-0">
                                <p>
                                    {parseInt(selector.retirementTime) - parseInt(selector.entryTime)}{" "}
                                    Horas
                                </p>
                            </div>
                        </div>
                    </Card>
                    <Card titulo={"Información del vehículo"}>
                        <form id="myform" className="row d-flex align-items-center" onSubmit={(e) => handlePost(e)}>
                            <label htmlFor="" className="col-6 col-md-3">
                                Placa del vehiculo
                            </label>
                            <input type="text" name="plate" className="col-6 col-md-9" onChange={handleChange}
                                required
                                pattern="[a-zA-Z0-9]{6}"
                                placeholder="Debe ingresar 6 caracteres"
                            />
                        </form>
                    </Card>
                </div>
                <div className="ms-3 ms-md-0 col-md-3 mt-0 mt-md-3 col-12">
                    <Card titulo={"Detalle de la tarifa"} vertical={true}>
                        <div className="col h-100">
                            <div className="row m-0 h-50">
                                <div className="col">
                                    <p className="fs-6">Tarifa:</p>
                                    <p className="fs-6 ">Nro de plaza:</p>
                                </div>
                                <div className="col">
                                    <p className=" fs-6">{tarifa}</p>
                                    <p className=" fs-6">{selector.plaza}</p>
                                </div>
                            </div>
                            <div className="row m-0 h-50">
                                <button
                                    className="btn btn-primary mb-2 d-flex justify-content-center align-items-center"
                                    onClick={() => {
                                        setModalQR(true);
                                    }}
                                >
                                    Generar QR
                                </button>
                                <button
                                    className="btn btn-primary mb-2 d-flex justify-content-center align-items-center"
                                    form="myform"
                                    type="submit"
                                >
                                    Reservar
                                </button>
                                <button
                                    className="btn btn-primary mb-2 d-flex justify-content-center align-items-center"
                                    onClick={() => {
                                        navigate("/parqueo");
                                    }}
                                >
                                    Cancelar
                                </button>
                            </div>
                        </div>
                    </Card>
                </div>
                <Modal titulo={"Código QR"} mostrar={modalQR}>
                    <div className="row">
                        <QRCode value="www.google.com" size={150} />
                        <div className="row d-flex justify-content-center mt-1 ">
                            <button
                                className="btn btn-primary w-25 my-5 me-2"
                                onClick={() => {
                                    setModalQR(false);
                                }}
                            >
                                Aceptar
                            </button>
                            <button
                                className="btn btn-primary w-25 my-5 ms-2"
                                onClick={() => {
                                    setModalQR(false);
                                }}
                            >
                                Cancelar
                            </button>
                        </div>
                    </div>
                </Modal>

            </div>
        </div>
    );
}
