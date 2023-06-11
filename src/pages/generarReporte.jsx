import "../styles/PagesStyles/generarReporte.css"

import DatePicker from "react-datepicker";
import DocumentPDF from "../components/DocumentPDF";

import { useState } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { PDFViewer } from "@react-pdf/renderer";
import { postReporte } from "../functions/useFetch";

export default function () {
    const [dateEntrada, setDateEntrada] = useState(new Date());
    const [busqueda, setBusqueda] = useState({
         buscar:"name",
        placeholder:"buscar por nombre",
        url:"name"
    });
    const [dataForm, setDataForm] = useState({
       
    });
    const [datae, setData] = useState();

    const handleNotification = () => {
        toast.warning('¡Las fechas no son válidas!', { autoClose: 2000 });
    };

    const llenarForm = (e) => {
        setDataForm({ ...dataForm, [e.target.name]: e.target.value })
    }

    const handlePost = async () => {
        if (dataForm.toDate > dataForm.fromDate) {
            setData(await postReporte(`http://parkmycar-001-site1.atempurl.com/Reserves/${busqueda.url}`, dataForm))
        }
        else {
            handleNotification()
        }
    };

    return (
        <div className="containerReporte overflow-y-scroll">
            <h1>Generar Reporte</h1>
            <div className="cardReporte p-5 rounded h-100 mb-3">

            <div class="dropdown dropDown" >
                        <button class="btn dropDown rounded dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Buscar por
                        </button>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" name="placa" 
                            onClick={()=>{setBusqueda({buscar:"plateId", placeholder:"Buscar por placa", url:"Plate"})}} >Placa</a></li>
                            <li><a class="dropdown-item" name="nombre"
                            onClick={()=>{setBusqueda({buscar:"name", placeholder:"Buscar por Nombre", url:"name"})}}>Nombre</a></li>
                            <li><a class="dropdown-item" name="plaza" 
                            onClick={()=>{setBusqueda({buscar:"placeId", placeholder:"Buscar por plaza", url:"place"})}}>Plaza</a></li>
                        </ul>
                    </div>
                <div className="row w-100 me-0 ms-0 mb-5">

                    

                    <div className="col-md-4 row d-flex justify-content-center align-items-center">
                        <label className="col-md-5"> Fecha inicial</label>
                        <div className="col">
                            <input
                                type="date"
                                name="fromDate"
                                onChange={e => llenarForm(e)}
                                className="bg-date p-2 rounded"
                            />
                        </div>
                    </div>

                    <div className="col-md-4  row d-flex align-items-center">
                        <label className="col-md-4">Fecha final</label>
                        <div className="col">
                            <input
                                type="date"
                                name="toDate"
                                selected={dateEntrada}
                                onChange={e => llenarForm(e)}
                                className="bg-date p-2 rounded"
                                max="2023-06-10"
                            />
                        </div>
                    </div>
                    <input type="text"
                        placeholder={busqueda.placeholder}
                        id="buscadorPaca"
                        className="col-md-2 "
                        name={busqueda.buscar}
                        required
                        
                        onChange={e => {
                            llenarForm(e)
                        }} />
                    <button type="button" class="btn botonReporte col-md-2 ms-2" onClick={() => { handlePost() }}>
                        <i class="fa-solid fa-magnifying-glass me-2"></i>
                        Buscar
                    </button>
                </div>
                {datae ?
                    <PDFViewer style={{ width: "100%", height: "80%" }}>
                        <DocumentPDF
                            datae={datae}
                        ></DocumentPDF>
                    </PDFViewer> : <>
                        Ingrese la placa del vehiculo del cual quiere hacer seguimiento
                    </>
                }

            </div>
        </div>
    );
}