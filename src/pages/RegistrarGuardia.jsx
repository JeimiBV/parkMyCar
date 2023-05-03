import React, { useState } from "react";
import "../styles/PagesStyles/RegistrarGuardia.css";

const RegistrarGuardia = () => {
  const [showPwd, setShowPwd] = useState(false);
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
    <div className="contenedorGuardia w-100 p-4 d-flex align-items-center flex-column ">
      <div className="tituloNoti mb-4">Registrar un nuevo guardia</div>
      <div className="cuadroRegGuardia p-4 ">
        <form onSubmit={handleSubmit} className="mt-4">
          <div className="tituloGuardia w-100 mb-4  d-flex">
            <label htmlFor="nombre" className="me-2">
              Nombre completo:
            </label>
            <div className="w-75  ms-auto me-4 groupRG">
              <i class="fa-solid fa-user me-3"></i>
              <input
                className="cuadroG "
                type="text"
                id="nombre"
                value={nombre}
                onChange={handleNombreChange}
                required
              />
            </div>
          </div>
          <div className="tituloGuardia w-100 mb-4  d-flex ">
            <label htmlFor="ci">Carnet de identidad:</label>
            <div className="w-75  ms-auto me-4 groupRG">
              <i class="fa-regular fa-id-card me-3"></i>
              <input
                className="cuadroG"
                type="text"
                id="ci"
                value={ci}
                onChange={handleCIChange}
                required
              />
            </div>
          </div>
          <div className="tituloGuardia w-100 mb-4 d-flex">
            <label htmlFor="telefono">Teléfono celular:</label>
            <div className="w-75   ms-auto me-4 groupRG">
              <i class="fa-solid fa-phone me-3"></i>
              <input
                className="cuadroG"
                type="text"
                id="telefono"
                value={telefono}
                onChange={handleTelefonoChange}
                required
              />
            </div>
          </div>
          <div className="tituloGuardia w-100 mb-4 d-flex">
            <label htmlFor="correo">Correo electrónico:</label>
            <div className="w-75  ms-auto me-4 groupRG">
              <i class="fa-solid fa-at me-3"></i>
              <input
                className="cuadroG "
                type="email"
                id="correo"
                value={correo}
                onChange={handleCorreoChange}
                pattern="^[a-zA-Z0-9._%+-]+@(gmail|yahoo)\.com$"
                required
              />
            </div>
          </div>
          <div className="tituloGuardia w-100 d-flex">
            <label htmlFor="correo">Contraseña:</label>
            <div className="w-75  ms-auto me-4 groupRG">
              <i class="fa-solid fa-lock me-3"></i>
              <input
                className="cuadroG "
                type={showPwd ? "text" : "password"}
                id="contrasenia"
                required
              />
              <div class="me-0" onClick={() => setShowPwd(!showPwd)}>
                {showPwd ? (
                  <i class="fa-solid fa-eye eyecolor"></i>
                ) : (
                  <i class="fa-solid fa-eye-slash eyecolor"></i>
                )}
              </div>
            </div>
          </div>
          <div className="buttonGuardia">
            <button
              className=" btn btnG btn-block ms-auto me-auto mt-5"
              type="submit"
            >
              Guardar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistrarGuardia;
