import "../styles/PagesStyles/EditarHoraYGuardia.css";

import DatePicker from "react-datepicker";
import NuevoDiv from "./seleccionable";
import React, { useState } from "react";

import { fetchPostData } from "../functions/fetchSchedules";
import { toast } from "react-toastify";

function EditarHoraYGUardia() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [dates, setDates] = useState([]);

  const handleNotification = (type) => {
    if (type == "success") {
      toast.success("Guardando horarios", { autoClose: 2000 });
    } else {
      toast.error("No existen horarios seleccionados", { autoClose: 2000 });
    }
  };

  const getDatesBetweenDates = () => {
    const datesGenerated = [];
    const currDate = new Date(startDate);
    const lastDate = new Date(endDate);

    console.log(currDate, "last date");

    while (currDate <= lastDate) {
      datesGenerated.push({
        guardId: 0,
        startDate: new Date(currDate),
        endDate: new Date(currDate),
        price: 5,
      });
      currDate.setDate(currDate.getDate() + 1);
    }
    return datesGenerated;
  };

  const handleGenerateDates = () => {
    setDates(getDatesBetweenDates());
  };

  const createSchedules = async (schedules) => {
    console.log(schedules.length)
    if (schedules.length == 0) {
      handleNotification("error");
    } else {
      handleNotification("success");
      await fetchPostData("schedules");
    }
  };

  const handleSelectDate = (startDateItem) => {
    //console.log(startDateItem,"ddddddddddddddddd")
    const currentDates = dates.filter(
      (item) => item.startDate !== startDateItem
    );
    setDates(currentDates);
    console.log(currentDates);
  };

  return (
    <div className="containerhoras p-3 overflow-y-scroll">
      <h1 className="pb-3">Editar horario de atención</h1>
      <div className="pruebaJavier mb-5">
        <div className="prueba1 ">
          <DatePicker
            showIcon
            className="date p-2"
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            dateFormat="MMMM d, yyyy"
            minDate={startDate}
          />
        </div>
        <div>
          <DatePicker
            className="date p-2"
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            dateFormat="MMMM d, yyyy"
            minDate={startDate}
          />
        </div>
        <button className="btn btn-block" onClick={() => handleGenerateDates()}>
          Buscar datos
        </button>
      </div>
      {dates.map((item) => (
        <NuevoDiv
          item={item}
          selectDate={() => handleSelectDate(item.startDate)}
        />
      ))}
      <div className="button1">
        <button
          className="btn btn-block m-3"
          onClick={() => createSchedules(dates)}
        >
          Guardar
        </button>
      </div>
    </div>
  );
}

export default EditarHoraYGUardia;
