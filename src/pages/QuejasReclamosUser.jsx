import { fetchCreateSuggestion } from "../functions/fetchSuggestions";
import "../styles/PagesStyles/QuejasReclamosUsers.css";

import React, { useState } from "react";

const QuejasReclamosUser = () => {
  const [text, setText] = useState("");

  const handleCreate = async () => {
    await fetchCreateSuggestion(text);
  };
  return (
    <div className="contenedorNot overflow-y-scroll">
      <div>
        <div className="tituloNoti">Crear Queja o Reclamo</div>
        <div className="cuadroQad ">
          <div>
            <div>
              <h3 className="tituloUser">Descripción: </h3>

              <div className="contDes">
                <textarea
                  className="form-control Descripcion "
                  placeholder="Escriba el mensaje"
                  id="floatingTextarea2"
                  onChange={(e) => setText(e.target.value)}
                />
                <div className="button">
                  <button
                    className=" btn btn-primary m-2"
                    form="myform"
                    type="submit"
                    onClick={() => handleCreate()}
                  >
                    Enviar
                  </button>
                </div>
              </div>
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
