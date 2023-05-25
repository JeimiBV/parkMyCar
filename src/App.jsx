import InicioSesion from "./pages/InicioSesion";
import React from "react";
import ReactDOM from "react-dom/client";
import ListaReserva from "./pages/ListaReserva";
import RegistroReserva from "./pages/RegistroReserva";
import PlazasReserva from "./pages/PlazasReserva";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Parking from "./pages/Parking";
import Landing from "./pages/Landing";
import CrearNotificacion from "./pages/CrearNotificacion";
import EditarHoraYGuardia from "./pages/EditarHoraYGuardia";
import { ProtectedRoute } from "./protectedRoute/ProtectedRoute";
import { useSelector, useDispatch } from "react-redux";
import QuejasReclamosUser from "./pages/QuejasReclamosUser";
import QuejasReclamosAdmin from "./pages/QuejasReclamosAdmin";
import RegistrarGuardia from "./pages/RegistrarGuardia";
import RegistroUsuario from "./pages/RegistroUsuario";
import MisReservas from "./pages/MisReservas";
import RegistroReservaCliente from "./pages/RegistroReservaCliente";
import VerQr from "./pages/verQr";
import generarReporte from "./pages/generarReporte";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AdministrarInfo from "./pages/AdministrarInfo";
import GenerarReporte from "./pages/generarReporte";

function App() {
  const usuario = useSelector((state) => state.users).userState;
  //console.log(usuario.rol, "aaaa");

  return (
    <Layout>
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/inicioS" element={<InicioSesion />} />
          <Route path="/registroUsuario" element={<RegistroUsuario />} />
          <Route
            element={
              <ProtectedRoute
                isAllowed={
                  usuario.rol == "Guard" ||
                    usuario.rol == "Admin" ||
                    usuario.rol == "Client"
                    ? true
                    : false
                }
              />
            }
          >
            <Route path="/plazaReserva" element={<PlazasReserva />} />
            <Route path="/reservas" element={<RegistroReserva />} />
            <Route path="/parqueo" element={<Parking />} />
          </Route>

          <Route
            element={
              <ProtectedRoute
                isAllowed={
                  usuario.rol == "Admin" || usuario.rol == "Guard"
                    ? true
                    : false
                }
              />
            }
          >
            <Route path="/listaReserva" element={<ListaReserva />} />
          </Route>

          <Route
            element={
              <ProtectedRoute
                isAllowed={usuario.rol == "Client" ? true : false}
              />
            }
          >
            <Route path="/verQr" element={<VerQr />}></Route>
            <Route path="/misReservas" element={<MisReservas />}>
              {" "}
            </Route>
            <Route path="/reclamosUser" element={<QuejasReclamosUser />} />
            <Route path="/reservaCliente" element={<RegistroReservaCliente />} />
          </Route>

          <Route
            element={
              <ProtectedRoute
                isAllowed={usuario.rol == "Admin" ? true : false}
              />
            }
          >
            <Route path="/reclamosUser" element={<QuejasReclamosUser />} />
            <Route path="/crearNotificacion" element={<CrearNotificacion />} />
            <Route path="/reclamosAdmin" element={<QuejasReclamosAdmin />} />
            <Route path="/registrarGuardia" element={<RegistrarGuardia />} />
            <Route path="/administrarInfo" element={<AdministrarInfo />} />
            <Route path="/generarReporte" element={<GenerarReporte />} />
            <Route path="/editarHorario" element={<EditarHoraYGuardia />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Layout>
  );
}
export default App;
