import store from "../src/store";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import ListaReserva from "./pages/ListaReserva";
import RegistroReserva from "./pages/RegistroReserva";
import PlazasReserva from "./pages/PlazasReserva";
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from "./components/Layout/Layout";
import { Provider } from "react-redux";
import Parking from "./pages/Parking";
import Landing from "./pages/Landing";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/plazaReserva",
    element: <PlazasReserva />,
  },
  {
    path: "/reservas",
    element: <RegistroReserva />,
  },
  {
    path: "/listaReserva",
    element: <ListaReserva />,
  },
  {
    path: "/parqueo",
    element: <Parking />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <Layout>
        <RouterProvider router={router} />
      </Layout>
    </Provider>
  </React.StrictMode>
);
