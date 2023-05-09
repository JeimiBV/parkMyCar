import { useEffect, useState } from "react";

import DatePicker from "react-datepicker";
import { fetchData } from "../functions/fetchGuards";

export default function NuevoDiv({ item, selectDate }) {
  const [guards, setGuards] = useState([]);
  const [startHour, setStartHour] = useState(item.startDate);
  const [endHour, setEndHour] = useState(item.endDate);
  const [selectedGuard, setSelectedGuard] = useState("");

  const handleSelectGuard = (event) => {
    item.guardId = event.target.value;
    setSelectedGuard(event.target.value);
  };

  const getGuards = async () => {
    const guards = await fetchData();
    setGuards(guards);
  };

  const handleSelectStart = (date) => {
    item.startDate.setTime(date);
    setStartHour(date);
  };

  const handleSelectEnd = (date) => {
    item.endDate.setTime(date);
    setEndHour(date);
  };

  useEffect(() => {
    getGuards();
  }, []);

  return (
    <div className="peticiones">
      <div>{item.startDate.toDateString()}</div>
      <div>
        <button type="checkbox" onClick={() => selectDate()}>
          Remove
        </button>
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
          onChange={handleSelectGuard}
        >
          <option value="">--Seleccione un guardia--</option>
          {guards.map((guard) => (
            <option key={guard.id} value={guard.id}>
              {guard.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
