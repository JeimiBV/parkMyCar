import React, { useState } from "react";
import DatePicker from "react-datepicker";
import NuevoDiv from "./seleccionable";
import "../styles/PagesStyles/EditarHoraYGuardia.css";

function EditarHoraYGUardia() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [selectedDates, setSelectedDates] = useState([]);

  const getDatesBetweenDates = (startDate, endDate) => {
    const dates = [];
    const currDate = new Date(startDate);
    const lastDate = new Date(endDate);

    while (currDate <= lastDate) {
      dates.push({
        guardId: 0,
        startDate: new Date(currDate),
        endDate: new Date(currDate),
      });
      currDate.setDate(currDate.getDate() + 1);
    }

    return dates;
  };

  const dates = getDatesBetweenDates(startDate, endDate);

  return (
    <div className="containerhoras">
      <div className="pruebaJavier">
        <div className="prueba1">
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />
        </div>
        <div>
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
          />
        </div>
      </div>
      {dates.map((item) => (
        <NuevoDiv item={item} selectDate={setSelectedDates} />
      ))}
      <div className="button1">
        <button
          className="btn btn-primary m-2"
          onClick={() => console.log(dates)}
        >
          Guardar
        </button>
      </div>
    </div>
  );
}

export default EditarHoraYGUardia;
