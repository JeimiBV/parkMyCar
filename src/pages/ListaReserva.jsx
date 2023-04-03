import Button from "../components/Button";
import Table from "../components/Table"
import { useState } from "react";
import "../styles/PagesStyles/ListaReserva.css"

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
    <div className="overflow-y-scroll containerListaReserva">
      <div className="p-2">
        <a href="/plazaReserva" className="text-decoration-none">
          <Button
            volverButton={true}>
            Volver
            <i class="fa-solid fa-arrow-left"></i>
          </Button>
        </a>
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
    </div>
  );
}
