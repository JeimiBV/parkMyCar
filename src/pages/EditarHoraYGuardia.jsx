import React, { useState } from "react";
import DatePicker from "react-datepicker";
import NuevoDiv from "./seleccionable";
import "../styles/PagesStyles/EditarHoraYGuardia.css";
import { fetchPostData } from "../functions/fetchSchedules";

function EditarHoraYGUardia() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [dates, setDates] = useState([]);

  const getDatesBetweenDates = () => {
    const datesGenerated = [];
    const currDate = new Date(startDate);
    const lastDate = new Date(endDate);

    while (currDate <= lastDate) {
      datesGenerated.push({
        guardId: 0,
        startDate: new Date(currDate),
        endDate: new Date(currDate),
      });
      currDate.setDate(currDate.getDate() + 1);
    }
    return datesGenerated;
  };

  const handleGenerateDates = () => {
    setDates(getDatesBetweenDates());
  };

  const createSchedules = async (schedules) => {
    await fetchPostData(schedules);
  };

  const handleSelectDate = (startDateItem) => {
    const currentDates = dates.filter(
      (item) => item.startDate !== startDateItem
    );
    setDates(currentDates);
  };

  return (
    <div className="containerhoras p-5 overflow-y-scroll">
      <div className="pruebaJavier mb-5">
        <div className="prueba1">
          <DatePicker
            className="date p-1"
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />
        </div>
        <div>
          <DatePicker
            className="date p-1"
            selected={endDate}
            onChange={(date) => setEndDate(date)}
          />
        </div>
        <button className="btn btn-block" onClick={() => handleGenerateDates()}>Buscar datos</button>
      </div>
      {dates.map((item) => (
        <NuevoDiv
          item={item}
          selectDate={() => handleSelectDate(item.startDate)}
        />
      ))}
      <div className="button1">
        <button
          className="btn btn-block m-2"
          onClick={() => createSchedules(dates)}
        >
          Guardar
        </button>
      </div>
    </div>
  );
}

export default EditarHoraYGUardia;
