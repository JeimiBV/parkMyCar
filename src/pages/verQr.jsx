import React, { useState } from "react";
import "../styles/PagesStyles/Parqueo.css";
import { fetchData } from "../functions/fetchUsers";
import QRCode from "react-qr-code";
export default function VerQrdos() {  

  return (
    <div>
      
      <h1>Plazas Reservadas</h1>
      <div className="container">
        <div className="d-flex card cardH my-4 p-4">
          <div className="row">
          <h2>Codigo de pago</h2>
          <div className="d-flex justify-content-center">
            <header className="App-header">
                <QRCode value="Hola Mundo" size={256} bgColor="#282c34" fgColor="#fff" level="H" />
            </header>
      </div>
          </div>
          
          
          <div className="d-flex justify-content-end align-items-center">
            <div
              className="btn btn-primary m-2"
            >
              Verificar
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}
