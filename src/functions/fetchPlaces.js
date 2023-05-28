export const fetchPlaces = async () => {
  const response = await fetch(
    "http://testingapi12023-001-site1.atempurl.com/places"
  );
  return await response.json();
};

export const fetchReserves = async () => {
  const response = await fetch(
    "http://testingapi12023-001-site1.atempurl.com/reserves"
  );
  return await response.json();
};

export const fetchCreatePlace = async () => {
  const response = await fetch(
    "http://testingapi12023-001-site1.atempurl.com/places",
    { method: "POST" }
  );
  return await response.json();
};

export const fetchDeletePlace = async () => {
  const response = await fetch(
    "http://testingapi12023-001-site1.atempurl.com/places",
    { method: "DELETE" }
  );
  return await response.json();
};

export const fetchPlaceHistory = async () => {
  const response = await fetch(
    "http://testingapi12023-001-site1.atempurl.com/placeHistory"
  );
  return await response.json();
};
