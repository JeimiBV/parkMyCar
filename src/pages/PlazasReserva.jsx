import "../styles/PagesStyles/PlazasReserva.css";
import { useState } from "react";
import Bloque from "../components/Bloque";
export default function () {
  const [bloques, setBloques] = useState([1, 2, 2, 3]);
  return (
    <div className="overflow-y-scroll containerPlazas row d-flex justify-content-center">
      <h1 className=" text-center mt-4 text-light"> Historial de reservas</h1>
      {bloques.map((bloque) => (
        <div className="col-4 ">
          <Bloque />
        </div>
      ))}
    </div>
  );
}
