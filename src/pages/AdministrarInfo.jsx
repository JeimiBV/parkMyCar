import React, { useState, useEffect } from "react";
import "../styles/PagesStyles/AdministrarInfo.css";
import { Navigate } from "react-router-dom";
import User from "./User";

const AdministrarInfo = () => {
  const usuarios = [
    {
      id: 3,
      name: "Javier",
      email: "xavi@gmail.com",
      nit: "512388976",
      phone: "68548948",
      role: "Client",
    },
    {
      id: 42,
      name: "Sabela Chaparro",
      email: "schaparro@gmail.com",
      nit: "7845692",
      phone: "78451235",
      role: "Client",
    },
    {
      id: 57,
      name: "Juanito",
      email: "juanito@hotmail.com",
      nit: "6954412",
      phone: "68530714",
      role: "Client",
    },
    {
      id: 4,
      name: "Guardia",
      email: "guard@gmail.com",
      nit: "562312132",
      phone: "77858523",
      role: "Guard",
    },
    {
      id: 43,
      name: "test",
      email: "test",
      nit: "",
      phone: "123terst",
      role: "Guard",
    },
  ];
  const editarUsuario = (nombre) => {
    window.location = "/registroUsuario";
    console.log("Editando usuario:", nombre);
  };
  const eliminarUsuario = (nombre) => {
    console.log("Eliminando usuario:", nombre);
  };
  return (
    <div className="contenedorNot overflow-y-scroll">
      <div>
        <div className="tituloInfo">Administrar información del cliente</div>
        <div className="encapsularContenido">
          <div>
            <h3 className="tituloCliente">Clientes:</h3>
            <div className="container">
              <div className="col">
              <div className="my-2 col">
              <div className="contenidoInfoCliente">
              {usuarios
                .filter((usuario) => usuario.role === "Client")
                .map((usuario) => (
                  <User usuario={usuario} />
                ))}
            </div>
              </div>
              </div>
            </div>
            <h3 className="tituloCliente">Guardias:</h3>
            <div className="contenidoInfoCliente">
              {usuarios
                .filter((usuario) => usuario.role === "Guard")
                .map((usuario) => (
                  <div key={usuario.nombre} className="usuarioFinal">
                    <div className="usuarioUnidoID">
                      <div className="usuarioIzq">
                        <i class="fa-solid fa-user fs-1 me-3 opciones"></i>
                      </div>
                      <div className="usuarioDer">
                        <div className="datosUsuario">
                          <p>Nombre: {usuario.name}</p>
                          <p>CI: {usuario.nit}</p>
                          <p>Teléfono: {usuario.phone}</p>
                          <p>Correo: {usuario.email}</p>
                        </div>
                      </div>
                    </div>
                    <div className="botonUsuario">
                      <button
                        class="btn btn-primary m-2"
                        onClick={() => editarUsuario(usuario.nombre)}
                      >
                        Editar
                      </button>
                      <button
                        class="btn btn-primary m-2"
                        onClick={() => eliminarUsuario(usuario.nombre)}
                      >
                        Eliminar
                      </button>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdministrarInfo;
