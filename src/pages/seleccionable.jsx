import "../styles/PagesStyles/EditarHoraYGuardia.css";

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
    console.log(startHour.getHours() - 4, "hora seleccionadas");
  };

  const handleSelectEnd = (date) => {
    item.endDate.setTime(date);
    setEndHour(date);
    console.log(endHour, "ddddd");
  };

  const handleSelectPrice = (price) => {
    item.price = price;
    setPrice(price);
  };

  useEffect(() => {
    getGuards();
  }, []);

  return (
    <div className="peticiones row mb-2 p-1 w-100">
      <div className="col-2 text-center">{item.startDate.toDateString()}</div>

      <div className="col-2 d-flex align-items-center">
        <label className="" htmlFor="entrada">
          Apertura:
        </label>
        <DatePicker
          className="dateA p-1 text-center w-75 ms-2"
          selected={startHour}
          onChange={(date) => handleSelectStart(date)}
          showTimeSelect
          showTimeSelectOnly
          timeIntervals={15}
          timeCaption="Time"
          dateFormat="h:mm aa"
        />
      </div>

      <div className="col-2 d-flex align-items-center">
        <label className="" htmlFor="salida">
          Cierre:
        </label>
        <DatePicker
          className=" dateC p-1 text-center w-75 ms-2"
          selected={endHour}
          onChange={(date) => handleSelectEnd(date)}
          showTimeSelect
          showTimeSelectOnly
          timeIntervals={15}
          timeCaption="Time"
          dateFormat="h:mm aa"
        />
      </div>
      <div className="col-2 d-flex align-items-center">
        <label className="" htmlFor="salida">
          Precio:
        </label>
        <input
          name="price"
          type="number"
          min="1"
          className="dateC p-1 text-center w-50 ms-2 "
          value={price}
          onChange={(e) => handleSelectPrice(e.target.value)}
        />
      </div>
      <div className="col-2 d-flex align-items-center">
        <label className="" htmlFor="guardia">
          Guardia:
        </label>
        <select
          className="drop p-1 ms-2 w-50"
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
      <div className="col-1 m-2 d-flex align-items-center">
        <i
          class="fa-solid fa-trash-can text-danger"
          onClick={() => selectDate()}
        ></i>
      </div>
    </div>
  );
}
