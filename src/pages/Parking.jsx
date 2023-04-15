import React, { useEffect, useState } from "react";
import ParkingSection from "../components/Parking/ParkingSection";
import { splitIntoSection } from "../utils/placeUtils";

import "../styles/PagesStyles/Parqueo.css";
import {
  fetchData,
  fetchDeleteData,
  fetchPostData,
} from "../functions/fetchPlaces";

function Parking() {
  const [places, setPlaces] = useState([]);
  const [entrada, setEntrada] = useState("");
  const [salida, setSalida] = useState("");
  const tableSection = splitIntoSection(places);

  const handleEntradaChange = (event) => {
    setEntrada(event.target.value);
  };

  const handleSalidaChange = (event) => {
    setSalida(event.target.value);
  };

  const getPlaces = async () => {
    const places = await fetchData();
    setPlaces(places);
  };

  const CreatePlace = async () => {
    const place = await fetchPostData();
    setPlaces((places) => [...places, place]);
  };

  const DeletePlace = async () => {
    const id = await fetchDeleteData();
    setPlaces((places) => places.filter((place) => place.id !== id));
  };

  useEffect(() => {
    getPlaces();
  }, []);

  return (
    <div>
      <h1>Plazas</h1>
      <div className="buscadores">
        <div className="buscador">
          <input
            type="text"
            value={entrada}
            onChange={handleEntradaChange}
            placeholder="Hora de entrada"
          />
        </div>
        <div className="buscador">
          <input
            type="text"
            value={salida}
            onChange={handleSalidaChange}
            placeholder="Hora de salida"
          />
        </div>
      </div>
      <div className="tables-container">
        {tableSection.map((tableData, index) => (
          <ParkingSection key={index} data={tableData} />
        ))}
      </div>
      <div className="col-12 d-flex justify-content-end px-5">
        <button className="AddPlaceButton" onClick={() => CreatePlace()}>
          +
        </button>
        <button className="AddPlaceButton" onClick={() => DeletePlace()}>
          -
        </button>
      </div>
    </div>
  );
}

export default Parking;
