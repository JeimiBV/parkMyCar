export const fetchData = async () => {
  const response = await fetch(
    "http://parkmycar-001-site1.atempurl.com/users"
  );
  return await response.json();
};

export const EditData = async (id, newName, newNit, newPhone, newEmail) => {
  const userData = {
    name: newName,
    email: newEmail,
    nit: newNit,
    phone: newPhone,
  };
  const response = await fetch(
    `http://parkmycar-001-site1.atempurl.com/users/${id}`,
    {
      method: "PUT",
      body: JSON.stringify(userData),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }
  );
  return response; //TO IMPROVE. There is nothing receiving.
};

export const DeleteData = async (id) => {
  const response = await fetch(
    `http://parkmycar-001-site1.atempurl.com/users/${id}`,
    {
      method: "DELETE",
    }
  );
  return await response.json();
};

export const fetchClients = async () => {
  const response = await fetch(
    "http://parkmycar-001-site1.atempurl.com/users/client"
  );
  return await response.json();
};

export const fetchGuards = async () => {
  const response = await fetch(
    "http://parkmycar-001-site1.atempurl.com/users/guard"
  );
  return await response.json();
};
