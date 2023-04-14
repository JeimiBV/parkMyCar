import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "../styles/PagesStyles/Parqueo.css";
import TableRow from "./TableRow";

function Parqueo() {
  const [plazas, setPlazas] = useState([]);
  const [entrada, setEntrada] = useState("");
  const [salida, setSalida] = useState("");

  const handleEntradaChange = (event) => {
    setEntrada(event.target.value);
  };

  const handleSalidaChange = (event) => {
    setSalida(event.target.value);
  };

  /*const navigate = useNavigate();

  const handleClick = (index) => {
    const newPlazas = plazas.map((plaza, i) =>
      i === index ? { disponible: !plaza.disponible } : plaza
    );
    setPlazas(newPlazas);
    navigate("/reservas");
  };


  }; */

  const fetchData = () => {
    fetch("http://testingapi12023-001-site1.atempurl.com/places")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setPlazas(data);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const tables = [];

  for (let i = 0; i < plazas.length; i += 12) {
    const tableRows = [];

    for (let j = i; j < i + 12 && j < plazas.length; j += 2) {
      const item1 = plazas[j];
      const item2 = j + 1 < plazas.length ? plazas[j + 1] : null;

      const tableRow = <TableRow key={i} item1={item1} item2={item2} />;
      tableRows.push(tableRow);
    }

    const table = (
      <table key={i}>
        <thead>
          <tr>
            <th colSpan="2" className="tittleCentered">
              Automovil
            </th>
          </tr>
        </thead>
        <tbody>{tableRows}</tbody>
      </table>
    );
    tables.push(table);
  }

  return (
    <div>
      <h1>Plazas</h1>
      <div className="buscadores">
        <div className="buscador">
          <input
            type="text"
            value={entrada}
            onChange={handleEntradaChange}
            placeholder="Hora de entrada"
          />
        </div>
        <div className="buscador">
          <input
            type="text"
            value={salida}
            onChange={handleSalidaChange}
            placeholder="Hora de salida"
          />
        </div>
      </div>
      <div className="tables-container">{tables}</div>
    </div>
  );
}

export default Parqueo;
