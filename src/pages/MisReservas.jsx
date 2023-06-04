import "../styles/PagesStyles/misReservas.css"

import React, { useState } from "react";

export default function RedactarMensaje() {
  return (
    <div className="containerMisReservas overflow-y-scroll">
      <h1>Mis reservas</h1>
      <div className="row w-75 mx-auto rounded reservasLista py-4">
        <div className="col-3 pt-3 ">
          <picture className="">
            <img src="./images/Parking-bro.svg"></img>
          </picture>
        </div>
        <div className="col-9  text-light">
          <h2 >Información de la reserva</h2>
          <div className="my-2 col" >
            <div className="row">
              <i class="fas fa-car col-1"></i>
              <h5 className="col-3"> Fecha de reserva</h5>
              <p className="col-2">21/04/2023</p>
            </div>
            <div className="row">
              <i class="fas fa-car col-1"></i>
              <h5 className="col-3"> Hora de entrada</h5>
              <p className="col-2">12:00</p>
            </div>
            <div className="row">
              <i class="fas fa-car col-1"></i>
              <h5 className="col-3">Hora de entrada</h5>
              <p className="col-2">13:00</p>
            </div>

          </div>
        </div>

      </div>
    </div >
  );
}