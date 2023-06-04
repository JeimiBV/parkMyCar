export const fetchGetSchedules = async () => {
  const response = await fetch(
    "http://parkmycar-001-site1.atempurl.com/schedules"
  );
  return await response.json();
};

export const fetchGetScheduleToday = async () => {
  const response = await fetch(
    "http://parkmycar-001-site1.atempurl.com/schedules"
  );
  return await response.json();
};

export const fetchPostData = async (schedules) => {
  const response = await fetch(
    "http://testingapi12023-001-site1.atempurl.com/schedules",
    {
      method: "POST",
      body: JSON.stringify(schedules),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }
  );
  return await response.json();
};
