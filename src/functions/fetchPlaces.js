export const fetchData = async () => {
  const response = await fetch(
    "http://testingapi12023-001-site1.atempurl.com/places"
  );
  return await response.json();
};

export const fetchPostData = async () => {
  const response = await fetch(
    "http://testingapi12023-001-site1.atempurl.com/places",
    {
      method: "POST",
    }
  );
  return await response.json();
};

export const fetchDeleteData = async () => {
  const response = await fetch(
    "http://testingapi12023-001-site1.atempurl.com/places",
    {
      method: "DELETE",
    }
  );
  return await response.json();
};
