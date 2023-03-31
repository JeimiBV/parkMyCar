import Layout from "./components/Layout/Layout"
import ListaReserva from "./pages/ListaReserva"
//import RegistroReserva from "./pages/RegistroReserva"
import { useState } from "react"

function App(){
  
  return (<>
        <Layout>
          <ListaReserva/>
        </Layout>

  </>)
}

export default App
