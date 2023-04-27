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
  const [apertura, setApertura] = useState("06:00");
  const [cierre, setCierre] = useState("23:00");
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
      const dayOfWeek = currDate.getDay();
      const isChecked = dayOfWeek >= 1 && dayOfWeek <= 5; // true for Mon-Fri, false for Sat-Sun
      dates.push({
        date: new Date(currDate),
        isChecked,
      });
      currDate.setDate(currDate.getDate() + 1);
    }

    return dates;
  };

  const dates = getDatesBetweenDates(startDate, endDate);

  const handleDateSelection = (date) => {
    const selectedDate = dates.find(
      (d) => d.date.toDateString() === date.toDateString()
    );
    if (selectedDate) {
      selectedDate.isChecked = !selectedDate.isChecked;
      const selectedDates = dates
        .filter((d) => d.isChecked)
        .map((d) => d.date.toDateString());
      setSelectedDates(selectedDates);
    }
  };

  const handleGuardSelection = (event) => {
    setSelectedGuard(event.target.value);
  };

  return (
    <div className="containerhoras">
      <div className="pruebaJavier">
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
      {dates.map((item) => (
        <div className="peticiones" key={item.date.getTime()}>
          <div>{item.date.toDateString()}</div>
          <div>
            <input
              type="checkbox"
              checked={item.isChecked}
              readOnly
              onClick={() => handleDateSelection(date)}
            />
          </div>
          <div className="apertura">
            <label htmlFor="entrada">Apertura:</label>
            <input
              type="time"
              id="entrada"
              name="entrada"
              value={apertura}
              onChange={(e) => setApertura(e.target.value)}
            />
          </div>
          <div className="cierre">
            <label htmlFor="salida">Cierre:</label>
            <input
              type="time"
              id="salida"
              name="salida"
              value={cierre}
              onChange={(e) => setCierre(e.target.value)}
            />
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
