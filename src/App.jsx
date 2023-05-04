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
import RegistroUsuario from "./pages/RegistroUsuario"
import MisReservas from "./pages/MisReservas";
import VerQr from "./pages/verQr";

function App() {
  const usuario = useSelector((state) => state.users).userState;
  console.log(usuario.rol, "aaaa");

  return (
    <Layout>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/inicioS" element={<InicioSesion />} />
          <Route path="/registroUsuario" element={<RegistroUsuario />} />
          <Route
            element={
              <ProtectedRoute isAllowed={usuario.rol == "seguridad" || usuario.rol == "admin" || usuario.rol == "client"? true:false} />
            }
          >
            <Route path="/plazaReserva" element={<PlazasReserva />} />
            <Route path="/reservas" element={<RegistroReserva />} />
            <Route path="/parqueo" element={<Parking />} />
          </Route>

          <Route
            element={<ProtectedRoute isAllowed={usuario.rol == "admin" || usuario.rol == "seguridad"? true:false} />}
          >
            <Route path="/listaReserva" element={<ListaReserva />} />
          </Route>

          <Route
            element={
              <ProtectedRoute isAllowed={usuario.rol == "client"? true:false} />
            }
           >
            <Route path="/verQr" element={<VerQr/>}></Route>
            <Route path="/misReservas" element={<MisReservas/>}> </Route>
            <Route path="/reclamosUser" element={<QuejasReclamosUser />} />
          </Route>

          <Route
            element={
              <ProtectedRoute isAllowed={usuario.rol == "admin"? true:false} />
            }
           >
            <Route path="/reclamosUser" element={<QuejasReclamosUser />} />
            <Route path="/crearNotificacion" element={<CrearNotificacion />} />
            <Route path="/reclamosAdmin" element={<QuejasReclamosAdmin />} />
            <Route path="/registrarGuardia" element={<RegistrarGuardia />} />
          </Route>

          <Route
            element={
              <ProtectedRoute isAllowed={usuario.rol == "admin"? true:false} />
            }
           >
            <Route path="/editarHorario" element={<EditarHoraYGuardia />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Layout>
  );
}
export default App;
