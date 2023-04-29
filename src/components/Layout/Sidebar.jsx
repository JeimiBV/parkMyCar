import "../../styles/Sidebar.css";

export default function SideBar({ cambiarE, nombreUsuario, rol }) {
  return (
    <div className="main d-lg-inline d-none pt-2 ">
      <div className=" d-flex flex-column justify-content-between contenidoSide">
        <ul>
          {rol == "seguridad" || "cliente" ? (
            <div className="opcion">
              <a href="/parqueo" className="text-decoration-none">
                <div className="d-flex py-3 text-decoration-none text-light align-items-center">
                  <i class="fa-solid fa-square-parking fs-1 me-3 opciones"></i>
                  <h3 className="opciones fs-5">Plazas</h3>
                </div>
              </a>
            </div>
          ) : (
            <></>
          )}

          {rol == "seguridad" ? (
            <div className="opcion">
              <a href="/plazaReserva" className="text-decoration-none">
                <div className="d-flex py-3  text-decoration-none text-light align-items-center">
                  <i class="fa-solid fa-calendar-days fs-1 me-3 opciones"></i>
                  <h3 className="opciones fs-5">Reservas</h3>
                </div>
              </a>
            </div>
          ) : (
            <></>
          )}
          {rol == "seguridad" ? (
            <div className="opcion">
              <a href="/crearNotificacion" className="text-decoration-none">
                <div className="d-flex py-3  text-decoration-none text-light align-items-center">
                  <i class="fa-solid fa-bell fs-1 me-3 opciones"></i>
                  <h3 className="opciones fs-5">Notificaciones</h3>
                </div>
              </a>
            </div>
          ) : (
            <></>
          )}
          {rol == "seguridad" ? (
            <div className="opcion">
              <a href="/editarHorario" className="text-decoration-none">
                <div className="d-flex py-3  text-decoration-none text-light align-items-center">
                  <i class="fa-solid fa-calendar-check fs-1 me-3 opciones"></i>
                  <h3 className="opciones fs-5">Editar horario atencion</h3>
                </div>
              </a>
            </div>
          ) : (
            <></>
          )}
          {rol == "seguridad" ? (
            <div className="opcion">
              <a href="/reclamosAdmin" className="text-decoration-none">
                <div className="d-flex py-3  text-decoration-none text-light align-items-center">
                  <i class="fa-solid fa-envelope-circle-check fs-1 me-3 opciones"></i>
                  <h3 className="opciones fs-5">Quejas o Reclamos</h3>
                </div>
              </a>
            </div>
          ) : (
            <></>
          )}
          {rol == "seguridad" ? (
            <div className="opcion">
              <a href="/reclamosUser" className="text-decoration-none">
                <div className="d-flex py-3  text-decoration-none text-light align-items-center">
                  <i class="fa-solid fa-envelope-open-text fs-1 me-3 opciones"></i>
                  <h3 className="opciones fs-5">Realizar reclamo</h3>
                </div>
              </a>
            </div>
          ) : (
            <></>
          )}
          {rol == "seguridad" ? (
            <div className="opcion">
              <a href="/registrarGuardia" className="text-decoration-none">
                <div className="d-flex py-3  text-decoration-none text-light align-items-center">
                  <i class="fa-solid fa-person-military-pointing fs-1 me-3 opciones"></i>
                  <h3 className="opciones fs-5">Reistrar guardia</h3>
                </div>
              </a>
            </div>
          ) : (
            <></>
          )}
        </ul>
        <section className="text-light fs-4 px-1 py-2 logOutButton ">
          <div className="row py-2">
            <i class="fa-sharp fa-regular fa-circle-user text-light fs-1 ms-2  col-3"></i>
            <h4 className="col-8 ">{nombreUsuario}</h4>
          </div>

          <button
            className="btn text-light  cerrarButton"
            onClick={() => {
              cambiarE();
            }}
          >
            Cerrar sesión
          </button>
        </section>
      </div>
    </div>
  );
}
