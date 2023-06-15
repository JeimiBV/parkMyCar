import { fetchCreateSuggestion } from "../functions/fetchSuggestions";
import "../styles/PagesStyles/QuejasReclamosUsers.css";

import React, { useState } from "react";
import { toast } from "react-toastify";

const QuejasReclamosUser = () => {
  const [text, setText] = useState("");

  const handleNotification = () => {
    toast.success('La sugerencia ha sido realizada exitosamente, gracias', { autoClose: 2000 });
  };

  const formEmpty = () => {
    var elements = document.getElementsByClassName("textareaQRU");
    for (var i = 0; i < elements.length; i++) {
      elements[i].value = "";
    }
  };

  const handleCreate = async () => {
    if (text.length != 0) {
      await fetchCreateSuggestion(text);
      formEmpty()
    } else {
      handleNotification()
    }
  };
  return (
    <div className="contenedorNot overflow-y-scroll">
      <div>
        <h1 className="tituloNoti my-4">Crear Queja o Reclamo</h1>
        <div className="cuadroQad w-75 mx-auto">
          <div>
            <div className="py-3 px-4">
              <h3 className="tituloUser">Descripción:</h3>

              <div><form id="myform" onSubmit={(e) => handleCreate(e)}>
                <textarea
                  className="form-control textareaQRU"
                  placeholder="Escriba el mensaje"
                  id="floatingTextarea2"
                  onChange={(e) => setText(e.target.value)}
                  required
                />
                </form>
                <div className="d-flex justify-content-end">
                  <button
                    className="btn btn-block mt-3 me-0"
                    form="myform"
                    type="submit"
                    
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
    </div >
  );
};

export default QuejasReclamosUser;
