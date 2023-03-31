import Button from "../components/Button";
import Table from "../components/Table"
import { useState } from "react";

export default function ListaReserva() {
  const [datos, setDatos] = useState([
    {
      hora: "3:30 - 4:30",
      fecha: "dd/mm/yyyy",
      nombre: "Alejandro Peralta",
      placa: "sadasd"
    },
    {
      hora: "4:30 - 6:00",
      fecha: "dd/mm/yyyy",
      nombre: "Ana Gabilanes",
      placa: "sadasssd"
    },
  ])
  return (
    <>
      <div className="">
        <Button>Volver</Button>
        <h1 className="text-center text-light">Plaza 1</h1>
        
      </div>
    </>
  );
}
