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

function App() {
  const usuario = useSelector((state) => state.users).userState;
  console.log(usuario.rol, "aaaa");

  return (
    <Layout>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/inicioS" element={<InicioSesion />} />
          <Route element={<ProtectedRoute rol={usuario.rol} />}>
            <Route path="/plazaReserva" element={<PlazasReserva />} />
            <Route path="/reservas" element={<RegistroReserva />} />
            <Route path="/listaReserva" element={<ListaReserva />} />
            <Route path="/parqueo" element={<Parking />} />
            <Route path="/crearNotificacion" element={<CrearNotificacion />} />
            <Route path="/editarHorario" element={<EditarHoraYGuardia />} />
            <Route path="/reclamosUser" element={<QuejasReclamosUser />} />
            <Route path="/reclamosAdmin" element={<QuejasReclamosAdmin />} />
            <Route path="/registrarGuardia" element={<RegistrarGuardia />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Layout>
  );
}
export default App;
