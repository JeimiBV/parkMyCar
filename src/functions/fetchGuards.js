export const fetchData = async () => {
  const response = await fetch(
    "http://testingapi12023-001-site1.atempurl.com/guards"
  );
  return await response.json();
};
