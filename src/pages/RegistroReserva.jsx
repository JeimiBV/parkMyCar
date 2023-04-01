//import RegistroReserva from "./pages/RegistroReserva"
import {MuiPickersUtilsProvider} from "@material-ui/pickers"
import DateFnsUtils from "@date-io/date-fns"
import { DateTimePicker } from "@material-ui/pickers"

import esLocale from "date-fns/locale/es"

import Card from "../components/Card";
import Button from "../components/Button";
import Modal from "../components/Modal";
import { useState } from "react";
export default function RegistroReserva() {
  const [modal, setModal]=useState(false);
  return (
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
              <a onClick={()=>{setModal(true)}}>day dd/mm/yyyy</a>
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
              <a onClick={()=>{setModal(true)}}>day dd/mm/yyyy</a>
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
              <a>#Horas</a>
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
              <select className="dropdown w-100">
                <option>Seleccione el tipo de motorizado</option>
                <option>Vehículo</option>
                <option>Moto</option>
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
                <p className=" fs-6">000Bs</p>
                <p className=" fs-6">000Bs</p>
              </div>
            </div>
            <div className="row m-2 h-25">
              <Button>Reservar</Button>
              <Button >Cancelar</Button>
            </div>
          </div>
        </Card>
      </div>
     
      <MuiPickersUtilsProvider utils={DateFnsUtils} locale={esLocale}>

      <Modal titulo={"Edite la fecha o tiempo"}
      mostrar={modal}
      >
        <div className="row">
            <div className="col-6 text-center"> 
            <h5>
              Parqueo desde:
            </h5>
            <label className="bg-light rounded-3 p-2">
            <DateTimePicker/>
            </label>
            </div>
            <div className=" col-6 text-center">
            <h5>
              Parqueo hasta:
            </h5>
            <label className="bg-light rounded-3 p-2 ">
            <DateTimePicker/>
            </label>
            </div>
            <div className="row d-flex justify-content-center mt-5 ">
              <button className="btn btn-primary w-25 my-5 me-2 ">
                Aceptar
              </button>
              <button className="btn btn-primary w-25 my-5 ms-2" onClick={()=>{setModal(false)}}>
                Cancelar
              </button>
            </div>

        </div>
      </Modal>

      </MuiPickersUtilsProvider>

   
    </div>
  );
}
