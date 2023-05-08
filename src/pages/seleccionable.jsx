import { useState } from "react";

import DatePicker from "react-datepicker";

export default function NuevoDiv({ item, selectDate }) {
  const [startHour, setStartHour] = useState(new Date());
  const [endHour, setEndHour] = useState(new Date());
  const guardias = [
    { id: 1, name: "Juan" },
    { id: 2, name: "Pedro" },
    { id: 3, name: "María" },
    { id: 4, name: "Ana" },
  ];
  const [selectedGuard, setSelectedGuard] = useState("");
  const handleGuardSelection = (event) => {
    setSelectedGuard(event.target.value);
  };

  const handleSelectDate = () => {
    console.log(item);
  };

  const handleSelectStart = (date) => {
    item.startDate.setTime(date);
    setStartHour(date);
  };

  const handleSelectEnd = (date) => {
    item.endDate.setTime(date);
    setEndHour(date);
  };

  return (
    <div className="peticiones">
      <div>{item.startDate.toDateString()}</div>
      <div>
        <input type="checkbox" onClick={() => handleSelectDate()} />
      </div>
      <div className="apertura">
        <label htmlFor="entrada">Apertura:</label>
        <DatePicker
          selected={startHour}
          onChange={(date) => handleSelectStart(date)}
          showTimeSelect
          showTimeSelectOnly
          timeIntervals={15}
          timeCaption="Time"
          dateFormat="h:mm aa"
          styl
        />
      </div>

      <div className="cierre">
        <label htmlFor="salida">Cierre:</label>
        <DatePicker
          selected={endHour}
          onChange={(date) => handleSelectEnd(date)}
          showTimeSelect
          showTimeSelectOnly
          timeIntervals={15}
          timeCaption="Time"
          dateFormat="h:mm aa"
        />
      </div>
      <div>
        <label htmlFor="guardia">Guardia:</label>
        <select
          id="guardia"
          name="guardia"
          value={selectedGuard}
          onChange={handleGuardSelection}
        >
          <option value="">--Seleccione un guardia--</option>
          {guardias.map((guardia) => (
            <option key={guardia.id} value={guardia.name}>
              {guardia.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
