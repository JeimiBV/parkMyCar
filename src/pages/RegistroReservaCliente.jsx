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

//import 'moment/locale/en-gb'

export default function RegistroReserva() {
    const usuario = useSelector((state) => state.users).userState;
    const selector = useSelector((state) => state.tasks);
    console.log(selector, "aaaaaaaaaaaaaaaaaaaa")
    const [dateEntrada, setDateEntrada] = useState(new Date());
    const [dateSalida, setDateSalida] = useState(new Date());
    const [modal, setModal] = useState(false);
    const [modalQR, setModalQR] = useState(false);
    const [fechaEntrada, setFechaEntrada] = useState("");
    const [fechaSalida, setFechaSalida] = useState("");
    const [tarifa, setTarifa] = useState(0);
    const navigate = useNavigate();
    const [datosForm, setDatosForm] = useState({
        name:usuario.nombre,
        phone:usuario.telefono,
        nit:usuario.nit,

    });
    const handleChange = (e) => {
        setDatosForm({  ...datosForm, [e.target.name]: e.target.value });
       // console.log(datosForm, 'esteeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee')
        
    };

    const handlePost = async (e) => {
        e.preventDefault();
        await postPeticion(
            "http://testingapi12023-001-site1.atempurl.com/reserves",
            datosForm
        );
        navigate("/parqueo");
        //console.log(datosForm, dateEntrada.toString(), dateSalida.toISOString(), "datos para enviar")
    };

    useEffect(() => {
        formatearFecha(dateEntrada, true);
        formatearFecha(dateSalida, false);
        calcularTarifa(5);
        setDatosForm({
            ...datosForm,
            entryDate: dateEntrada,
            retirementDate: dateSalida,
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

    let handleColor = (time) => {
        return time.getHours() > 12 ? "text-success" : "text-error";
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
                                <a
                                    className="cursor"
                                    onClick={() => {
                                        setModal(true);
                                    }}
                                >
                                    {fechaEntrada}
                                </a>
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
                                <a
                                    className="cursor"
                                    onClick={() => {
                                        setModal(true);
                                    }}
                                >
                                    {fechaSalida}
                                </a>
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
                                    {Math.abs(dateSalida.getHours() - dateEntrada.getHours())}{" "}
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
                              <input type="text"  name="plate" className="col-6 col-md-9" onChange={handleChange}
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
                <Modal titulo={"Edite la fecha o tiempo"} mostrar={modal}>
                    <div className="row">
                        <div className="col-6 text-center">
                            <h5>Parqueo desde:</h5>
                            <label className="bg-light rounded-3 p-2">
                                <DatePicker
                                    showTimeSelect
                                    selected={dateEntrada}
                                    minDate={(new Date)}
                                    dateFormat="Pp"
                                    onChange={(date) => setDateEntrada(date)}
                                    timeClassName={handleColor}
                                />
                            </label>
                        </div>
                        <div className=" col-6 text-center">
                            <h5>Parqueo hasta:</h5>
                            <label className="bg-light rounded-3 p-2 ">
                                <DatePicker
                                    showTimeSelect
                                    selected={dateSalida}
                                    minDate={dateEntrada}
                                    dateFormat="Pp"
                                    onChange={(date) => setDateSalida(date)}
                                    timeClassName={handleColor}
                                />
                            </label>
                        </div>
                        <div className="row d-flex justify-content-center mt-5 ">
                            <button
                                className="btn btn-primary w-25 my-5 me-2"
                                onClick={() => {
                                    setModal(false);
                                }}
                            >
                                Aceptar
                            </button>
                            <button
                                className="btn btn-primary w-25 my-5 ms-2"
                                onClick={() => {
                                    setModal(false);
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
