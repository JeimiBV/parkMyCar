//import { MuiPickersUtilsProvider } from "@material-ui/pickers"
//import DateFnsUtils from "@date-io/date-fns"
//import { DateTimePicker, DatePicker } from "@material-ui/pickers"
import Modal from "../components/Modal";
//import esLocale from "date-fns/locale/es"
import Card from "../components/Card";
import "../styles/PagesStyles/RegistroReserva.css";
import { useEffect, useRef, useState } from "react";
import DatePicker, { CalendarContainer } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import QRCode from "react-qr-code";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { postPeticion } from "../functions/useFetch";


//import 'moment/locale/en-gb'

export default function RegistroReserva() {
  const usuario = useSelector((state) => state.users).userState;
  const selector = useSelector((state) => state.tasks);
  const [dateEntrada, setDateEntrada] = useState(new Date());
  const [dateSalida, setDateSalida] = useState(new Date());
  const [modal, setModal] = useState(false);
  const [modalQR, setModalQR] = useState(false);
  const [fechaEntrada, setFechaEntrada] = useState("");
  const [fechaSalida, setFechaSalida] = useState("");
  const [tarifa, setTarifa] = useState(0);
  const [factura, setFactura] = useState("");
  const navigate = useNavigate();
  // Returns 2011-10-05T14:48:00.000Z
  const [datosForm, setDatosForm] = useState({
    entryDate: "",
    retirementDate: "",
    name: "",
    nit: "",
    plate: "",
    phone: null,
    placeId: null,
    guardId: null,
    price: 0
  });
  const handleChange = (e) => {
    setDatosForm({ ...datosForm, [e.target.name]: e.target.value });
  };

  const handlePost = async (e) => {
    e.preventDefault();
    console.log(datosForm)

    await postPeticion(
      "http://testingapi12023-001-site1.atempurl.com/reserves",
      datosForm
    );
    navigate("/parqueo");
    console.log(datosForm, dateEntrada.toString(), dateSalida.toISOString(), "datos para enviar")
  };

  const handleAceptar = () => {
    calcularTarifa(5);
    setDatosForm({
      ...datosForm,
      entryDate: dateEntrada.toUTCString(),
      retirementDate: dateSalida.toUTCString(),
      placeId: selector.id,
      guardId: usuario.guardId,
      price: tarifa
    });

  }
  useEffect(() => {
    formatearFecha(dateEntrada, true);
    formatearFecha(dateSalida, false);
    handleAceptar();
  }, [dateEntrada, dateSalida]);

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

  const filterPassedTime = (time) => {
    const currentDate = new Date();
    const selectedDate = new Date(time);
    return currentDate.getTime() < selectedDate.getTime();
  };
  const filterSelectedTime = (time) => {
    const selectedDate = new Date(time);
    return dateEntrada.getTime() < selectedDate.getTime();
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
              <div className="my-2 col">
                <i class="fa-solid fa-car me-2"></i>
                <i class="fa-solid fa-arrow-left"></i>
              </div>
              <div className="col">
                <p>Parqueo hasta</p>
              </div>
              <div className="col">
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
              <div className="my-2 col">
                <i class="fa-regular fa-clock"></i>
              </div>
              <div className="col">
                <p>Duración</p>
              </div>
              <div className="col">
                <p>
                  {Math.abs(dateSalida.getHours() - dateEntrada.getHours())}{" "}
                  Horas
                </p>
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
                  name="ci"
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
                <div className="col">
                  <p className=" fs-6">Tarifa:</p>
                  <p className="fs-6 ">Nro de plaza:</p>
                </div>
                <div className="col">
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
                  className="btn btn-primary m-2 d-flex justify-content-center align-items-center"
                  form="myform"
                  type="submit"
                >
                  Reservar
                </button> :
                  <input className=" btn btn-danger m-2 d-flex justify-content-center align-items-center"
                    id="image-upload" type="file" accept="image/*" placeholder=""
                    onChange={e => setFactura(e.target.value)}
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
            <div className="col col-md-6 text-center">
              <h5>Parqueo desde:</h5>
              <label className="bg-light rounded-3 p-2">
                <DatePicker
                  selected={dateEntrada}
                  onChange={(date) => {
                    setDateEntrada(date);
                  }}
                  showTimeSelect
                  timeFormat="HH:mm"
                  //filterTime={filterPassedTime}
                  //showTimeSelect
                  showTimeSelectOnly
                  timeIntervals={60}
                  timeCaption="Hora"
                  dateFormat="HH:mm"
                  locale="vi"
                />
              </label>
            </div>
            <div className=" col col-md-6 mt-4 mt-md-0 text-center">
              <h5>Parqueo hasta:</h5>
              <label className="bg-light rounded-3 p-2 ">
                <DatePicker
                  selected={dateSalida}
                  onChange={(date) => setDateSalida(date)}
                  showTimeSelect
                  timeFormat="HH:mm"
                  //showTimeSelect
                  showTimeSelectOnly
                  timeIntervals={60}
                  timeCaption="Hora"
                  dateFormat="HH:mm"
                //filterTime={filterSelectedTime}
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
