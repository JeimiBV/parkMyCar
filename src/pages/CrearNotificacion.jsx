import React, { useState, useEffect } from "react";
import Select from "react-select";
import "../styles/PagesStyles/CrearNotificacion.css";
import reserves from "../../public/data/reservas.json";

const CrearNotificacion = () => {
  const [reserves, setReserves] = useState([]);

  useEffect(() => {
    fetch("../../public/data/reservas.json")
      .then((response) => response.json())
      .then((data) => setReserves(data.reserves));
  }, []);

  const optionsMapped = reserves.map((reserve) => ({
    value: reserve.phone,
    label: `${reserve.phone} - ${reserve.plate}`,
  }));

  const [text, setText] = useState("");
  const [options, setOptions] = useState([]);

  useEffect(() => {
    setOptions(optionsMapped);
  }, [reserves]);

  const handleChange = (event) => {
    let inputText = event.target.value;
    inputText = inputText.replace(/[^a-zA-Z0-9]/g, "").substr(0, 150);
    setText(inputText);
  };
  console.log(options);

  const handleOption = (state) => {
    setOptions(state);
  };

  return (
    
    <div className="contenedorNot">
      <div className="tituloNoti">Crear Notificación</div>
      <h3 className="tituloPara">Para: </h3>

      <div className="contSelect">
        <Select
          className="opcionesNot"
          options={[{ label: "Select All", value: "all" }, ...optionsMapped]}
          value = {options}
          isMulti
          onChange={(selected) => {
            selected.length && selected.find((opt) => opt.value === "all")
              ? setOptions(optionsMapped.slice(0))
              : setOptions(selected);
          }}
        />
      </div>

      <div>
        <h3 className="tituloDes">Descripcion: </h3>

        <div className="contDes">
          <textarea
            value={text}
            className="form-control Descripcion "
            placeholder="Escriba el mensaje"
            id="floatingTextarea2"
            onChange={handleChange}
          ></textarea>
          <div className="m-2">
            <button
              type="button"
              className="btn btn-primary botonDes"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
            >
              Enviar
            </button>
          </div>
        </div>
      </div>

      <div
        class="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1
                class="modal-title fs-5 "
                id="staticBackdropLabel"
                style={{ color: "black" }}
              >
                Enviar Mensaje
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">¿Estas seguro de enviar el mensaje?</div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cerrar
              </button>
              <button
                type="button"
                class="btn btn-primary"
                data-bs-dismiss="modal"
              >
                Si, aceptar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CrearNotificacion;
