import "../styles/PagesStyles/QuejasReclamosAdmin.css";

import React, { useState, useEffect } from "react";

const QuejasReclamosAdmin = () => {
  return (
    <div className="contenedorQ overflow-y-scroll">
      <div>
        <h1 className="text-light pb-4 d-flex justify-content-center">Sugerencias y reclamos de usuarios</h1>
        <div className="cuadroQ p-3 row">
          <div className="col-3 text-center">
            <i class="fa-solid fa-circle-exclamation iconoClaim text-light"></i>
          </div>
          <div className="col-9 bg-light p-3 rounded">
            <h4 className="tituloUserA">Descripción: </h4>
            <div className="contenidoQuejaA">
              <text>
                La atencion que se brindo no fue muy buena empezando que el
                guardia no se encontraba en su puesto de trabajo y quede
                esperando varios minutos para que me atendiera.
              </text>
            </div>
          </div>
        </div>
        <div className="cuadroQ p-3 row">
          <div className="col-3 text-center">
            <i class="fa-solid fa-circle-exclamation iconoClaim text-light"></i>
          </div>
          <div className="col-9 bg-light p-3 rounded">
            <h4 className="tituloUserA">Descripción: </h4>
            <div className="contenidoQuejaA">
              <text>
                Se pincho mi llanta y no fui comunicado.
              </text>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuejasReclamosAdmin;
