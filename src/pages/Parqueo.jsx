import React, { useState } from "react";
import "../styles/PagesStyles/Parqueo.css";
import BloqueP from "../components/BloqueP";

function Parqueo() {
    
  const [plazasAuto, setPlazasAuto] = useState(
    Array(24)
      .fill({ disponible: true, existe: true })
      .concat(Array(12).fill({ disponible: true, existe: false }))
  );
  const [plazasMotos, setPlazasMotos] = useState(
    Array(12).fill({ disponible: true, existe: true })
  );
  const [totalPlazas, setTotalPlazas] = useState(24);
  const [entrada, setEntrada] = useState("");
  const [salida, setSalida] = useState("");

  const addBlock = () => {
    const newPlazas = plazasAuto.map((plaza, i) =>
      i === totalPlazas || i === totalPlazas + 1
        ? { ...plaza, existe: true }
        : plaza
    );
    setTotalPlazas(totalPlazas + 2);
    setPlazasAuto(newPlazas);
  };

  const removeBlock = () => {
    const newPlazas = plazasAuto.map((plaza, i) =>
      i === totalPlazas - 2 || i === totalPlazas - 1
        ? { ...plaza, existe: false }
        : plaza
    );
    setTotalPlazas(totalPlazas - 2);
    setPlazasAuto(newPlazas);
  };

  const handleEntradaChange = (event) => {
    setEntrada(event.target.value);
  };

  const handleSalidaChange = (event) => {
    setSalida(event.target.value);
  };

  return (
    <div className="overflow-y-scroll parqueo-container vertical-line ">
      <h1 className="h1 text-light">Plazas</h1>
      <div className="buscadores">
        <div className="buscador">
          <input
            type="text"
            value={entrada}
            onChange={handleEntradaChange}
            placeholder="Hora de entrada"
          />
        </div>
        <div className="buscador">
          <input
            type="text"
            value={salida}
            onChange={handleSalidaChange}
            placeholder="Hora de salida"
          />
        </div>
      </div>
      <div className="container blocks">
      <div className="row">
        <BloqueP
          plazas={plazasAuto}
          space={0}
          tittle={"Automovil"}
          setPlazas={setPlazasAuto}
        />
        <BloqueP
          plazas={plazasAuto}
          space={12}
          tittle={"Automovil"}
          setPlazas={setPlazasAuto}
        />
      </div>

      {totalPlazas == 24 && (
        <div className="row">
          <div className="col-12 d-flex justify-content-end px-5">
            <button
              className="botonMas m-1"
              disabled={totalPlazas === 36}
              onClick={addBlock}
            >
              +
            </button>
            <button
              className="botonMas m-1"
              disabled={totalPlazas === 24}
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
            >
              -
            </button>
          </div>
        </div>
      )}

      <div className="row mt-5">
        {totalPlazas > 24 && (
          <BloqueP
            plazas={plazasAuto}
            space={24}
            tittle={"Automovil"}
            setPlazas={setPlazasAuto}
          />
        )}
        <BloqueP
          plazas={plazasMotos}
          space={0}
          tittle={"Motocicletas"}
          setPlazas={setPlazasMotos}
        />
      </div>

      {totalPlazas > 24 && (
        <div className="row">
          <div className="col-12 d-flex add-plazas">
            <button
              className="botonMas m-1"
              disabled={totalPlazas === 36}
              onClick={addBlock}
            >
              +
            </button>
            <button className="botonMas m-1" disabled={totalPlazas === 24} data-bs-toggle="modal"
              data-bs-target="#staticBackdrop">
              -
            </button>
          </div>
        </div>
      )}
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
              <h1 class="modal-title fs-5" id="staticBackdropLabel">
                Eliminar plaza
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">¿Estas seguro de elminar las 2 plazas?</div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal" 
              >
                No, cancelar
              </button>
              <button type="button" class="btn btn-primary" onClick={removeBlock} data-bs-dismiss="modal" >
                Si, aceptar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Parqueo;
