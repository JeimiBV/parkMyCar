import Button from "../components/Button";
import Table from "../components/Table"
import { useState } from "react";
import Layout from "../components/Layout/Layout"

export default function ListaReserva() {
  const [datos, setDatos] = useState([
   {fecha:"31/03/2023",
    reserva: [
      {
        hora: "3:30 - 4:30",
        nombre: "Alejandro Peralta",
        placa: "sadasd"
      },
      {
        hora: "4:30 - 6:00",
        nombre: "Ana Gabilanes",
        placa: "sadasssd"
      } 
    ]},
    {fecha:"01/04/2023",
    reserva:[
      {
        hora: "3:30 - 4:30",
        nombre: "Alex Peralta",
        placa: "sadasd"
      },
      {
        hora: "4:30 - 6:00",
        nombre: "Anacleto Gabilanes",
        placa: "sadasssd"
      }
    ]}
  ])
  return (
    <>
      <div className="m-2 pt-2">
        <div>
          <Button
            volverButton={true}>
            Volver
            <i class="fa-solid fa-arrow-left"></i>
          </Button>
        </div>
        <h1 className="text-center text-light">Plaza 1</h1>

        <div className="ms-5">
          {
            datos.map(dato =>
              <Table
                fecha={dato.fecha}
                datos={dato.reserva}>
              </Table>)
          }
        </div>

      </div>
    </>
  );
}
