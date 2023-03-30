import React, { useState } from "react";
import "./Parqueo.css";

function Parqueo() {
  const [plazas, setPlazas] = useState(Array(12).fill({ disponible: true }));
  const [entrada, setEntrada] = useState("");
  const [salida, setSalida] = useState("");

  const handleClick = (index) => {
    const newPlazas = plazas.map((plaza, i) =>
      i === index ? { disponible: !plaza.disponible } : plaza
    );
    setPlazas(newPlazas);
  };

  const handleEntradaChange = (event) => {
    setEntrada(event.target.value);
  };

  const handleSalidaChange = (event) => {
    setSalida(event.target.value);
  };

  return (
    <div className="parqueo-container vertical-line">
      <h1>Plazas</h1>
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
        <div className="plazas-column">
          {plazas.slice(6).map((plaza, index) => (
            <div key={index} className="plaza-container">
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
  );
}

export default Parqueo;
