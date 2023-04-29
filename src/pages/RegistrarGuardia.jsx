import React, { useState } from "react";
import "../styles/PagesStyles/RegistrarGuardia.css";

const RegistrarGuardia = () => {
  const [nombre, setNombre] = useState("");
  const [ci, setCI] = useState("");
  const [telefono, setTelefono] = useState("");
  const [correo, setCorreo] = useState("");

  function handleNombreChange(event) {
    const nuevoNombre = event.target.value.replace(/[^a-zA-Z\s]/gi, ""); // Solo permite letras y espacios
    setNombre(nuevoNombre);
  }

  function handleCIChange(event) {
    const nuevoCI = event.target.value.replace(/[^\d]/gi, ""); // Solo permite números
    setCI(nuevoCI);
  }

  function handleTelefonoChange(event) {
    const nuevoTelefono = event.target.value.replace(/[^\d]/gi, ""); // Solo permite números
    setTelefono(nuevoTelefono);
  }

  function handleCorreoChange(event) {
    setCorreo(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log("Nombre:", nombre);
    console.log("CI:", ci);
    console.log("Teléfono:", telefono);
    console.log("Correo electrónico:", correo);
    console.log("Contraseña:", password);
  }
  return (
    <div className="contenedorNot">
      <div>
        <div className="tituloNoti">Registrar un nuevo guardia</div>
        <div className="cuadroRegGuardia">
          <form onSubmit={handleSubmit}>
            <div className="tituloGuardia">
              <label htmlFor="nombre">Nombre completo:</label>
              <input
                className="cuadro"
                type="text"
                id="nombre"
                value={nombre}
                onChange={handleNombreChange}
                required
              />
            </div>
            <div className="tituloGuardia">
              <label htmlFor="ci">CI:</label>
              <input
                className="cuadro"
                type="text"
                id="ci"
                value={ci}
                onChange={handleCIChange}
                required
              />
            </div>
            <div className="tituloGuardia">
              <label htmlFor="telefono">Teléfono celular:</label>
              <input
                className="cuadro"
                type="text"
                id="telefono"
                value={telefono}
                onChange={handleTelefonoChange}
                required
              />
            </div>
            <div className="tituloGuardia">
              <label htmlFor="correo">Correo electrónico:</label>
              <input
                className="cuadro"
                type="email"
                id="correo"
                value={correo}
                onChange={handleCorreoChange}
                pattern="^[a-zA-Z0-9._%+-]+@(gmail|yahoo)\.com$"
                required
              />
            </div>
            <div className="tituloGuardia">
              <label htmlFor="correo">Contraseña:</label>
              <input
                className="cuadro"
                type="contrasenia"
                id="contrasenia"
                required
              />
            </div>
            <div className="buttonGuardia">
              <button className=" btn btn-primary m-2" type="submit">
                Guardar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegistrarGuardia;
