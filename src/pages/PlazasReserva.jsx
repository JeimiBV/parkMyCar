import "../styles/PagesStyles/PlazasReserva.css";
import { useState } from "react";
import Bloque from "../components/Bloque";
import { useSelector } from "react-redux";
import Axios from "axios";
import { useEffect } from "react";

export default function () {
  //const taskState = useSelector(state => state.tasks)
  const [bloques, setBloques] = useState([]);
  let array = [];

  const fetchData = () => {
    fetch("http://parkmycar-001-site1.atempurl.com/places")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setBloques(data);
      });
  };
 

  useEffect(() => {
    /*Axios({
      method: 'GET',
      url: 'http://testingapi12023-001-site1.atempurl.com/places',
    }).then(response => {
      if (!response.data.error) {
        setBloques(response.data)
      } else {
        console.log(response.data.error[0]);
      }
    }).catch(error => {
      console.log(error);
    });
    fetch("http://testingapi12023-001-site1.atempurl.com/places")
      .then(response => response.json())
      .then(data => setBloques(data))*/
    fetchData();
  }, []);



  for (let i = 0; i < bloques.length; i += 12) {
    const grupo = bloques.slice(i, i + 12);
    array.push(grupo);
  }
  //console.log(array)
  return (
    <div className="overflow-y-scroll  containerPlazas row d-flex justify-content-center">
      <h1 className=" text-center mt-4 text-light "> Historial de reservas</h1>
      {
        array.map((newArray) => (
          <div className="col-12 col-sm-6 col-md-4 ms-4 ms-md-0">
            <Bloque
              espacios={newArray} />
          </div>
        ))
      }
    </div>
  );
}
