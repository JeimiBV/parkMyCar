import React, { useEffect, useState } from "react";
import ParkingSection from "../components/Parking/ParkingSection";
import { splitIntoSection } from "../utils/placeUtils";
import { useSelector, useDispatch } from "react-redux";
import moment from 'moment';
import {
  fetchCreatePlace,
  fetchDeletePlace,
  fetchPlaceHistory,
  fetchPlaces,
  fetchReserves,
} from "../functions/fetchPlaces";

import "../styles/PagesStyles/Parqueo.css";
import { addDate } from "../tasks/dateSlice";

function Parking() {
  const [actualDate, setActualDate]= useState()
  const [places, setPlaces] = useState([]);
  const [reserves, setReserves] = useState([]);
  const [historyPlace, setHistoryPlace] = useState([]);
  const [entryDate, setEntryDate] = useState("");
  const [retirementDate, setRetirementDate] = useState("");
  const [entryTime, setEntryTime] = useState("");
  const [retirementTime, setRetirementTime] = useState("");
  const tableSection = splitIntoSection(places);
  const usuario = useSelector((state) => state.users).userState;
  const dispatch= useDispatch();
  const [unAvailablePlaces, setUnAvailablePlaces] = useState([]);
  const getPlaces = async () => {
    const places = await fetchPlaces();
    setPlaces(places);
  };

  const getReserves= async ()=> {
    const reserves= await fetchReserves();
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

  const getPlaceHistory = async (date) => {
    setRetirementDate(date);
    const historyPlace = await fetchPlaceHistory();
    setHistoryPlace(historyPlace);
  };

  const handleSearch = () => {
    getReserves();
    setActualDate({ "entryDate": entryDate, "entryTime": entryTime, "retirementTime": retirementTime });
    setUnAvailablePlaces([]);
  
    reserves.forEach((reserve) => {
      const reserveEntryTime = reserve.entryDate.slice(11, 16);
      const reserveRetirementTime = reserve.retirementDate.slice(11, 16);
      //console.log(reserve,"aaaaaaaaaaaaaaaaaaaaaaaaaaa")
      const isEntryDateEqual = moment(entryDate).isSame(reserve.entryDate.slice(0, 10), 'day');
      const isEntryTimeInRange =
        (entryTime > reserveEntryTime && entryTime < reserveRetirementTime) ||
        (entryTime < reserveEntryTime && retirementTime > reserveEntryTime);
  
      const isRetirementTimeInRange =
        (retirementTime > reserveEntryTime && retirementTime <= reserveRetirementTime) ||
        (entryTime < reserveRetirementTime && retirementTime >= reserveRetirementTime);
  
      if (isEntryDateEqual && (isEntryTimeInRange || isRetirementTimeInRange)) {
        setUnAvailablePlaces((prev) => [...prev, reserve.place.num]);
      }
    });
  };

  useEffect(() => {
    getPlaces();
    getReserves();
  }, [entryTime, entryDate]);

  return (
    <div className="containerParqueo overflow-y-scroll">
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
            onChange={(e) => getPlaceHistory(e.target.value)}
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
        <button onClick={()=>{handleSearch()}}>Search</button>
      </div>
      <div className="tables-container">
        {tableSection.map((tableData, index) => (
          <ParkingSection key={index} data={tableData} ocuped={unAvailablePlaces} actualDate={actualDate} />
          
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
