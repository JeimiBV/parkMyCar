import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

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
            backgroundColor: selectedDates.includes(date.toDateString())
              ? "transparent"
              : "transparent",
          }}
          onClick={() => handleDateSelection(date)}
        >
          <div>{date.toDateString()}</div>
          <div>
            <input
              type="checkbox"
              checked={selectedDates.includes(date.toDateString())}
              readOnly
            />
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <label htmlFor="entrada">Entrada:</label>
            <input type="time" id="entrada" name="entrada" />
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <label htmlFor="salida">Salida:</label>
            <input type="time" id="salida" name="salida" />
          </div>
          <div>
            <label htmlFor="guardia">Guardia:</label>
            <select
              id="guardia"
              name="guardia"
              value={selectedGuard}
              onChange={handleGuardSelection}
            >
              <option value="">--Seleccione una guardia--</option>
              {guardias.map((guardia) => (
                <option key={guardia.id} value={guardia.name}>
                  {guardia.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      ))}
    </div>
  );
}

export default EditarHoraYGUardia;
