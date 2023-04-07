import Button from "../components/Button";
import Table from "../components/Table";
import { useState, useEffect } from "react";
import "../styles/PagesStyles/ListaReserva.css";
import { useSelector } from "react-redux";
import axios from "axios";

export default function ListaReserva() {
  const selector = useSelector((state) => state.tasks);
  var idSeleccionado = selector[0];

  const [reservas, setReservas] = useState([]);
  const [loading, setLoading] = useState(false);

    const ordenar=(fecha)=>{
      console.log(fecha)
    }
  useEffect(() => {
    setLoading(false);
    axios({
      method: "GET",
      url: "http://testingapi12023-001-site1.atempurl.com/reserves",
    }).then((response) => {
      console.log(response, "respuesta");
      setReservas(response.data);
    });
  }, []);



  return (
    <div className="overflow-y-scroll containerListaReserva">
      <div className="p-2">
        <a href="/plazaReserva" className="text-decoration-none">
          <Button volverButton={true}>
            Volver
            <i class="fa-solid fa-arrow-left"></i>
          </Button>
        </a>
        <h1 className="text-center text-light">Plaza 1</h1>

        <div className="ms-5">
          {reservas.map((reserva) =>
           
            reserva.placeId == idSeleccionado.datos ? (
              <Table datos={reserva}></Table>
            ) : null
          )}
          {loading ? <div className="text-light">no hay reservas</div> : null}
        </div>
      </div>
    </div>
  );
}
