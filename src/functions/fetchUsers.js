export const fetchData = async () => {
  const response = await fetch(
    "http://testingapi12023-001-site1.atempurl.com/users"
  );
  return await response.json();
};

export const EditData = async (id, newName, newNit, newPhone, newEmail) => {
  const userData = {
    name: newName,
    nit: newNit,
    phone: newPhone,
    email: newEmail,
  };
  const response = await fetch(
    `http://testingapi12023-001-site1.atempurl.com/users/${id}`,
    { method: "PUT", body: JSON.stringify(userData) }
  );
  return await response.json();
};

export const DeleteData = async () => {
  const response = await fetch(
    "http://testingapi12023-001-site1.atempurl.com/users"
  );
  return await response.json();
};
