import "../styles/PagesStyles/AdministrarInfo.css";

import React, { useState, useEffect } from "react";
import { EditData } from "../functions/fetchUsers";
import { toast } from 'react-toastify';

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

  const confirmUser = async () => {
    SetIsEditing(false);
    await EditData(usuario.id, name, nit, phone, email, vehicles);
  };

  const editUser = (e) => {
    e.preventDefault();
    SetIsEditing(true);
  };

  const handleNotification = () => {
    toast.success("Actualizando datos", {
      autoClose: 2000,
    });
  };

  return (
    <div key={usuario.nombre} className="usuarioFinal p-2 m-3">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          confirmUser();
        }}
      >
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
                  required
                  minLength={6}
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
                  required
                  minLength={6}
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
                  required
                  minLength={7}
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
                <p className="datosUser col-4">Correo: </p>
                <input
                  className="col"
                  disabled={!isEditing}
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              {usuario.role === "Client" ? (
                <div className="row p-1 w-100 bg-warning ms-2">
                  <div
                    className=" w-100  p-1 text-center"
                    onClick={toggleDropdown}
                  >
                    desplegar lista de placas
                  </div>
                  {isDropdownOpen && (
                    <ul className="list-unstyled col-8">
                      {vehicles.map((vehicle, index) => (
                        <li key={vehicle.id}>
                          <input
                            className=""
                            type="text"
                            disabled={!isEditing}
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
              ) : null}
            </div>
          </div>
        </div>
        <div className="botonUsuario">
          {!isEditing ? (
            <button
              type="button"
              class="btn btn-primary m-2 botonUser"
              onClick={(e) => editUser(e)}
            >
              Editar
            </button>
          ) : (
            <button
              type="submit"
              class="btn btn-success m-2 botonUser"
              onClick={handleNotification}
            >
              Finalizar
            </button>
          )}

          <button
            class="btn btn-danger m-2 botonUser"
            onClick={() => deleteUser()}
          >
            Eliminar
          </button>
        </div>
      </form>
    </div>
  );
};

export default User;
