import "../styles/PagesStyles/generarReporte.css"
import DatePicker from "react-datepicker";
import { useState } from "react";
import { PDFViewer } from "@react-pdf/renderer";
import DocumentPDF from "../components/DocumentPDF";
export default function () {
    const [dateEntrada, setDateEntrada] = useState(new Date());
    const [dateSalida, setDateSalida] = useState(new Date());
    return (
        <div className="containerReporte overflow-y-scroll">
            <h1>Generar Reporte</h1>
            <div className="cardReporte p-5 rounded h-100 mb-3">
                <div className="row w-100 me-0 ms-0 mb-5">
                    <div className="col row d-flex justify-content-center align-items-center">
                        <label className="col">Fecha inicial</label>
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

                    <div className="col row d-flex justify-content-center align-items-center">
                        <label className="col">Fecha final</label>
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

                    <div className="col d-flex justify-content-center row">
                        <button type="button" class="btn botonReporte w-50">
                            <i class="fa-solid fa-magnifying-glass me-2"></i>
                            Buscar
                        </button>
                    </div>
                </div>
                <PDFViewer style={{ width: "100%", height: "80%" }}>
                    <DocumentPDF></DocumentPDF>
                </PDFViewer>







            </div>
        </div>
    );
}