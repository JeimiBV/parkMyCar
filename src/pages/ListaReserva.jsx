import Button from "../components/Button";
import Table from "../components/Table";
import { useState, useEffect } from "react";
import "../styles/PagesStyles/ListaReserva.css";
import { useSelector } from "react-redux";
import axios from "axios";

export default function ListaReserva() {
  const [reservas, setReservas] = useState([]);
  const [loading, setLoading] = useState(false);
  const selector = useSelector((state) => state.tasks);
  console.log(selector,"sssssssssssssssssssssss")
  useEffect(() => {
    setLoading(false);
    axios({
      method: "GET",
      url: `http://testingapi12023-001-site1.atempurl.com/reserves/history?placeId=${selector.id}`,
    }).then((response) => {
      setReservas(response.data);
    });
  }, []);
  console.log(selector,"esta es la reserva")
  return (
    <div className="overflow-y-scroll  containerListaReserva">
      <div className="p-2">
        <a href="/plazaReserva" className="text-decoration-none ">
          <Button volverButton={true}>
            Volver
            <i class="fa-solid fa-arrow-left"></i>
          </Button>
        </a>
        <h1 className="text-center text-light fs-1 fs-md-0">Plaza {selector.id}</h1>

        <div className="ms-md-5 ms-3">
          {reservas.map((reserva) => (
            <Table datos={reserva}></Table>
          ))}
          {loading ? <div className="text-light">no hay reservas</div> : null}
        </div>
      </div>
    </div>
  );
}
