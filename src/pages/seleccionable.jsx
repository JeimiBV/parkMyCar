import DatePicker from "react-datepicker";

import { fetchData } from "../functions/fetchGuards";
import { useEffect, useState } from "react";

export default function NuevoDiv({ item, selectDate }) {
  const [guards, setGuards] = useState([]);
  const [startHour, setStartHour] = useState(item.startDate);
  const [endHour, setEndHour] = useState(item.endDate);
  const [price, setPrice] = useState(item.price);
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

  const handleSelectPrice = (price) => {
    item.price = price;
    setPrice(price);
  };

  useEffect(() => {
    getGuards();
  }, []);

  return (
    <div className="peticiones row mb-2">
      <div className="col-md-2 text-center">
        {item.startDate.toDateString()}
      </div>

      <div className="apertura col-3 ">
        <label className="me-2" htmlFor="entrada">
          Apertura:
        </label>
        <DatePicker
          className="w-50 dateA p-1 text-center"
          selected={startHour}
          onChange={(date) => handleSelectStart(date)}
          showTimeSelect
          showTimeSelectOnly
          timeIntervals={15}
          timeCaption="Time"
          dateFormat="h:mm aa"
        />
      </div>

      <div className="cierre col-3">
        <label className="me-2" htmlFor="salida">
          Cierre:
        </label>
        <DatePicker
          className="w-50 dateC p-1 text-center"
          selected={endHour}
          onChange={(date) => handleSelectEnd(date)}
          showTimeSelect
          showTimeSelectOnly
          timeIntervals={15}
          timeCaption="Time"
          dateFormat="h:mm aa"
        />
      </div>
      <div className="cierre col-3">
        <label className="me-2" htmlFor="salida">
          Precio:
        </label>
        <input
          name="price"
          type="number"
          className="w-25 dateC p-1 text-center"
          value={price}
          onChange={(e) => handleSelectPrice(e.target.value)}
        />
      </div>
      <div className="col-3 row ">
        <label className="col-4" htmlFor="guardia">
          Guardia:
        </label>
        <select
          className="col-8 w-50 drop p-1"
          id="guardia"
          name="guardia"
          value={selectedGuard}
          onChange={handleSelectGuard}
        >
          <option value="">Seleccione un guardia</option>
          {guards.map((guard) => (
            <option key={guard.id} value={guard.id}>
              {guard.name}
            </option>
          ))}
        </select>
      </div>
      <div className="col-1 m-2">
        <i class="fa-solid fa-trash-can" onClick={() => selectDate()}></i>
      </div>
    </div>
  );
}
