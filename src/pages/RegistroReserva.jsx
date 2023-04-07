//import { MuiPickersUtilsProvider } from "@material-ui/pickers"
//import DateFnsUtils from "@date-io/date-fns"
//import { DateTimePicker, DatePicker } from "@material-ui/pickers"
import Modal from "../components/Modal";
//import esLocale from "date-fns/locale/es"
import Card from "../components/Card";
import Button from "../components/Button";
import "../styles/PagesStyles/RegistroReserva.css"
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function RegistroReserva() {
  const [dateEntrada, setDateEntrada] = useState(new Date());
  const [dateSalida, setDateSalida] = useState(new Date());
  const [modal, setModal] = useState(false);
  const [fechaEntrada, setFechaEntrada] = useState("");
  const [fechaSalida, setFechaSalida] = useState("");
  const [tarifa, setTarifa] = useState(0);

  useEffect(() => {
    formatearFecha(dateEntrada, true);
    formatearFecha(dateSalida, false);
  }, [dateEntrada, dateSalida])

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
  }

  let handleColor = (time) => {
    return time.getHours() > 12 ? "text-success" : "text-error";
  };

  return (
    <div className="overflow-y-scroll containerReserva">
      <div className="row w-100 position-relative">
        <h1 className="text-center text-light my-4 ">Reserva</h1>
        <div className="m-3 col-8">
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
                <a className="cursor" onClick={() => { setModal(true) }} >{fechaEntrada}</a>
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
                <a className="cursor" onClick={() => { setModal(true) }} >{fechaSalida}</a>
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
                <p>{Math.abs(dateSalida.getTime() - dateEntrada.getTime()) / 3600000} Horas</p>
              </div>
            </div>
          </Card>
          <Card titulo={"Información del propietario"}>
            <div className="row">
              <div className="d-flex row-1 py-2 col">
                <p className="me-5 fs-6 m-0 w-25">Nombre:</p>
                <input type="text" className=" w-100 h-100" />
              </div>
              <div className="d-flex row-2 py-2">
                <p className="me-5 fs-6 m-0 w-25">Teléfono:</p>
                <input type="text" className=" w-100 h-100" />
              </div>
              <div className="d-flex row-3 py-2">
                <p className="me-5 fs-6 m-0 w-25">Carnet de identidad:</p>
                <input type="text" className=" w-100 h-100" />
              </div>
            </div>
          </Card>

          <Card titulo={"Información del vehículo"}>
            <div className="row">
              <div className="d-flex row-1 py-2 col">
                <p className="me-5 fs-6 m-0 w-25">Matrícula:</p>
                <input type="text" className=" w-100 h-100" />
              </div>
              <div className="d-flex row-2 py-2">
                <p className="me-5 fs-6 m-0 w-25">Tipo de vehículo:</p>
                <select onChange={(e) => { calcularTarifa(e.target.value) }} className="dropdown w-100">
                  <option disabled>Seleccione el tipo de motorizado</option>
                  <option value={5}>Vehículo</option>
                  <option value={2}>Moto</option>
                </select>
              </div>
            </div>
          </Card>

        </div>
        <div className="col-3 mt-3">
          <Card titulo={"Detalle de la tarifa"}
            vertical={true}>
            <div className="col h-100">
              <div className="row h-75">
                <div className="col">
                  <p className=" fs-6">Tarifa:</p>
                  <p className="fs-6 ">Plaza:</p>
                </div>
                <div className="col">
                  <p className=" fs-6">{tarifa}</p>
                  <p className=" fs-6">000Bs</p>
                </div>
              </div>
              <div className="row m-2 h-25">
                <Button>Reservar</Button>
                <Button>Cancelar</Button>
              </div>
            </div>
          </Card>
        </div>

        <Modal titulo={"Edite la fecha o tiempo"}
          mostrar={modal}
        >
          <div className="row">
            <div className="col-6 text-center">
              <h5>
                Parqueo desde:
              </h5>
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
              <h5>
                Parqueo hasta:
              </h5>
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
              <button className="btn btn-primary w-25 my-5 me-2" onClick={() => { setModal(false) }}>
                Aceptar
              </button>
              <button className="btn btn-primary w-25 my-5 ms-2" onClick={() => { setModal(false) }}>
                Cancelar
              </button>
            </div>

          </div>
        </Modal>
      </div>
    </div>
  );
}