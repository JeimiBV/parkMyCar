import React, { useState, useEffect } from "react";
import "../styles/PagesStyles/AdministrarInfo.css";
import { Navigate } from "react-router-dom";
import User from "./User";
import { fetchClients, fetchGuards } from "../functions/fetchUsers";
import { DeleteData } from "../functions/fetchUsers";

const AdministrarInfo = () => {
  const [guards, setGuards] = useState([]);
  const [clients, setClients] = useState([]);

  const getClients = async () => {
    const clients = await fetchClients();
    setClients(clients);
  };

  const getGuards = async () => {
    const guards = await fetchGuards();
    setGuards(guards);
  };

  const deleteClient = async (id) => {
    await DeleteData(id);
    setClients((clients) => clients.filter((client) => client.id !== id));
  };

  const deleteGuard = async (id) => {
    await DeleteData(id);
    setGuards((guards) => guards.filter((guard) => guard.id !== id));
  };

  useEffect(() => {
    getClients();
    getGuards();
  }, []);

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
                    {clients.map((usuario) => (
                      <User
                        key={usuario.id}
                        usuario={usuario}
                        deleteUser={() => deleteClient(usuario.id)}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <h3 className="tituloCliente">Guardias:</h3>
            <div className="contenidoInfoCliente">
              {guards.map((usuario) => (
                <User
                  key={usuario.id}
                  usuario={usuario}
                  deleteUser={() => deleteGuard(usuario.id)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdministrarInfo;
