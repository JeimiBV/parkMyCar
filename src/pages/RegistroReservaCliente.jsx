import "../styles/PagesStyles/RegistroReserva.css";
import "react-datepicker/dist/react-datepicker.css";

import Modal from "../components/Modal";
import Card from "../components/Card";
import QRCode from "react-qr-code";
import moment from "moment";
import Spinner from "../components/Spinner"

import { toast } from 'react-toastify';
import { useSelector } from "react-redux";
import { uploadFile } from "../firebase/config";
import { postPeticion, postReporte, fetchVehicles } from "../functions/useFetch";
//import { fetchClients } from "../functions/fetchUsers";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";


export default function RegistroReserva() {
    const usuario = useSelector((state) => state.users).userState;
    const selector = useSelector((state) => state.tasks);
    const navigate = useNavigate();

    const [dateEntrada, setDateEntrada] = useState(moment(`${selector.entryDate} ${selector.entryTime}`).toDate());
    const [dateSalida, setDateSalida] = useState(moment(`${selector.entryDate} ${selector.retirementTime}`).toDate());
    const [modalQR, setModalQR] = useState(false);
    const [fechaEntrada, setFechaEntrada] = useState("");
    const [fechaSalida, setFechaSalida] = useState("");
    const [tarifa, setTarifa] = useState(0);
    const [factura, setFactura] = useState("");
    const [loading, setLoading] = useState(true);
    const [selectedOption, setSelectedOption] = useState()
    const [precio, setPrecio] = useState()
    const [guardia, setGuardia] = useState()
    const [vehicle, setVehicle] = useState();
    const [datosForm, setDatosForm] = useState({
        name: usuario.nombre,
        phone: usuario.telefono,
        nit: usuario.nit,
        entryDate: "",
        retirementDate: "",
        plate: "",
        placeId: null,
        guardId: null,
        price: 0,
        qrCode: ""
    });

    const handleNotification = () => {
        toast.success('La reserva se ha realizado exitosamente', { autoClose: 2000 });
    };

    const handlePost = async (e) => {
        e.preventDefault();
        setDatosForm({ ...datosForm, qrCode: factura })
        console.log(datosForm)
        await postPeticion(
            "http://parkmycar-001-site1.atempurl.com/reserves",
            datosForm
        );
        handleNotification();
        navigate("/parqueo");
    };

    const modificarDate = (currentDate) => {
        return `${currentDate.getFullYear()}-${(currentDate.getMonth() + 1).toString().padStart(2, '0')}-${currentDate.getDate().toString().padStart(2, '0')}T${currentDate.getHours().toString().padStart(2, '0')}:${currentDate.getMinutes().toString().padStart(2, '0')}:${currentDate.getSeconds().toString().padStart(2, '0')}.${currentDate.getMilliseconds().toString().padStart(3, '0')}Z`
    }

    const obtenerTarifa = async () => {
        let peticion = await postReporte("http://parkmycar-001-site1.atempurl.com/schedules/day", selector.entryDate)
        setPrecio(peticion.price);
        setGuardia(peticion.guardId);
    }

    const obtenerVehiculos = async () => {
        setVehicle((await fetchVehicles(usuario.guardId)));
    }

    const handleUpload = async (e) => {
        setLoading(false)
        await uploadFile(e.target.files[0]).then(
            (qrCode) => {
                setFactura(qrCode.toString());
            }
        );
    }

    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
        console.log(selectedOption)
    }

    useEffect(() => {
        obtenerTarifa();
        obtenerVehiculos();
    }, [])

    useEffect(() => {
        formatearFecha(dateEntrada, true);
        formatearFecha(dateSalida, false);
        calcularTarifa(precio);
        setDatosForm({
            ...datosForm,
            entryDate: modificarDate(dateEntrada),
            retirementDate: modificarDate(dateSalida),
            placeId: selector.id,
            guardId: guardia,
            price: tarifa,
            qrCode: factura,
            plate: selectedOption
        });

    }, [dateEntrada, dateSalida, factura, precio]);

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
        console.log(precio)
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

                                {selector.entryDate} : {selector.entryTime}

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

                                {selector.entryDate} : {selector.retirementTime}
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
                                Placa del vehículo
                            </label>
                            <select value={selectedOption} onChange={handleSelectChange}>
                                <option>Seleccione un vehículo</option>
                                {
                                    vehicle?.map((veh) =>
                                        <option key={veh.id} value={veh.plate} >{veh.plate}</option>
                                    )
                                }
                            </select>
                        </form>

                    </Card>
                </div>
                <div className="ms-3 ms-md-0 col-md-3 mt-0 mt-md-3 col-12">
                    <Card titulo={"Detalle de la tarifa"} vertical={true}>
                        <div className="col h-100">
                            <div className="row m-0 h-50">
                                <div className="col-7">
                                    <p className=" fs-6">Costo por hora:</p>
                                    <p className=" fs-6">Tarifa:</p>
                                    <p className="fs-6 ">Nro de plaza:</p>
                                </div>
                                <div className="col-5">
                                    <p className=" fs-6">{precio}</p>
                                    <p className=" fs-6">{tarifa}</p>
                                    <p className=" fs-6">{selector.plaza}</p>
                                </div>
                            </div>
                            <div className="row m-2 h-25">
                                {!factura ? <button
                                    className="btn btn-primary m-2 d-flex justify-content-center align-items-center"
                                    onClick={() => {
                                        setModalQR(true);
                                    }}
                                >
                                    Generar QR
                                </button> : ""}


                                <button
                                    className="btn btn-success m-2 d-flex justify-content-center align-items-center"
                                    form="myform"
                                    type="submit"
                                    disabled={!factura}
                                    
                                >
                                    Reservar
                                </button>
                                <button
                                    className="btn btn-primary m-2 d-flex justify-content-center align-items-center"
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
                <Modal titulo={"Escanea para obtener tu factura"} mostrar={modalQR}>
                    <div className="row ">
                        <QRCode value="https://coruscating-tulumba-b76ec7.netlify.app/factura" size={150} />
                        <div className="row d-flex justify-content-center mt-1 ">
                            {factura ? <button
                                className="btn btn-primary w-25 my-5 me-2"
                                onClick={() => {
                                    setModalQR(false);
                                }}
                            >
                                Aceptar
                            </button> :
                                !factura && !loading ? <div className="w-25 my-5 ms-2"><Spinner /></div> :

                                    <><label for="fileInput" className=" text-center mb-2 mt-3">Ingrese la factura de su reserva:</label>
                                        <input className=" btn btn-warning w-25 h-50 ms-2 text-center"
                                            id="image-upload" type="file" accept="image/*" placeholder=""
                                            required
                                            onChange={e => handleUpload(e)}
                                        />
                                        <button
             className="btn btn-primary w-25 ms-3 h-50 me-2"
             onClick={() => {
               setModalQR(false);
             }}
           >
             Cancelar
           </button>
                                    </>
                            }
                        </div>
                    </div>
                </Modal>

            </div>
        </div>
    );
}
