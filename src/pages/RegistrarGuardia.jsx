import React, { useState } from "react";
import "../styles/PagesStyles/RegistrarGuardia.css";
import Spinner from "../components/Spinner";
import { postPeticion } from "../functions/useFetch";

const RegistrarGuardia = () => {
  const [showPwd, setShowPwd] = useState(false);
  const [loading, setLoading] = useState(false);
  const [nombre, setNombre] = useState("");
  const [ci, setCI] = useState("");
  const [telefono, setTelefono] = useState("");
  const [correo, setCorreo] = useState("");
  const [contrasenia, setContrasenia] = useState("");
  const [datosForm, setDatosForm] = useState({
    name: "",
    email: "",
    password: "",
    ci: "",
    phone: 0,
  });
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

  function handleContraseniaChange(event) {
    setContrasenia(event.target.value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    datos();
    console.log(datosForm)
    setLoading(true);
    await postPeticion(
      "http://testingapi12023-001-site1.atempurl.com/users/guard",
      datosForm
    );
    limpiarInputs()
    setLoading(false);
  }

  const datos = () => {
    setDatosForm({
      ...datosForm,
      name: nombre,
      email: correo,
      password: contrasenia,
      phone: telefono,
      ci:ci
    });
  }

  const limpiarInputs = () => {
    setNombre("");
    setCI("");
    setTelefono("");
    setCorreo("");
    setContrasenia('');
  }

  return (
    <div className="contenedorGuardia w-100 p-4 d-flex align-items-center flex-column overflow-y-scroll">
      <div className="tituloNoti mb-4">Registrar un nuevo guardia</div>
      <div className="cuadroRegGuardia p-4 ">
        <form onSubmit={(e) => handleSubmit(e)} className="mt-4">
          <div className="tituloGuardia w-100 mb-4 d-flex align-items-center">
            <label htmlFor="nombre" className="labelRG">
              Nombre completo:
            </label>
            <div className="inputRG me-0 groupRG d-flex">
              <i class="fa-solid fa-user me-3"></i>
              <input
                className="cuadroG"
                type="text"
                id="nombre"
                value={nombre}
                onChange={handleNombreChange}
                required
              />
            </div>
          </div>
          <div className="tituloGuardia w-100 mb-4  d-flex align-items-center">
            <label htmlFor="ci" className="labelRG">Carnet de identidad:</label>
            <div className="inputRG me-0 groupRG">
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
          <div className="tituloGuardia w-100 mb-4 d-flex align-items-center">
            <label htmlFor="telefono" className="labelRG">Teléfono celular:</label>
            <div className="inputRG me-0 groupRG">
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
          <div className="tituloGuardia w-100 mb-4 d-flex align-items-center">
            <label htmlFor="correo" className="labelRG">Correo electrónico:</label>
            <div className="inputRG me-0 groupRG">
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
          <div className="tituloGuardia w-100 d-flex align-items-center">
            <label htmlFor="correo" className="labelRG">Contraseña:</label>
            <div className="inputRG me-0 groupRG">
              <i class="fa-solid fa-lock me-3"></i>
              <input
                className="cuadroG "
                type={showPwd ? "text" : "password"}
                id="contrasenia"
                value={contrasenia}
                onChange={handleContraseniaChange}
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
          {
            loading ? <Spinner /> :
              <div className="buttonGuardia">
                <button
                  className=" btn btnG btn-block ms-auto me-auto mt-5"
                  type="submit"
                >
                  Registrar
                </button>
              </div>
          }
        </form>
      </div>
    </div>
  );
};

export default RegistrarGuardia;
