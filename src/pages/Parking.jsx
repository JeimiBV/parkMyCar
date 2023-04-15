import React, { useEffect, useState } from "react";
import ParkingSection from "../components/Parking/ParkingSection";
import { splitIntoSection } from "../utils/placeUtils";

import "../styles/PagesStyles/Parqueo.css";

function Parking() {
  const [plazas, setPlazas] = useState([]);
  const [entrada, setEntrada] = useState("");
  const [salida, setSalida] = useState("");
  const tableSection = splitIntoSection(plazas);

  const handleEntradaChange = (event) => {
    setEntrada(event.target.value);
  };

  const handleSalidaChange = (event) => {
    setSalida(event.target.value);
  };

  const fetchData = () => {
    fetch("http://testingapi12023-001-site1.atempurl.com/places")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setPlazas(data);
      });
  };

  const fetchPostData = () => {
    fetch("http://testingapi12023-001-site1.atempurl.com/places", {
      method: "POST",
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setPlazas((plazas) => [...plazas, data]);
      });
  };

  const fetchDeleteData = () => {
    fetch("http://testingapi12023-001-site1.atempurl.com/places", {
      method: "DELETE",
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setPlazas((places) => places.filter((place) => place.id !== data));
      });
  };

  useEffect(() => {
    fetchData();
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
        <button className="AddPlaceButton" onClick={() => fetchPostData()}>
          +
        </button>
        <button className="AddPlaceButton" onClick={() => fetchDeleteData()}>
          -
        </button>
      </div>
    </div>
  );
}

export default Parking;
