import "../styles/PagesStyles/misReservas.css"
import { fetchPlaceHistory } from "../functions/fetchPlaces";
import { UseFetch, fetchVehicles, postReservesByPlate } from "../functions/useFetch";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ItemReserva from "./itemReserva";



export default function RedactarMensaje() {
  const usuario = useSelector((state) => state.users).userState;
  const [schedules, setSchedules] = useState([]);
  const [reserves, setReserves] = useState([]);
  const [selectedVehicle, setVehicleSelected] = useState(null);
  const getSchedules = async () => {
    const schedules = await fetchVehicles(usuario.guardId);
    setSchedules(schedules);
  };

  const handleSelectChange = async (event) => {
    setVehicleSelected(event.target.value);
    const reserves = await postReservesByPlate(event.target.value);
    console.log(reserves);
    setReserves(reserves);
    console.log(selectedVehicle);
  }
  useEffect(() => {
    getSchedules();
  }, []);
  return (
    <div className="containerMisReservas overflow-y-scroll">
      <h1>Mis reservas</h1>
      <select value={selectedVehicle} className="w-25 mx-auto my-5 drop p-1" id="guardia" name="guardia " onChange={handleSelectChange}>
        <option value="">Ver Vehiculos Disponibles</option>
        {schedules.map((schedule) => (
          <option className="p-3"
            key={schedule.id} value={schedule.plate}>
            {schedule.plate}

          </option>
        ))}
      </select>

      {reserves.map((schedule) => (
        <ItemReserva
          key={schedule.id}
          fechaReserva={schedule.entryDate.substring(0, 10)}
          horaEntrada={schedule.entryDate.substring(11, 16)}
          horaSalida={schedule.retirementDate.substring(11, 16)}
          plaza={schedule.place.num}
          tarifa={schedule.price}
          vehiculo={schedule.plate} />
      ))}


    </div>
  );
}