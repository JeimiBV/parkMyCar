import "../styles/PagesStyles/AdministrarInfo.css";

import React, { useState, useEffect } from "react";
import { EditData } from "../functions/fetchUsers";

const User = ({ usuario, deleteUser }) => {
  const [name, setName] = useState(usuario.name);
  const [nit, setNit] = useState(usuario.nit);
  const [phone, setPhone] = useState(usuario.phone);
  const [email, setEmail] = useState(usuario.email);
  const [vehicles, setVehicles] = useState(usuario.vehicles);
  const [isEditing, SetIsEditing] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handlePlateChange = (event, index) => {
    const updatedVehicles = [...vehicles];
    updatedVehicles[index].plate = event.target.value;
    setVehicles(updatedVehicles);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const editarUsuario = async () => {
    await EditData(usuario.id, name, nit, phone, email, vehicles);
    SetIsEditing(false);
  };

  return (
    <div key={usuario.nombre} className="usuarioFinal p-2 m-3">
      <div className="usuarioUnidoID m-3">
        <div className="usuarioIzq">
          <i class="fa-solid fa-user fs-1 me-3 opciones iconoUser"></i>
        </div>
        <div className="usuarioDer">
          <div className="datosUsuario">
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
              className="row"
            >
              <p className="datosUser col-4">Nombre: </p>
              <input
                className="col"
                disabled={!isEditing}
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
              className="row"
            >
              <p className="datosUser col-4">CI: </p>
              <input
                className="col"
                disabled={!isEditing}
                type="text"
                value={nit}
                onChange={(e) => setNit(e.target.value)}
              />
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
              className="row"
            >
              <p className="datosUser col-4">Teléfono: </p>
              <input
                className="col"
                disabled={!isEditing}
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
              className="row"
            >
              <p className="datosUser">Correo: </p>
              <input
                disabled={!isEditing}
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            {usuario.role === "Client" ? (
              <div className="col-8 w-25 drop p-1">
                <div className="select-wrapper">
                  <div className="selected-option" onClick={toggleDropdown}>
                    Vehiculos
                  </div>
                  {isDropdownOpen && (
                    <ul className="options-list">
                      {vehicles.map((vehicle, index) => (
                        <li key={vehicle.id}>
                          <input
                            type="text"
                            value={vehicle.plate}
                            onChange={(event) =>
                              handlePlateChange(event, index)
                            }
                          />
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
      <div className="botonUsuario">
        {!isEditing ? (
          <button
            class="btn btn-primary m-2 botonUser"
            onClick={() => SetIsEditing(true)}
          >
            Editar
          </button>
        ) : (
          <button
            class="btn btn-primary m-2 botonUser"
            onClick={() => editarUsuario()}
          >
            Finalizar
          </button>
        )}

        <button
          class="btn btn-primary m-2 botonUser"
          onClick={() => deleteUser()}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default User;
