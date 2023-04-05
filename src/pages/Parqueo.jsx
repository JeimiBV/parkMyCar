import React, { useState } from "react";
import "../styles/PagesStyles/Parqueo.css";
import { useNavigate } from "react-router-dom";

function Parqueo() {
  const [plazas, setPlazas] = useState(Array(38).fill({ disponible: true }));
  const [entrada, setEntrada] = useState("");
  const [salida, setSalida] = useState("");
  const navigate = useNavigate();

  const handleClick = (index) => {
    const newPlazas = plazas.map((plaza, i) =>
      i === index ? { disponible: !plaza.disponible } : plaza
    );
    setPlazas(newPlazas);
    navigate("/reservas")
  };

  const handleEntradaChange = (event) => {
    setEntrada(event.target.value);
  };

  const handleSalidaChange = (event) => {
    setSalida(event.target.value);
  };

  return (
    <div className="parqueo-container vertical-line">
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
        <div className="bloques1">
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
                    {plaza.disponible ? `Plaza ${index + 7}` : "Ocupado"}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="bloques2">
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

        <div className="bloques3">
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

        <div className="bloques3">
          <div className="titulo-auto">prueba</div>
          <div className="alinear-columnas">
            <div className="clase-linea">
              <div className="plazas-column">
                {plazas.slice(30, 31).map((plaza, index) => (
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
              <div className="linea-vertical"></div>
            </div>

            <div className="plazas-column">
              {plazas.slice(31, 32).map((plaza, index) => (
                <div key={index + 31} className="plaza-container">
                  <div className="horizontal-line" />
                  <button
                    onClick={() => handleClick(index + 31)}
                    disabled={!plaza.disponible}
                    className={`plaza-button ${
                      plaza.disponible ? "disponible" : "ocupado"
                    }`}
                  >
                    {plaza.disponible ? `Plaza ${index + 32}` : "Ocupado"}
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
