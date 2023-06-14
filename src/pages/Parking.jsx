import "../styles/PagesStyles/Parqueo.css";

import React, { useEffect, useState } from "react";
import ParkingSection from "../components/Parking/ParkingSection";
import moment from "moment";

import { splitIntoSection } from "../utils/placeUtils";
import { useSelector } from "react-redux";
import {
  fetchCreatePlace,
  fetchDeletePlace,
  fetchHidePlace,
  fetchPlaceHistory,
  fetchPlaces,
  fetchReserves,
  fetchShowPlace,
} from "../functions/fetchPlaces";

function Parking() {
  const [actualDate, setActualDate] = useState();
  const [places, setPlaces] = useState([]);
  const [reserves, setReserves] = useState([]);
  const [historyPlace, setHistoryPlace] = useState([]);
  const [entryDate, setEntryDate] = useState("");
  const [retirementDate, setRetirementDate] = useState("");
  const [entryTime, setEntryTime] = useState("");
  const [retirementTime, setRetirementTime] = useState("");
  const [unAvailablePlaces, setUnAvailablePlaces] = useState([]);
  const [showPlaces, setShowPlaces]= useState(false)

  const tableSection = splitIntoSection(places);
  const usuario = useSelector((state) => state.users).userState;


  const getPlaces = async () => {
    const places = await fetchPlaces();
    setPlaces(places);
  };

  const getReserves = async () => {
    const reserves = await fetchReserves();
    setReserves(reserves);
  };

  const CreatePlace = async () => {
    const place = await fetchCreatePlace();
    setPlaces((places) => [...places, place]);
  };

  const DeletePlace = async () => {
    const id = await fetchDeletePlace();
    setPlaces((places) => places.filter((place) => place.id !== id));
  };

  const hidePlace = async () => {
    const lastIndex = places.map((item) => item.status).lastIndexOf("Shown");
    if (lastIndex !== -1) {
      const { num } = places[lastIndex];
      await fetchHidePlace(num);
      const updatedItems = places.map((item, index) =>
        index === lastIndex ? { ...item, status: "Hidden" } : item
      );
      setPlaces(updatedItems);
    }
  };

  const showPlace = async () => {
    const hiddenItem = places.find((item) => item.status === "Hidden");
    if (hiddenItem) {
      const { num } = hiddenItem;
      await fetchShowPlace(num);
      const updatedItems = places.map((item) =>
        item === hiddenItem ? { ...item, status: "Shown" } : item
      );
      setPlaces(updatedItems);
    }
  };

  const getPlaceHistory = async (date) => {
    setRetirementDate(date);
    const historyPlace = await fetchPlaceHistory();
    setHistoryPlace(historyPlace);
  };

  const handleSearch = () => {
    getReserves();
    setActualDate({
      entryDate: entryDate,
      entryTime: entryTime,
      retirementTime: retirementTime,
    });
    setUnAvailablePlaces([]);

    reserves.forEach((reserve) => {
      const reserveEntryTime = reserve.entryDate.slice(11, 16);
      const reserveRetirementTime = reserve.retirementDate.slice(11, 16);
      const isEntryDateEqual = moment(entryDate).isSame(
        reserve.entryDate.slice(0, 10),
        "day"
      );
      const isEntryTimeInRange =
        (entryTime > reserveEntryTime && entryTime < reserveRetirementTime) ||
        (entryTime < reserveEntryTime && retirementTime > reserveEntryTime);

      const isRetirementTimeInRange =
        (retirementTime > reserveEntryTime &&
          retirementTime <= reserveRetirementTime) ||
        (entryTime < reserveRetirementTime &&
          retirementTime >= reserveRetirementTime);

      if (isEntryDateEqual && (isEntryTimeInRange || isRetirementTimeInRange)) {
        setUnAvailablePlaces((prev) => [...prev, reserve.place.num]);
      }
    });
  };

  useEffect(() => {
    getPlaces();
    getReserves();
  }, [entryTime, entryDate]);

  const modificarDate = (currentDate) => {
    return `${currentDate.getFullYear()}-${(currentDate.getMonth() + 1)
      .toString()
      .padStart(2, "0")}-${currentDate
      .getDate()
      .toString()
      .padStart(2, "0")}T${currentDate
      .getHours()
      .toString()
      .padStart(2, "0")}:${currentDate
      .getMinutes()
      .toString()
      .padStart(2, "0")}:${currentDate
      .getSeconds()
      .toString()
      .padStart(2, "0")}.${currentDate
      .getMilliseconds()
      .toString()
      .padStart(3, "0")}Z`;
  };

  const getActualTime = () => {
    setEntryTime(modificarDate(new Date()).slice(11, 16));
    setRetirementTime(modificarDate(new Date()).slice(11, 16));
  };
  const getActuelDate = () => {
    setEntryDate(modificarDate(new Date()).slice(0, 10));
  };
  useEffect(() => {
    getActualTime();
    getActuelDate();
    handleSearch();
  }, []);

  return (
    <div className="containerParqueo overflow-y-scroll p-3">
      <h1>Plazas</h1>
    { usuario.rol=="Admin"?"":
      <div className="buscadores mt-5 mb-4">
        <div>
          <label className="text-light me-2">Fecha de ingreso:</label>
          <input
            className="h-100 buscador p-1"
            type="date"
            min={modificarDate(new Date()).slice(0, 10)}
            value={entryDate}
            onChange={(e) => setEntryDate(e.target.value)}
          />
        </div>
        <div>
          <label className="text-light me-2">Hora de ingreso:</label>
          <input
            className="h-100 buscador p-1"
            type="time"
            step="3600"
            value={entryTime}
            onChange={(e) => setEntryTime(e.target.value)}
          />
        </div>
        <div>
          <label className="text-light me-2">Hora de salida:</label>
          <input
            className="h-100 buscador p-1"
            type="time"
            value={retirementTime}
            onChange={(e) => setRetirementTime(e.target.value)}
            step="3600"
          />
        </div>
        <button
          className="btn btn-block"
          onClick={() => {
            handleSearch();
            setShowPlaces(true);
          }}
        >
          Search
        </button>
      </div>
      }
      { (usuario.rol =="Client" || usuario.rol=="Guard") && !showPlaces? 
      <h2 className="text-light mt-5 text-center">Seleccione una fecha y rango de horas para ver los horarios disponibles </h2>
    :<div className="tables-container">
    {tableSection.map((tableData, index) => (
      <ParkingSection
        key={index}
        data={tableData}
        ocuped={unAvailablePlaces}
        actualDate={actualDate}
      />
    ))}
  </div>
    }
      
      
      <div
        className={
          usuario.rol == "Admin"
            ? "col-12 d-flex justify-content-end px-5"
            : "d-none"
        }
      >
        <button className="AddPlaceButton" onClick={() => showPlace()}>
          +
        </button>
        <button className="AddPlaceButton" onClick={() => hidePlace()}>
          -
        </button>
      </div>
    </div>
  );
}

export default Parking;
