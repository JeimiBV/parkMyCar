import React, { useState, useEffect } from "react";
import Select from "react-select";
import "../styles/PagesStyles/CrearNotificacion.css";
import axios from "axios";

const CrearNotificacion = () => {
  const options = [
    { value: "Pepe", label: "68547228 " },
    { value: "Juan", label: "75413878" },
    { value: "Maria", label: "69712351" },
  ];

  return (
    <div className="contenedorNot">
      <div className="tituloNoti">Crear Notificación</div>
      <h3 className="tituloPara">Para: </h3>

      <div className="contSelect">
        <Select className="opcionesNot" options={options} isMulti />
      </div>

      <div>
        <h3 className="tituloDes">Descripcion: </h3>

        <div className="contDes">
          <textarea
            className="form-control Descripcion "
            placeholder="Escriba el mensaje"
            id="floatingTextarea2"
          ></textarea>
          <div className="m-2">
            <button type="button" className="btn btn-primary botonDes" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
              Enviar
            </button>
          </div>
        </div>
      </div>

      <div
        class="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5 " id="staticBackdropLabel" style={{color:"black"}}>
                Enviar Mensaje
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">¿Estas seguro de enviar el mensaje?</div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cerrar
              </button>
              <button type="button" class="btn btn-primary" data-bs-dismiss="modal">
                Si, aceptar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CrearNotificacion;
