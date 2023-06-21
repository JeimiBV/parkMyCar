import { json } from "react-router-dom";

export const fetchGetSchedules = async () => {
  const response = await fetch(
    "https://parkmycar-001-site1.atempurl.com/schedules"
  );
  return await response.json();
};

export const fetchGetScheduleToday = async () => {
  const currentDate = new Date();

  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, "0");
  const day = String(currentDate.getDate()).padStart(2, "0");

  const formattedDate = `${year}-${month}-${day}`;

  const response = await fetch(
    `https://parkmycar-001-site1.atempurl.com/schedules/day`,
    {
      method: "POST",
      body: JSON.stringify(formattedDate),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }
  );
  return response.json();
};

export const fetchPostData = async (schedules) => {
  const modificarDate = (currentDate) => {
    return `${currentDate.getFullYear()}-${(currentDate.getMonth() + 1)
      .toString()
      .padStart(2, "0")}-${currentDate
      .getDate()
      .toString()
      .padStart(2, "0")}T${currentDate
      .getHours()
      .toString()
      .padStart(2, "0")}:${currentDate
      .getMinutes()
      .toString()
      .padStart(2, "0")}:${currentDate
      .getSeconds()
      .toString()
      .padStart(2, "0")}.${currentDate
      .getMilliseconds()
      .toString()
      .padStart(3, "0")}Z`;
  };
  const updatedData = schedules.map((item) => {
    item.startDate = modificarDate(item.startDate); // Convert start date to ISO string format
    item.endDate = modificarDate(item.endDate); // Convert end date to ISO string format

    return item;
  });

  const response = await fetch(
    "https://parkmycar-001-site1.atempurl.com/schedules",
    {
      method: "POST",
      body: JSON.stringify(updatedData),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }
  );
  return response.json();
};
