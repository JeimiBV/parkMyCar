import React, { useState } from "react";
import DatePicker from "react-datepicker";
import NuevoDiv from "./seleccionable";
import "../styles/PagesStyles/EditarHoraYGuardia.css";

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

  const handleSelectDate = (startDateItem) => {
    const currentDates = dates.filter(
      (item) => item.startDate !== startDateItem
    );
    setDates(currentDates);
  };

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
        <button onClick={() => handleGenerateDates()}>Generate Dates</button>
      </div>
      {dates.map((item) => (
        <NuevoDiv
          item={item}
          selectDate={() => handleSelectDate(item.startDate)}
        />
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
