import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import NuevoDiv from "./seleccionable";

function EditarHoraYGUardia() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [selectedDates, setSelectedDates] = useState([]);
  const [selectedGuard, setSelectedGuard] = useState("");

  const guardias = [
    { id: 1, name: "Juan" },
    { id: 2, name: "Pedro" },
    { id: 3, name: "María" },
    { id: 4, name: "Ana" },
  ];

  const getDatesBetweenDates = (startDate, endDate) => {
    const dates = [];
    const currDate = new Date(startDate);
    const lastDate = new Date(endDate);

    while (currDate <= lastDate) {
      dates.push(new Date(currDate));
      currDate.setDate(currDate.getDate() + 1);
    }

    return dates;
  };

  const dates = getDatesBetweenDates(startDate, endDate);

  const handleDateSelection = (date) => {
    if (selectedDates.includes(date.toDateString())) {
      setSelectedDates(selectedDates.filter((d) => d !== date.toDateString()));
    } else {
      setSelectedDates([...selectedDates, date.toDateString()]);
    }
  };

  const handleGuardSelection = (event) => {
    setSelectedGuard(event.target.value);
  };

  return (
    <div>
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
      />
      <DatePicker selected={endDate} onChange={(date) => setEndDate(date)} />

      {dates.map((date) => (
        <div
          key={date.getTime()}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            color: "white",
          }}
        >
          <div>{date.toDateString()}</div>
          <div>
            <input
              type="checkbox"
              checked={selectedDates.includes(date.toDateString())}
              readOnly
              onClick={() => handleDateSelection(date)}
            />
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <label htmlFor="entrada">Apertura:</label>
            <input type="time" id="entrada" name="entrada" />
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <label htmlFor="salida">Cierre:</label>
            <input type="time" id="salida" name="salida" />
          </div>
          <div>
            <label htmlFor="guardia">Guardia:</label>
            <NuevoDiv />
          </div>
        </div>
      ))}
      <button>guardar</button>
    </div>
  );
}

export default EditarHoraYGUardia;
