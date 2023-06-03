import React, { useState, useEffect } from "react";
import "../styles/PagesStyles/AdministrarInfo.css";
import { Navigate } from "react-router-dom";
import { EditData } from "../functions/fetchUsers";

const User = ({ usuario, deleteUser }) => {
  const [name, setName] = useState(usuario.name);
  const [nit, setNit] = useState(usuario.nit);
  const [phone, setPhone] = useState(usuario.phone);
  const [email, setEmail] = useState(usuario.email);

  const [isEditing, SetIsEditing] = useState(false);

  const editarUsuario = async () => {
    await EditData(usuario.id, name, nit, phone, email);
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
                textAlign: "center",
                alignItems: "center",
              }}
            >
              <p className="datosUser">Nombre: </p>
              <input
                disabled={!isEditing}
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div
              style={{
                display: "flex",
                textAlign: "center",
                alignItems: "center",
              }}
            >
              <p className="datosUser">CI: </p>
              <input
                disabled={!isEditing}
                type="text"
                value={nit}
                onChange={(e) => setNit(e.target.value)}
              />
            </div>
            <div
              style={{
                display: "flex",
                textAlign: "center",
                alignItems: "center",
              }}
            >
              <p className="datosUser">Teléfono: </p>
              <input
                disabled={!isEditing}
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div
              style={{
                display: "flex",
                textAlign: "center",
                alignItems: "center",
              }}
            >
              <p className="datosUser">Correo: </p>
              <input             
                disabled={!isEditing}
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
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
          <button class="btn btn-primary m-2 botonUser" onClick={() => editarUsuario()}>
            Finalizar
          </button>
        )}

        <button class="btn btn-primary m-2 botonUser" onClick={() => deleteUser()}>
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default User;
