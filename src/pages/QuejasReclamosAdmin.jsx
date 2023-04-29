import React, { useState, useEffect } from "react";
import "../styles/PagesStyles/QuejasReclamosAdmin.css";

const QuejasReclamosAdmin = () => {
  return (
    <div className="contenedorNot">
      <div>
        <div className="tituloNoti">Crear Queja o Reclamo</div>
        <div className="cuadroQ ">
          <div>
            <div>
              <h3 className="tituloUser1">Descripción: </h3>

              <div className="contenidoQueja">
                <text>
                  La atencion que se brindo no fue muy buena empezando que el
                  guardia no se encontraba en su puesto de trabajo y quede
                  esperando varios minutos para que me atendiera.
                </text>
              </div>
            </div>
          </div>
        </div>
        <div className="cuadroQ ">
          <div>
            <div>
              <h3 className="tituloUser1">Descripción: </h3>

              <div className="contenidoQueja">
                <text>
                  Mi auto se pincho la llanta cuando lo recogi y nadie me dio
                  una explicacion o solucion
                </text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuejasReclamosAdmin;
