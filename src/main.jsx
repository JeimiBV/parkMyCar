import {store} from '../src/store'
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import ListaReserva from './pages/ListaReserva'
import RegistroReserva from './pages/RegistroReserva'
import PlazasReserva from './pages/PlazasReserva'
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import { Provider } from 'react-redux'
import Parqueo from "./pages/Parqueo"
import Landing from "./pages/Landing"
import InicioSesion from "./pages/InicioSesion"
const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing/>
  },
  {
    path: "/plazaReserva",
    element: <PlazasReserva />
  },
  {
    path: "/reservas",
    element: <RegistroReserva />
  },
  {
    path: "/listaReserva",
    element: <ListaReserva />
  },
  {
    path: "/parqueo",
    element:<Parqueo/>

  },
  {
    path: "/inicioS",
    element:<InicioSesion/>

  },
])



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <Layout>
        <RouterProvider router={router} />
      </Layout>
      </Provider>
  </React.StrictMode>,
)
