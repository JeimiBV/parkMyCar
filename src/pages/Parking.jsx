import React, { useEffect, useState } from "react";
import ParkingSection from "../components/Parking/ParkingSection";
import { splitIntoSection } from "../utils/placeUtils";
import { useSelector } from "react-redux";
import {
  fetchCreatePlace,
  fetchDeletePlace,
  fetchPlaceHistory,
  fetchPlaces,
} from "../functions/fetchPlaces";

import "../styles/PagesStyles/Parqueo.css";

function Parking() {
  const [places, setPlaces] = useState([]);
  const [historyPlace, setHistoryPlace] = useState([]);
  const [entryDate, setEntryDate] = useState("");
  const [retirementDate, setRetirementDate] = useState("");
  const [entryTime, setEntryTime] = useState("");
  const [retirementTime, setRetirementTime] = useState("");
  const tableSection = splitIntoSection(places);
  const usuario = useSelector((state) => state.users).userState;

  const getPlaces = async () => {
    const places = await fetchPlaces();
    setPlaces(places);
  };

  const CreatePlace = async () => {
    const place = await fetchCreatePlace();
    setPlaces((places) => [...places, place]);
  };

  const DeletePlace = async () => {
    const id = await fetchDeletePlace();
    setPlaces((places) => places.filter((place) => place.id !== id));
  };

  const getPlaceHistory = async () => {
    const historyPlace = await fetchPlaceHistory();
    setHistoryPlace(historyPlace);
  };

  const handleSearch = () => {
    const availablePlaces = places.Places.filter((place) => {
      // Check if there are any history entries for this place that overlap with the specified time range
      const overlappingHistory = historyPlace.History.some((history) => {
        return (
          history.placeId === place.id &&
          history.entryDate <= retirementDate &&
          history.retirementDate >= entryDate &&
          history.entryTime <= retirementTime &&
          history.retirementTime >= entryTime
        );
      });
      // Return true if there are no overlapping history entries for this place
      return !overlappingHistory;
    });
    setPlaces(availablePlaces);
  };

  useEffect(() => {
    getPlaces();
    getPlaceHistory();
  }, []);

  return (
    <div className="containerParqueo">
      <h1>Plazas</h1>
      <div className="buscadores">
        <div>
          <label>Entry date:</label>
          <input
            type="date"
            value={entryDate}
            onChange={(e) => setEntryDate(e.target.value)}
          />
        </div>
        <div>
          <label>Retirement date:</label>
          <input
            type="date"
            value={retirementDate}
            onChange={(e) => setRetirementDate(e.target.value)}
          />
        </div>
        <div>
          <label>Entry time:</label>
          <input
            type="time"
            value={entryTime}
            onChange={(e) => setEntryTime(e.target.value)}
          />
        </div>
        <div>
          <label>Retirement time:</label>
          <input
            type="time"
            value={retirementTime}
            onChange={(e) => setRetirementTime(e.target.value)}
          />
        </div>
        <button onClick={handleSearch}>Search</button>
      </div>
      <div className="tables-container">
        {tableSection.map((tableData, index) => (
          <ParkingSection key={index} data={tableData} />
        ))}
      </div>
      <div
        className={
          usuario.rol == "admin"
            ? "col-12 d-flex justify-content-end px-5"
            : "d-none"
        }
      >
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
