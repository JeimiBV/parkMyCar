import React, { useState } from "react";
import "../styles/PagesStyles/Parqueo.css";
import { fetchData } from "../functions/fetchUsers";
import { useNavigate } from "react-router-dom";
export default function RedactarMensaje() {
    const navigate = useNavigate()
  
  return (
    <div>
      <h1>Plazas Reservadas</h1>
      <div className="container">
        <div className="d-flex card cardH my-4 p-4">
          <div className="row">
          <h2>Informacion de la plaza</h2>
            <div className="my-2 col" >
              <h4 className="col"><i class="fas fa-car"></i> Parquear desde</h4>
              <div>
                <p>20/04/2023</p>
              </div>
              <h4 className="col"><i class="fas fa-car"></i> Parquear hasta</h4>
              <div>
                <p>20/04/2023</p>
              </div>
              <h5 className="col"><i class="fas fa-clock"></i>  Hora Entrada</h5>
              <div>
                <p>10:30</p>
              </div>
              <h5 className="col"><i class="fas fa-clock"></i>  Hora Salida</h5>
              <div>
                <p>16:30</p>
              </div>
              <h6 className="col"><i class="fas fa-square-parking"></i> Plaza</h6>
              <div>
                <p>13</p>
              </div>
              
              <div className="position-relative w-100">
                
                
              </div>
              <div className="ms-auto">
                <div>

                </div>
              </div>
            </div>
          </div>
          
          
          <div className="d-flex justify-content-end align-items-center">
            <div
              className="btn btn-primary m-2"
              onClick={() => navigate ("/verQr")}
            >
              Pagar 
            </div>
          </div>
        </div>
        <div className="d-flex card cardH my-4 p-4">
          <div className="row">
          <h2>Informacion de la plaza</h2>
            <div className="d-flex align-items-start mb-3 p-2 me-auto-2 py-3 row" >
              <h4 className="me-5 fs-6 m-0 w-25"><i class="fas fa-car"></i> Parquear desde</h4>
              <div>
                <p>21/04/2023</p>
              </div>
              <h4 className="me-5 fs-6 m-0 w-25"><i class="fas fa-car"></i> Parquear hasta</h4>
              <div>
                <p>21/04/2023</p>
              </div>
              <h5 className="me-5 fs-6 m-0 w-25"><i class="fas fa-clock"></i>  Hora Entrada</h5>
              <div>
                <p>12:00</p>
              </div>
              <h5 className="me-5 fs-6 m-0 w-25"><i class="fas fa-clock"></i>  Hora Salida</h5>
              <div>
                <p>16:00</p>
              </div>
              <h6 className="me-5 fs-6 m-0 w-25"><i class="fas fa-square-parking"></i> Plaza</h6>
              <div>
                <p>1</p>
              </div>
              
              
              <div className="ms-auto">
                <div>

                </div>
              </div>
            </div>
          </div>
                    
          <div className="d-flex justify-content-end align-items-center">
          <div
              className="btn btn-primary m-2"
              onClick={() => navigate ("/verQr")}
            >
              Pagar 
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
