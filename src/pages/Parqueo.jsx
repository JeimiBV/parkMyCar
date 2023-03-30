import React, { useState } from "react";
import "./Parqueo.css";

function Parqueo() {
  const [plazas, setPlazas] = useState(Array(12).fill({ disponible: true }));

  const handleClick = (index) => {
    const newPlazas = plazas.map((plaza, i) =>
      i === index ? { disponible: !plaza.disponible } : plaza
    );
    setPlazas(newPlazas);
  };

  return (
    <div className="parqueo-container vertical-line">
      <h1>Sistema de Reserva de Plazas en Parqueo</h1>
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
