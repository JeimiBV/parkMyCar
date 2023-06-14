export const fetchData = async () => {
  const response = await fetch(
    "http://parkmycar-001-site1.atempurl.com/Users/guard"
  );
  return await response.json();
};
