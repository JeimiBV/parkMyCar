import "../styles/Container.css";

export default function Container({ children }) {
  return (
    <>
      <div className="contenedorC">
        {children}
        <div>
          <h1 className="h1">GESTIONAR</h1>
          <div className="formulario">
            Numero de bloques de autos:
            <select class="form-select" aria-label="Default select example">
              <option selected>Seleccione</option>
              <option value="1">Uno</option>
              <option value="2">Dos</option>
              <option value="3">Tres</option>
            </select>
            <p className="p">Capacidad de autos en cada bloque:</p>
            <div class="container text-center">
              <div class="row align-items-center">
                <div class="col">Bloque 1</div>
                <div class="col">Bloque 2</div>
                <div class="col">Bloque 3</div>
              </div>
            </div>
          </div>
          <div className="formulario">
            Cantidad plazas especiales:
            <p className="p">Capacidad de plazas en cada bloque:</p>
            <p>Bloque 1</p>
          </div>

          <div className="formulario">
            Capacidad de motos:
            <p className="p">Guardar</p>
          </div>
        </div>
      </div>
    </>
  );
}
