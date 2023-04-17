import React, { useEffect, useState } from "react";
import "../styles/PagesStyles/Parqueo.css";

export default function CrearNotificacion() {
  const [descripcion, setDescripcion] = useState("");
  const [nombre, setNombre] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const handleChange = (event) => {
    const inputValue = event.target.value.replace(/[^\w\s.,!?¿¡]/gi, "");
    if (inputValue.length <= 200) {
      setDescripcion(inputValue);
    }
  };

  const handleInput = (event) => {
    const inputValue = event.target.value;
    const filteredSuggestions = iceCreamFlavors.filter(
      (flavor) => flavor.id.toLowerCase().indexOf(inputValue.toLowerCase()) > -1
    );
    setSuggestions(filteredSuggestions);
    setNombre(inputValue);
  };

  const handleSelectSuggestion = (event) => {
    const selectedSuggestion = iceCreamFlavors.find(
      (flavor) => flavor.id === event.target.value
    );
    setNombre(selectedSuggestion.name);
    setSuggestions([]);
  };

  const iceCreamFlavors = [
    { id: "112AJK", name: "Juan" },
    { id: "242KIL", name: "Luis" },
    { id: "312KIL", name: "Pedro" },
    { id: "489JUN", name: "Clara" },
    { id: "512LOP", name: "Piqué" },
  ];

  return (
    <div>
      <h1>Plazas</h1>
      <div class="container">
        <div class="d-flex card cardH my-4 p-4">
          <h3>Crear notificación</h3>
          <div class="row">
            <div class="d-flex row-1 py-2 col">
              <p class="me-5 fs-6 m-0 w-25">Para:</p>
              <input
                type="text"
                class=" w-100 h-100"
                value={nombre}
                onInput={handleInput}
                list="ice-cream-flavors"
              />
              <datalist id="ice-cream-flavors">
                {suggestions.map((flavor) => (
                  <option key={flavor.name} value={flavor.name}>
                    {flavor.id}
                  </option>
                ))}
              </datalist>
            </div>
            <div class="d-flex row-2 py-2">
              <p class="me-5 fs-6 m-0 w-25">Descripción:</p>
              <textarea
                value={descripcion}
                onChange={handleChange}
                class="w-100 h-100"
                maxLength="200"
              ></textarea>
              {/* <div class="description-counter">
                {200 - descripcion.length} caracteres restantes
              </div> */}
            </div>
          </div>
          <div class="d-flex justify-content-end align-items-center">
            <div class="btn btn-primary m-2">Publicar</div>
          </div>
        </div>
      </div>
    </div>
  );
}
