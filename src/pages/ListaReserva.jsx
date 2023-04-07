import Button from "../components/Button";
import Table from "../components/Table"
import { useState,useEffect } from "react";
import "../styles/PagesStyles/ListaReserva.css"
import { useSelector } from "react-redux";
import axios from "axios";

export default function ListaReserva() {
  const selector= useSelector((state) => state.tasks)
  var idSeleccionado= selector[0]

  const [reservas, setReservas] = useState([]);
  const [reservaId, setReservaId] = useState([]);
  const[loading, setLoading]= useState(false);

  const buscarId= ()=>{
    let temp=[]
    reservas.map(reserva=>{
      if(reserva.placeId==idSeleccionado.datos){
        temp.push(reserva)
    }

    })
    setReservaId(temp)
  }

  useEffect(() => {
    setLoading(false)
    axios({
      method: 'GET',
      url: 'http://testingapi12023-001-site1.atempurl.com/reserves',
    }).then(response => {
      if (!response.data.error) {
        setReservas(response.data)
      } else {
        console.log(response.data.error[0]);
      }
    }).catch(error => {
      console.log(error);
    })
    .finally(()=>{ setLoading(true)})
    buscarId();
  }, []);


  
  console.log(loading,"d d")


  return (
    <div className="overflow-y-scroll containerListaReserva">
      <div className="p-2">
        <a href="/plazaReserva" className="text-decoration-none">
          <Button
            volverButton={true}>
            Volver
            <i class="fa-solid fa-arrow-left"></i>
          </Button>
        </a>
        <h1 className="text-center text-light">Plaza 1</h1>

        <div className="ms-5">
          {
            reservaId.map(reserva =>
              <Table
                datos={reserva}>
              </Table>)
          }
        </div>

      </div>
    </div>
  );
}
