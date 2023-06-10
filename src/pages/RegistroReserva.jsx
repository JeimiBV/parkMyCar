import "../styles/PagesStyles/RegistroReserva.css";
import "react-datepicker/dist/react-datepicker.css";

import Modal from "../components/Modal";
import Card from "../components/Card";
import Spinner from "../components/Spinner";
import QRCode from "react-qr-code";
import moment from "moment";

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { postPeticion, postReporte } from "../functions/useFetch";
import { uploadFile } from "../firebase/config";


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
  const [precio, setPrecio] = useState();
  const [datosForm, setDatosForm] = useState({
    entryDate: "",
    retirementDate: "",
    name: "",
    nit: "",
    plate: "",
    phone: null,
    placeId: null,
    guardId: null,
    price: 0,
    qrCode: ""
  });

  const handleChange = (e) => {
    setDatosForm({ ...datosForm, [e.target.name]: e.target.value });
  };

  const handlePost = async (e) => {
    e.preventDefault();
    setDatosForm({ ...datosForm, qrCode: factura })
    var response = await postPeticion(
      "http://parkmycar-001-site1.atempurl.com/reserves",
      datosForm
    );
    navigate("/parqueo");
    console.log(response);
  };

  const obtenerTarifa = async () => {
    setPrecio((await postReporte("http://parkmycar-001-site1.atempurl.com/schedules/day", selector.entryDate)).price);
  }

  const modificarDate = (currentDate) => {
    return `${currentDate.getFullYear()}-${(currentDate.getMonth() + 1).toString().padStart(2, '0')}-${currentDate.getDate().toString().padStart(2, '0')}T${currentDate.getHours().toString().padStart(2, '0')}:${currentDate.getMinutes().toString().padStart(2, '0')}:${currentDate.getSeconds().toString().padStart(2, '0')}.${currentDate.getMilliseconds().toString().padStart(3, '0')}Z`
  }

  const handleAceptar = () => {
    formatearFecha(dateEntrada, true);
    formatearFecha(dateSalida, false);
    calcularTarifa(5);
    setDatosForm({
      ...datosForm,
      entryDate: modificarDate(dateEntrada),
      retirementDate: modificarDate(dateSalida),
      placeId: selector.id,
      guardId: "1",
      price: tarifa,
      qrCode: factura
    });
  }

  const handleUpload = async (e) => {
    setLoading(false)
    await uploadFile(e.target.files[0]).then(
      (qrCode) => {
        setFactura(qrCode.toString());
      }
    );
  }

  useEffect(() => {
    obtenerTarifa();
  }, [])

  useEffect(() => {
    handleAceptar();
    calcularTarifa(precio);
  }, [dateEntrada, dateSalida, factura, precio]);

  const formatearFecha = (date, flag) => {
    if (flag == true) {
      if (date.getMinutes() < 10) {
        setFechaEntrada(date.getHours() + ":0" + date.getMinutes());
      } else {
        setFechaEntrada(date.getHours() + ":" + date.getMinutes());
      }
    } else {
      if (date.getMinutes() < 10) {
        setFechaSalida(date.getHours() + ":0" + date.getMinutes());
      } else {
        setFechaSalida(date.getHours() + ":" + date.getMinutes());
      }
    }
  };

  const calcularTarifa = (precio) => {
    let hours = Math.abs(dateEntrada.getHours() - dateSalida.getHours());
    let minutes = Math.abs(dateEntrada.getMinutes() - dateSalida.getMinutes());
    setTarifa((hours + minutes / 60) * precio);
  };

  return (
    <div className="overflow-y-scroll containerReserva">
      <div className="row w-100 position-relative">
        <h1 className="text-center text-light my-4 ">Reserva</h1>
        <div className="mx-3 col-md-8 col-12">
          <Card titulo={"Tiempo de reserva"}>
            <div className="row">
              <div className="my-2 col">
                <i class="fa-solid fa-car me-2"></i>
                <i class="fa-solid fa-arrow-right"> </i>
              </div>
              <div className="col">
                <p>Parqueo desde</p>
              </div>
              <div className="col">
                {selector.entryDate} : {selector.entryTime}
              </div>
            </div>
            <div className="row">
              <div className="my-2 col">
                <i class="fa-solid fa-car me-2"></i>
                <i class="fa-solid fa-arrow-left"></i>
              </div>
              <div className="col">
                <p>Parqueo hasta</p>
              </div>
              <div className="col">
                {selector.entryDate} : {selector.retirementTime}
              </div>
            </div>
            <div className="row">
              <div className="my-2 col">
                <i class="fa-regular fa-clock"></i>
              </div>
              <div className="col">
                <p>Duración</p>
              </div>
              <div className="col">
                {parseInt(selector.retirementTime) - parseInt(selector.entryTime)}{" "}
                Horas
              </div>
            </div>
          </Card>
          <Card titulo={"Información del propietario"}>
            <form id="myform" className="row" onSubmit={(e) => handlePost(e)}>
              <div className="d-flex row-1 py-2 col">
                <p className="me-5 fs-6 m-0 w-25">Nombre:</p>
                <input
                  type="text"
                  name="name"
                  className=" w-100 h-100"
                  onChange={handleChange}
                  required
                  pattern="[a-zA-Z\s]+"
                />
              </div>
              <div className="d-flex row-2 py-2">
                <p className="me-5 fs-6 m-0 w-25">Teléfono:</p>
                <input
                  type="text"
                  name="phone"
                  className=" w-100 h-100"
                  onChange={handleChange}
                  required
                  pattern="[0-9]{8}"
                  placeholder=" Este espacio debe contener una cadena de 8 caracteres"
                />
              </div>
              <div className="d-flex row-3 py-2">
                <p className="me-5 fs-6 m-0 w-25">Carnet de identidad:</p>
                <input
                  type="text"
                  name="nit"
                  className=" w-100 h-100"
                  onChange={handleChange}
                  required
                  pattern="[a-zA-Z0-9]+"
                  placeholder=" Este espacio debe contener una cadena de 9 caracteres"
                />
              </div>
              <h3 className=" mt-4">Información del vehículo</h3>
              <div className="d-flex row-1 pt-1 col">
                <p className="me-5 fs-6 m-0 w-25">Matrícula:</p>
                <input
                  type="text"
                  name="plate"
                  className=" w-100 h-100"
                  onChange={handleChange}
                  required
                  pattern="[a-zA-Z0-9]{6}"
                  placeholder=" Este espacio debe contener una cadena de 6 caracteres"
                />
              </div>
            </form>
          </Card>
        </div>
        <div className="col-12 col-md-3 ms-3 ms-md-0  mt-md-3 mt-0">
          <Card titulo={"Detalle de la tarifa"} vertical={true}>
            <div className="col h-100">
              <div className="row alturaVertical">
                <div className="col-7">
                  <p className=" fs-6">Costo por hora:</p>
                  <p className=" fs-6">Tarifa:</p>
                  <p className="fs-6 ">Nro de plaza:</p>
                </div>
                <div className="col-5">
                  <p className=" fs-6">{5}</p>
                  <p className=" fs-6">{tarifa}</p>
                  <p className=" fs-6">{selector.plaza}</p>
                </div>
              </div>
              <div className="row m-2 h-25">
                <button
                  className="btn btn-primary m-2 d-flex justify-content-center align-items-center"
                  onClick={() => {
                    setModalQR(true);
                  }}
                >
                  Generar QR
                </button>


                {factura ? <button
                  className="btn btn-success m-2 d-flex justify-content-center align-items-center"
                  form="myform"
                  type="submit"
                >
                  Reservar
                </button> :

                  !loading && !factura ? <Spinner /> :
                    <input className=" btn btn-danger m-2 text-center"
                      id="image-upload" type="file" accept="image/*" placeholder=""
                      onChange={e => handleUpload(e)}
                    />
                }
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
        <Modal titulo={"Código QR"} mostrar={modalQR}>
          <div className="row">
            <QRCode value="www.google.com" size={150} />
            <div className="row d-flex justify-content-center mt-1">
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
