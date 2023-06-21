export const fetchData = async () => {
  const response = await fetch(
    "https://parkmycar-001-site1.atempurl.com/Users/guard"
  );
  return await response.json();
};
