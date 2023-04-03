import "../styles/Gestionar.css";
import React, { useState } from "react";

const Gestionar = () => {
  const [selectActivo, setSelectActivo] = useState(false);
  

  const handleChangeOpcion=e=>{
    console.log(e.target.value);

    if(e.target.value == "Si"){
      setSelectActivo(true);
   }else{
     setSelectActivo(false);
   }
  }

  


  return (
    <div className="contenedorG" >
      <h1 className="titulo ">GESTIONAR</h1>
      <div className="formularioF">
        <div className="">
          Número de plazas a aumentar: <span className="" />
          <select className="op" id="opciones1">
            <option value="">Seleccionar</option>
            <option value="2">2</option>
            <option value="4">4</option>
            <option value="6">6</option>
            <option value="8">8</option>
            <option value="10">10</option>
            <option value="12">12</option>
          </select>
        </div>

        <br />

        <div className="">
          Incluir plazas especiales <span className=""/>
          <select className="op" id="opciones2" onChange={handleChangeOpcion} >
            <option value="">Seleccionar</option>
            <option value="Si">Si</option>
            <option value="No">No</option>
          </select>
        </div>

        <br />

        <div className="">
          Número de plazas especiales a aumentar: <span className="" />
          <select className="op" disabled={!selectActivo} id="opciones3">
            <option value="">Seleccionar</option>
            <option value="2">2</option>
            <option value="4">4</option>
            <option value="6">6</option>
            <option value="8">8</option>
            <option value="10">10</option>
            <option value="12">12</option>
          </select>
        </div>
        <br />
        <br />

        <button className="botonGuardar" id="btn">
          {" "}
          Guardar <span className="" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="white"
            class="bi bi-save2"
            viewBox="0 0 16 16"
          >
            <path d="M2 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H9.5a1 1 0 0 0-1 1v4.5h2a.5.5 0 0 1 .354.854l-2.5 2.5a.5.5 0 0 1-.708 0l-2.5-2.5A.5.5 0 0 1 5.5 6.5h2V2a2 2 0 0 1 2-2H14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h2.5a.5.5 0 0 1 0 1H2z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Gestionar;