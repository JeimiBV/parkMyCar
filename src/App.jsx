import Layout from "./components/Layout/Layout"
//import ListaReserva from "./pages/ListaReserva"
import RegistroReserva from "./pages/RegistroReserva"
import { useState } from "react"

function App(){
  const [datos, setDatos]=useState([ {hora:"3:30 - 4:30",
nombre:"Alejandro Peralta",
placa:"sadasd"},
{hora:"4:30 - 6:00",
nombre:"Ana Gabilanes",
placa:"sadasssd"}
])
  return (<>
        <Layout>
          <RegistroReserva/>
        </Layout>

  </>)
}

export default App
