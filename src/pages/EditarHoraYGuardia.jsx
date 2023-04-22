import React, { useState } from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import el from "date-fns/locale/el";
import "react-datepicker/dist/react-datepicker.css";
import NuevoDiv from "./seleccionable";
import { es, ja } from "date-fns/locale";
import "../styles/PagesStyles/EditarHoraYGuardia.css";

function EditarHoraYGUardia() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [selectedDates, setSelectedDates] = useState([]);
  const [selectedGuard, setSelectedGuard] = useState("");
  registerLocale("es", es);
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
      <div className="prueba">
        <div className="prueba1">
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            locale="es"
          />
        </div>
        <div>
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
          />
        </div>
      </div>
      {dates.map((date) => (
        <div className="peticiones" key={date.getTime()}>
          <div>{date.toDateString()}</div>
          <div>
            <input
              type="checkbox"
              checked={selectedDates.includes(date.toDateString())}
              readOnly
              onClick={() => handleDateSelection(date)}
            />
          </div>
          <div className="apertura">
            <label htmlFor="entrada">Apertura:</label>
            <input type="time" id="entrada" name="entrada" />
          </div>
          <div className="cierre">
            <label htmlFor="salida">Cierre:</label>
            <input type="time" id="salida" name="salida" />
          </div>
          <div>
            <label htmlFor="guardia">Guardia:</label>
            <NuevoDiv />
          </div>
        </div>
      ))}
      <div className="button1">
        <button className="btn btn-primary m-2">Guardar</button>
      </div>
    </div>
  );
}

export default EditarHoraYGUardia;
