export const fetchPlaces = async () => {
  const response = await fetch(
    "http://parkmycar-001-site1.atempurl.com/places"
  );
  return await response.json();
};

export const fetchReserves = async () => {
  const response = await fetch(
    "http://parkmycar-001-site1.atempurl.com/reserves"
  );
  return await response.json();
};

export const fetchCreatePlace = async () => {
  const response = await fetch(
    "http://parkmycar-001-site1.atempurl.com/places",
    { method: "POST" }
  );
  return await response.json();
};

export const fetchDeletePlace = async () => {
  const response = await fetch(
    "http://parkmycar-001-site1.atempurl.com/places",
    { method: "DELETE" }
  );
  return await response.json();
};

export const fetchPlaceHistory = async () => {
  const response = await fetch(
    "http://parkmycar-001-site1.atempurl.com/placeHistory"
  );
  return await response.json();
};

export const fetchHidePlace = async (num) => {
  const response = await fetch(
    `http://parkmycar-001-site1.atempurl.com/places/hide/${num}`,
    {
      method: "PATCH",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }
  );
  return await response.json();
};

export const fetchShowPlace = async (num) => {
  const response = await fetch(
    `http://parkmycar-001-site1.atempurl.com/places/show/${num}`,
    {
      method: "PATCH",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }
  );
  console.log(await response.json(), "api");
  return await response.json();
};
