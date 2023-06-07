export const fetchData = async () => {
  const response = await fetch(
    "http://parkmycar-001-site1.atempurl.com/guards"
  );
  return await response.json();
};
