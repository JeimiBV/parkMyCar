import React, { useState } from "react";
import "../styles/PagesStyles/Parqueo.css";
import { useNavigate } from "react-router-dom";

function Parqueo() {
  const [plazas, setPlazas] = useState(Array(36).fill({ disponible: true }));
  const [showModal, setShowModal] = useState(false);

  const [entrada, setEntrada] = useState("");
  const [salida, setSalida] = useState("");
  const navigate = useNavigate();

  const handleClick = (index) => {
    const newPlazas = plazas.map((plaza, i) =>
      i === index ? { disponible: !plaza.disponible } : plaza
    );
    setPlazas(newPlazas);
    navigate("/reservas");
  };

  const addBlock = () => {
    const totalPlazas = Object.keys(plazas).length;

    const newPlazas = [{ disponible: true }, { disponible: true }];

    setPlazas(plazas.concat(newPlazas));
  };

  const removeBlock = () => {
    const totalPlazas = Object.keys(plazas).length;
    const newPlazas = plazas.slice();
    newPlazas.splice(totalPlazas - 3, 2);

    setPlazas(newPlazas);
  };
  console.log(plazas);

  const handleEntradaChange = (event) => {
    setEntrada(event.target.value);
  };

  const handleSalidaChange = (event) => {
    setSalida(event.target.value);
  };

  return (
    <div className="overflow-y-scroll parqueo-container vertical-line ">
      <h1 className="h1 text-light">Plazas</h1>
      <div className="buscadores">
        <div className="buscador">
          <input
            type="text"
            value={entrada}
            onChange={handleEntradaChange}
            placeholder="Hora de entrada"
          />
        </div>
        <div className="buscador">
          <input
            type="text"
            value={salida}
            onChange={handleSalidaChange}
            placeholder="Hora de salida"
          />
        </div>
      </div>

      <div className="plazas-container">
        <div className="bloque" key="1">
          <div className="titulo-auto">Automovil</div>
          <div className="alinear-columnas">
            <div className="clase-linea">
              <div className="plazas-column">
                {plazas.slice(0, 6).map((plaza, index) => (
                  <div key={index} className="plaza-container">
                    <div className="horizontal-line" />

                    <button
                      onClick={() => handleClick(index)}
                      disabled={!plaza.disponible}
                      className={`plaza-button ${
                        plaza.disponible ? "disponible" : "ocupado"
                      }`}
                    >
                      {index === 0 && (
                        <div >
                        <i class="fa fa-wheelchair logo-dis " aria-hidden="true"></i>
                        </div>          
                      )}
                      {plaza.disponible ? `Plaza ${index + 1}` : "Ocupado"}
                    </button>
                  </div>
                ))}
              </div>
              <div className="linea-vertical"></div>
            </div>
            <div className="plazas-column">
              {plazas.slice(6, 12).map((plaza, index) => (
                <div key={index + 6} className="plaza-container">
                  <div className="horizontal-line" />
                  <button
                    onClick={() => handleClick(index + 6)}
                    disabled={!plaza.disponible}
                    className={`plaza-button ${
                      plaza.disponible ? "disponible" : "ocupado"
                    }`}
                  >
                    {index === 0 && (
                      <div>
                        <i class="fa fa-wheelchair logo-dis " aria-hidden="true"></i>
                        </div>
                    )}
                    {plaza.disponible ? `Plaza ${index + 7}` : "Ocupado"}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="bloque" key="2">
          <div className="titulo-auto">Automovil</div>
          <div className="alinear-columnas">
            <div className="clase-linea">
              <div className="plazas-column">
                {plazas.slice(12, 18).map((plaza, index) => (
                  <div key={index + 12} className="plaza-container">
                    <div className="horizontal-line" />
                    <button
                      onClick={() => handleClick(index + 12)}
                      disabled={!plaza.disponible}
                      className={`plaza-button ${
                        plaza.disponible ? "disponible" : "ocupado"
                      }`}
                    >
                      {plaza.disponible ? `Plaza ${index + 13}` : "Ocupado"}
                    </button>
                  </div>
                ))}
              </div>
              <div className="linea-vertical"></div>
            </div>

            <div className="plazas-column">
              {plazas.slice(18, 24).map((plaza, index) => (
                <div key={index + 18} className="plaza-container">
                  <div className="horizontal-line" />
                  <button
                    onClick={() => handleClick(index + 18)}
                    disabled={!plaza.disponible}
                    className={`plaza-button ${
                      plaza.disponible ? "disponible" : "ocupado"
                    }`}
                  >
                    {plaza.disponible ? `Plaza ${index + 19}` : "Ocupado"}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bloque" key="3">
          <div className="titulo-auto">Automovil</div>
          <div className="alinear-columnas">
            <div className="clase-linea">
              <div className="plazas-column">
                {plazas.slice(36, 42).map((plaza, index) => (
                  <div key={index + 36} className="plaza-container">
                    <div className="horizontal-line" />
                    <button
                      onClick={() => handleClick(index + 36)}
                      disabled={!plaza.disponible}
                      className={`plaza-button ${
                        plaza.disponible ? "disponible" : "ocupado"
                      }`}
                    >
                      {plaza.disponible ? `Plaza ${index + 37}` : "Ocupado"}
                    </button>
                  </div>
                ))}
              </div>
              <div className="linea-vertical"></div>
            </div>

            <div className="plazas-column">
              {plazas.slice(42, 48).map((plaza, index) => (
                <div key={index + 42} className="plaza-container">
                  <div className="horizontal-line" />
                  <button
                    onClick={() => handleClick(index + 42)}
                    disabled={!plaza.disponible}
                    className={`plaza-button ${
                      plaza.disponible ? "disponible" : "ocupado"
                    }`}
                  >
                    {plaza.disponible ? `Plaza ${index + 43}` : "Ocupado"}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div>
          <button
            className="botonMas m-1"
            disabled={Object.keys(plazas).length === 48}
            onClick={addBlock}            
          >
            +
          </button>
          <button
            className="botonMas m-1"
            disabled={Object.keys(plazas).length === 36}
           
            data-bs-toggle="modal" 
            data-bs-target="#staticBackdrop"
          >
            -
          </button>
        </div>

        <div
          class="modal fade "
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
                <h1 class="modal-title fs-5" id="staticBackdropLabel">
                  Desea eliminar los bloques ?
                </h1>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  
                ></button>
              </div>
              <div class="modal-body">...</div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  No, cancelar 
                </button>
                <button type="button" class="btn btn-primary" data-bs-dismiss="modal" onClick={removeBlock}>
                  Si, aceptar
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="bloque" key="4">
          <div className="titulo-auto">Motocicletas</div>
          <div className="alinear-columnas">
            <div className="clase-linea">
              <div className="plazas-column">
                {plazas.slice(24, 30).map((plaza, index) => (
                  <div key={index + 24} className="plaza-container">
                    <div className="horizontal-line" />
                    <button
                      onClick={() => handleClick(index + 24)}
                      disabled={!plaza.disponible}
                      className={`plaza-button ${
                        plaza.disponible ? "disponible" : "ocupado"
                      }`}
                    >
                      {plaza.disponible ? `Plaza ${index + 25}` : "Ocupado"}
                    </button>
                  </div>
                ))}
              </div>
              <div className="linea-vertical"></div>
            </div>

            <div className="plazas-column">
              {plazas.slice(30, 36).map((plaza, index) => (
                <div key={index + 30} className="plaza-container">
                  <div className="horizontal-line" />
                  <button
                    onClick={() => handleClick(index + 30)}
                    disabled={!plaza.disponible}
                    className={`plaza-button ${
                      plaza.disponible ? "disponible" : "ocupado"
                    }`}
                  >
                    {plaza.disponible ? `Plaza ${index + 31}` : "Ocupado"}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Parqueo;
