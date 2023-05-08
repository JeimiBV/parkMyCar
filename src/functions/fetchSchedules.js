export const fetchPostData = async (schedules) => {
  const response = await fetch(
    "http://testingapi12023-001-site1.atempurl.com/schedules",
    { method: "POST", body: JSON.stringify(schedules) }
  );
  return await response.json();
};
