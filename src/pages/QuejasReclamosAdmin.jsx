import { fetchGetSuggestions } from "../functions/fetchSuggestions";
import "../styles/PagesStyles/QuejasReclamosAdmin.css";

import React, { useState, useEffect } from "react";

const QuejasReclamosAdmin = () => {
  const [suggestions, setSuggestions] = useState([]);

  const getSuggestions = async () => {
    const suggestions = await fetchGetSuggestions();
    setSuggestions(suggestions);
  };
  
  useEffect(() => {
    getSuggestions();
  }, []);

  return (
    <div className="contenedorQ overflow-y-scroll">
      <div>
        <h1 className="text-light pb-4 d-flex justify-content-center">
          Sugerencias y reclamos de usuarios
        </h1>
        {suggestions.map((suggestion) => (
          <div className="cuadroQ p-3 row" key={suggestion.id}>
            <div className="col-3 text-center">
              <i class="fa-solid fa-circle-exclamation iconoClaim text-light"></i>
            </div>
            <div className="col-9 bg-light p-3 rounded">
              <h4 className="tituloUserA">Descripción: </h4>
              <div className="contenidoQuejaA">
                <text>{suggestion.description}</text>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuejasReclamosAdmin;
