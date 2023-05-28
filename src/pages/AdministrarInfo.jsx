import React, { useState, useEffect } from "react";
import "../styles/PagesStyles/AdministrarInfo.css";
import { Navigate } from "react-router-dom";

const AdministrarInfo = () => {
  const usuarios = [
    {
      tipo: "cliente",
      nombre: "Luis",
      ci: "654621",
      telefono: "615415451",
      placa: "OFK210",
      correo: "Luis@gmail.com",
    },
    {
      tipo: "cliente",
      nombre: "Juan",
      ci: "665421",
      telefono: "6654165",
      placa: "OOU400",
      correo: "Juan@gmail.com",
    },
    {
      tipo: "guardia",
      nombre: "Fernando",
      ci: "652161",
      telefono: "6165161",
      correo: "guard@gmail.com",
    },
  ];
  const editarUsuario = (nombre) => {
    window.location = "/registroUsuario"
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
            <div className="contenidoInfoCliente">
              {usuarios
                .filter((usuario) => usuario.tipo === "cliente")
                .map((usuario) => (
                  <div key={usuario.nombre} className="usuarioFinal">
                    <div className="usuarioUnidoID">
                      <div className="usuarioIzq">
                        <i class="fa-solid fa-user fs-1 me-3 opciones"></i>
                      </div>
                      <div className="usuarioDer">
                        <div className="datosUsuario">
                          <p>Nombre: {usuario.nombre}</p>
                          <p>CI: {usuario.ci}</p>
                          <p>Teléfono: {usuario.telefono}</p>
                          <p>Placa: {usuario.placa}</p>
                          <p>Correo: {usuario.correo}</p>
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
            <h3 className="tituloCliente">Guardias:</h3>
            <div className="contenidoInfoCliente">
              {usuarios
                .filter((usuario) => usuario.tipo === "guardia")
                .map((usuario) => (
                  <div key={usuario.nombre} className="usuarioFinal">
                    <div className="usuarioUnidoID">
                      <div className="usuarioIzq">
                        <i class="fa-solid fa-user fs-1 me-3 opciones"></i>
                      </div>
                      <div className="usuarioDer">
                        <div className="datosUsuario">
                          <p>Nombre: {usuario.nombre}</p>
                          <p>CI: {usuario.ci}</p>
                          <p>Teléfono: {usuario.telefono}</p>
                          <p>Correo: {usuario.correo}</p>
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
