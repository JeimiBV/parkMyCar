import "../styles/PagesStyles/QuejasReclamosUsers.css";

import React, { useState, useEffect } from "react";

const QuejasReclamosUser = () => {
  return (
    <div className="contenedorNot overflow-y-scroll">
      <h1 className="tituloNoti my-4">Crear Queja o Reclamo</h1>
      <div className="cuadroQad w-75 mx-auto">
        <div className="p-2">
          <h3 className="tituloUser ms-3">Descripción: </h3>
          <div className="contDes p-0 mx-3 my-3">
            <textarea
              className="form-control Descripcion"
              placeholder="Escriba el mensaje"
              id="floatingTextarea2"
            ></textarea>
            <div className="button">
              <button
                className=" btn btn-block mt-4"
                form="myform"
                type="submit"
              >
                Enviar
              </button>
            </div>
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
              <h1
                class="modal-title fs-5 "
                id="staticBackdropLabel"
                style={{ color: "black" }}
              >
                Enviar Mensaje
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cerrar
              </button>
              <button
                type="button"
                class="btn btn-primary"
                data-bs-dismiss="modal"
              >
                Si, aceptar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuejasReclamosUser;
