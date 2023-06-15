import "../styles/PagesStyles/RegistrarGuardia.css";

import Spinner from "../components/Spinner";

import React, { useEffect, useState } from "react";
import { postPeticion } from "../functions/useFetch";
import { toast } from "react-toastify";

const RegistrarGuardia = () => {
  const [showPwd, setShowPwd] = useState(false);
  const [loading, setLoading] = useState(false);
  const [datosForm, setDatosForm] = useState({
    name: "",
    email: "",
    password: "",
    ci: "",
    phone: 0,
  });
  const handleNotification=()=>{
    toast.success('Se ha registrado al guardia exitosamente',{autoClose:2000})
  }
  const handleChange = (e) => {
    setDatosForm({ ...datosForm, [e.target.name]: e.target.value });
  };

  const formEmpty = () => {
    var elements = document.getElementsByClassName("cuadroG");
    for (var i = 0; i < elements.length; i++) {
      elements[i].value = "";
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(datosForm);
    setLoading(true);
    /*await postPeticion(
      "http://parkmycar-001-site1.atempurl.com/users/guard",
      datosForm
    );*/
    handleNotification();
    setLoading(false);
    formEmpty();
  };

  return (
    <div className="contenedorGuardia w-100 p-4 d-flex align-items-center flex-column overflow-y-scroll">
      <h1 className="tituloNoti mb-4">Registrar un nuevo guardia</h1>
      <div className="cuadroRegGuardia p-4 ">
        <form onSubmit={(e) => handleSubmit(e)} className="mt-4">
          <div className="tituloGuardia w-100 mb-4 d-flex align-items-center">
            <label htmlFor="nombre" className="labelRG">
              Nombre completo:
            </label>
            <div className="inputRG me-0 groupRG d-flex">
              <i class="fa-solid fa-user me-3"></i>
              <input
                name="name"
                className="cuadroG"
                type="text"
                onChange={handleChange}
                pattern="[a-zA-Z\s]+"
                required
              />
            </div>
          </div>
          <div className="tituloGuardia w-100 mb-4  d-flex align-items-center">
            <label htmlFor="ci" className="labelRG">
              Carnet de identidad:
            </label>
            <div className="inputRG me-0 groupRG">
              <i class="fa-regular fa-id-card me-3"></i>
              <input
                name="ci"
                className="cuadroG"
                type="text"
                onChange={handleChange}
                pattern="[a-zA-Z0-9]{7,10}"
                required
              />
            </div>
          </div>
          <div className="tituloGuardia w-100 mb-4 d-flex align-items-center">
            <label htmlFor="telefono" className="labelRG">
              Teléfono celular:
            </label>
            <div className="inputRG me-0 groupRG">
              <i class="fa-solid fa-phone me-3"></i>
              <input
                name="phone"
                className="cuadroG"
                type="text"
                onChange={handleChange}
                pattern="[0-9]{8}"
                required
              />
            </div>
          </div>
          <div className="tituloGuardia w-100 mb-4 d-flex align-items-center">
            <label htmlFor="correo" className="labelRG">
              Correo electrónico:
            </label>
            <div className="inputRG me-0 groupRG">
              <i class="fa-solid fa-at me-3"></i>
              <input
                name="email"
                className="cuadroG "
                type="email"
                onChange={handleChange}
                pattern="^[a-zA-Z0-9._%+-]+@(gmail|yahoo)\.com$"
                required
              />
            </div>
          </div>
          <div className="tituloGuardia w-100 d-flex align-items-center">
            <label htmlFor="correo" className="labelRG">
              Contraseña:
            </label>
            <div className="inputRG me-0 groupRG">
              <i class="fa-solid fa-lock me-3"></i>
              <input
                name="password"
                className="cuadroG "
                type={showPwd ? "text" : "password"}
                onChange={handleChange}
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
          {loading ? (
            <Spinner />
          ) : (
            <div className="buttonGuardia">
              <button
                className="btn btnG btn-block ms-auto me-auto mt-5"
                type="submit"
              >
                Registrar
              </button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default RegistrarGuardia;
