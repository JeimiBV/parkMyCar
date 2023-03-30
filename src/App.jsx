import { useState } from "react"
import Layout from "./components/Layout/Layout"
import Table from "./components/Table"
//import Modal from "./components/Modal"
//import ButtonDate from "./components/ButtonDate"

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
        <Table datos={datos}/>
        </Layout>

  </>)
}

export default App
