import "../styles/PagesStyles/misReservas.css"

import React, { useState } from "react";

export default function RedactarMensaje() {
  return (
    <div className="containerMisReservas overflow-y-scroll">
      <h1>Mis reservas</h1>
      <div className="row w-75 mx-auto rounded reservasLista py-3 pe-4">
        <h2 className="text-light text-center">Información de la reserva</h2>
        <div className="col-2 pt-3 ">
          <picture className="">
            <img src="./images/Parking-bro.svg"></img>
          </picture>
        </div>
        <div className="col-5 text-light">
          <div className="my-2 col" >
            <div className="row">
              <i class="mt-2 fa-solid fa-calendar col-1"></i>
              <h5 className="col"> Fecha de reserva</h5>
              <p className=" col text-center">21/04/2023</p>
            </div>
            <div className="row">
              <i class="fa-solid fa-arrow-right-to-bracket mt-2 col-1"></i>
              <h5 className="col"> Hora de entrada</h5>
              <p className="col text-center">12:00</p>
            </div>
            <div className="row">
              <i class="fa-solid fa-arrow-right-from-bracket mt-2 col-1"></i>
              <h5 className="col">Hora de salida</h5>
              <p className="col text-center">13:00</p>
            </div>
          </div>
        </div>
        <div className="col-1"></div>
        <div className="col-4 my-2 text-light">
          <div className="row">
            <i class="fa-solid fa-square-parking mt-2 col-1"></i>
            <h5 className="col-2">Plaza</h5>
            <p className="col text-center">5</p>
          </div>
          <div className="row">
          <i class="fa-solid fa-money-bill-1-wave mt-2 col-1"></i>
            <h5 className="col-2">Tarifa</h5>
            <p className="col text-center">5</p>
          </div>
          <div className="row">
            <i class="mt-2 fas fa-car col-1"></i>
            <h5 className="col-2">Vehículo</h5>
            <p className="col text-center">109SAE</p>
          </div>
        </div>
      </div>
    </div>
  );
}