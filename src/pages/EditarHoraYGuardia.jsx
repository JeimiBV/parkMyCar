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
    <div className="containerhoras p-3 overflow-y-scroll">
      <h1 className="pb-3">Editar horario de atención</h1>
      <div className="pruebaJavier mb-5">
        <div className="prueba1">
          <DatePicker
            showIcon
            className="date p-2"
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            dateFormat="MMMM d, yyyy"
            minDate={startDate}
          />

        </div>
        <div>
          <DatePicker
            className="date p-2"
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            dateFormat="MMMM d, yyyy"
            minDate={startDate}
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
          className="btn btn-block m-3"
          onClick={() => createSchedules(dates)}
        >
          Guardar
        </button>
      </div>
    </div>
  );
}

export default EditarHoraYGUardia;
