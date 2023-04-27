import React, { useState } from "react";
import "../styles/PagesStyles/Parqueo.css";

export default function RedactarMensaje() {
  const [nombreDestinatarios, setNombreDestinatarios] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [destinatarios, setDestinatarios] = useState([]);

  const handleChange = (event) => {
    const inputValue = event.target.value.replace(/[^\w\s.,!?¿¡]/gi, "");
    if (inputValue.length <= 200) {
      setDescripcion(inputValue);
    }
  };

  const handleInput = (event) => {
    const inputValue = event.target.value;

    // Filtrar los contactos que no han sido agregados como destinatarios
    const filteredContacts = contacts.filter((contact) => {
      const isAlreadySelected = destinatarios.includes(contact.email);
      const matchesInput =
        contact.name.toLowerCase().indexOf(inputValue.toLowerCase()) > -1 ||
        contact.email.toLowerCase().indexOf(inputValue.toLowerCase()) > -1;
      return !isAlreadySelected && matchesInput;
    });

    setSuggestions(filteredContacts);
    setNombreDestinatarios(inputValue);
  };

  const handleSelectSuggestion = (selectedSuggestion) => {
    if (selectedSuggestion.email === "todos@example.com") {
      const allEmails = contacts.map((contact) => contact.email);
      setDestinatarios(allEmails);
    } else if (!destinatarios.includes(selectedSuggestion.email)) {
      setDestinatarios([...destinatarios, selectedSuggestion.email]);
    }
    setNombreDestinatarios("");
    setSuggestions([]);
  };

  const handleAddDestinatario = (email) => {
    if (!destinatarios.includes(email)) {
      setDestinatarios([...destinatarios, email]);
      setNombreDestinatarios("");
      setSuggestions([]);
    }
  };

  const handleRemoveDestinatario = (index) => {
    const newDestinatarios = [...destinatarios];
    newDestinatarios.splice(index, 1);
    setDestinatarios(newDestinatarios);
  };

  const contacts = [
    { name: "Juan", email: "juan@example.com" },
    { name: "Luis", email: "luis@example.com" },
    { name: "Pedro", email: "pedro@example.com" },
    { name: "Clara", email: "clara@example.com" },
    { name: "Piqué", email: "pique@example.com" },
  ];

  return (
    <div>
      <h1>Crear notificación</h1>
      <div className="container">
        <div className="d-flex card cardH my-4 p-4">
          <div className="row">
            <div className="d-flex row-1 py-2 col">
              <p className="me-5 fs-6 m-0 w-25">Para:</p>
              <div className="position-relative w-100">
                <input
                  type="text"
                  className="w-100 h-100"
                  value={nombreDestinatarios}
                  onInput={handleInput}
                  list="contacts-list"
                />
                <datalist id="contacts-list">
                  {suggestions.map((contact) => (
                    <option key={contact.email} value={contact.email}>
                      {contact.name}
                    </option>
                  ))}
                </datalist>
                {suggestions.map((contact) => (
                  <button
                    key={contact.email}
                    className="btn btn-sm btn-outline-secondary position-absolute top-0 end-0 m-1"
                    onClick={() => handleSelectSuggestion(contact)}
                  >
                    +
                  </button>
                ))}
              </div>
              <div className="ms-auto">
                <div className="dropdown">
                  <button
                    className="btn btn-sm btn-outline-secondary dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Todos
                  </button>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li>
                      <button
                        className="dropdown-item"
                        onClick={() =>
                          setDestinatarios(
                            contacts.map((contact) => contact.email)
                          )
                        }
                      >
                        Seleccionar todos
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div>
            {destinatarios.map((destinatario, index) => (
              <span
                key={index}
                className="badge badge-secondary m-1 position-relative"
              >
                {destinatario}
                <button
                  className="btn-close position-absolute top-0 end-0 m-1"
                  onClick={() =>
                    setDestinatarios([
                      ...destinatarios.slice(0, index),
                      ...destinatarios.slice(index + 1),
                    ])
                  }
                ></button>
              </span>
            ))}
          </div>
          <div>
            <p class="me-5 fs-6 m-0 w-25">Descripción:</p>
            <textarea
              value={descripcion}
              onChange={handleChange}
              class="w-100 h-100"
              maxLength="200"
            ></textarea>
          </div>
          <div className="d-flex justify-content-end align-items-center">
            <div
              className="btn btn-primary m-2"
              onClick={() => console.log(destinatarios)}
            >
              Publicar
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
