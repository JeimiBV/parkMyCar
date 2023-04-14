import React, { useEffect, useState } from "react";
import "../styles/PagesStyles/Parqueo.css";
import { useNavigate } from "react-router-dom";

function Parqueo() {
  const [plazas, setPlazas] = useState([]);
  /*   const [entrada, setEntrada] = useState("");
  const [salida, setSalida] = useState("");
  const navigate = useNavigate();

  const handleClick = (index) => {
    const newPlazas = plazas.map((plaza, i) =>
      i === index ? { disponible: !plaza.disponible } : plaza
    );
    setPlazas(newPlazas);
    navigate("/reservas");
  };

  const handleEntradaChange = (event) => {
    setEntrada(event.target.value);
  };

  const handleSalidaChange = (event) => {
    setSalida(event.target.value);
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

      const tableRow = (
        <tr key={item1.id}>
          <td>{item1.id}</td>
          <td>{item1.type}</td>
          <td>{item1.isBusy ? "Yes" : "No"}</td>
          {item2 && (
            <>
              <td>{item2.id}</td>
              <td>{item2.type}</td>
              <td>{item2.isBusy ? "Yes" : "No"}</td>
            </>
          )}
        </tr>
      );
      tableRows.push(tableRow);
    }

    const table = (
      <table key={i}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Type</th>
            <th>Is Busy</th>
            <th>ID</th>
            <th>Type</th>
            <th>Is Busy</th>
          </tr>
        </thead>
        <tbody>{tableRows}</tbody>
      </table>
    );
    tables.push(table);
  }

  return <div className="tables-container">{tables}</div>;
}

export default Parqueo;
