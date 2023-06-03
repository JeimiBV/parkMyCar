import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/PagesStyles/misReservas.css"
export default function RedactarMensaje() {
  return (
    <div className="containerMisReservas overflow-y-scroll">
      <h1>Mis reservas</h1>
      <div className="row w-75 mx-auto rounded bg-danger py-4">
      <div className="col-3 ">
      <i class="fa-solid fa-cards-blank"></i>
      </div>
        <div className="col-9 ">
          <h2>Informacion de la plaza</h2>
          <div className="my-2 col" >
            <h4 className="col"><i class="fas fa-car"></i> Parquear desde</h4>
            <div>
              <p>21/04/2023</p>
            </div>
            <h4 className="col"><i class="fas fa-car"></i> Parquear hasta</h4>
            <div>
              <p>21/04/2023</p>
            </div>
            <h5 className="col"><i class="fas fa-clock"></i>  Hora Entrada</h5>
            <div>
              <p>12:00</p>
            </div>
            <h5 className="col"><i class="fas fa-clock"></i>  Hora Salida</h5>
            <div>
              <p>16:00</p>
            </div>
            <h6 className="col"><i class="fas fa-square-parking"></i> Plaza</h6>
            <div>
              <p>1</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}