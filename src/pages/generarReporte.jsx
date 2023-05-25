import "../styles/PagesStyles/generarReporte.css"
import DatePicker from "react-datepicker";
import { useState } from "react";
import { PDFViewer } from "@react-pdf/renderer";
import DocumentPDF from "../components/DocumentPDF";
import { UseFetch } from "../functions/useFetch";
export default function () {
    const [placa, setPlaca] = useState("");
    const [datae, setData] = useState();
    const [active, setActive] = useState(false);
    console.log(datae, "datpopos")
    const handlePlate = () => {
        fetch(`http://testingapi12023-001-site1.atempurl.com/Reserves/Plate/${placa}`)
            .then((response) => response.json())
            .then((datos) => {
                setData(datos)
                console.log(datos)
            })


    }

    return (
        <div className="containerReporte overflow-y-scroll">
            <h1>Generar Reporte</h1>
            <div className="cardReporte p-5 rounded h-100 mb-3">
                <div className="row w-100 me-0 ms-0 mb-5">



                    <div className="col d-flex justify-content-center row">
                        <input type="text" placeholder="Buscar placa" id="buscadorPlaca" className="w-25 me-3" name="placa" onChange={e => { setPlaca(e.target.value) }} />
                        <button type="button" class="btn botonReporte w-25" onClick={() => { handlePlate() }}>
                            <i class="fa-solid fa-magnifying-glass me-2"></i>
                            Buscar
                        </button>
                    </div>
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