import "../styles/PagesStyles/generarReporte.css"

import DatePicker from "react-datepicker";
import DocumentPDF from "../components/DocumentPDF";

import { useRef, useState } from "react";
import { PDFViewer } from "@react-pdf/renderer";

export default function () {
    const [dateEntrada, setDateEntrada] = useState(new Date());
    const [dateSalida, setDateSalida] = useState(new Date());
    const [placa, setPlaca] = useState("");
    const [datae, setData] = useState();
    const datos = useRef("");


    const handlePlate = () => {
        fetch(`http://parkmycar-001-site1.atempurl.com/Reserves/Plate/${datos.current.value}`)
            .then((response) => response.json())
            .then((datos) => {
                setData(datos)
                console.log(datae)
            })
    }

    return (
        <div className="containerReporte overflow-y-scroll">
            <h1>Generar Reporte</h1>
            <div className="cardReporte p-5 rounded h-100 mb-3">

                <div className="row w-100 me-0 ms-0 mb-5">

                    <div className="col-md-4 row d-flex justify-content-center align-items-center">
                        <label className="col"> inicial</label>
                        <div className="col">
                            <DatePicker
                                selected={dateEntrada}
                                onChange={(date) => {
                                    setDateEntrada(date);
                                }}
                                showTimeSelect
                                timeFormat="HH:mm"
                                timeIntervals={60}
                                timeCaption="Hora"
                                dateFormat="Pp"
                                locale="vi"
                                className="bg-date p-2 rounded"
                            />
                        </div>
                    </div>

                    <div className="col-md-4  row d-flex align-items-center">
                        <label className="col-md-3"> final</label>
                        <div className="col">
                            <DatePicker
                                selected={dateSalida}
                                onChange={(date) => {
                                    setDateSalida(date);

                                }}
                                showTimeSelect
                                timeFormat="HH:mm"
                                timeIntervals={60}
                                timeCaption="Hora"
                                dateFormat="Pp"
                                locale="vi"
                                className="bg-date p-2 rounded"

                            />
                        </div>
                    </div>
                    <input type="text" placeholder="Buscar nombre o placa" id="buscadorPlaca" ref={datos} className="col-md-2 " name="placa" onChange={e => {
                        //setPlaca(e.target.value)
                        console.log(datos.current.value, "ref")
                    }} />
                    <button type="button" class="btn botonReporte col-md-2 ms-1" onClick={() => { handlePlate() }}>
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