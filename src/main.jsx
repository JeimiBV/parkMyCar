import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import ListaReserva from './pages/ListaReserva'
import RegistroReserva from './pages/RegistroReserva'
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout/Layout'

const router = createBrowserRouter([
  {
    path: "/",
    element: <div> Landing</div>
  },
  {
    path: "/listaReserva",
    element: <ListaReserva />
  },
  {
    path: "/reservas",
    element: <RegistroReserva />
  }
])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Layout>
        <RouterProvider router={router} />
      </Layout>
  </React.StrictMode>,
)
