import "../../styles/Navbar.css";

export default function Navbar({ logIn, showButton, cambiarE, nombreUsuario, rol }) {
  return (
    <div className="navegador d-flex fixed-top">
      <nav class="navbar navbar-expand-lg container-fluid d-flex ">
        <div class="container-fluid ">
          <a href="/">
            <img src="logo.png" width={190} height={60}></img>
          </a>

          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i class="fa-sharp fa-solid fa-bars text-light"></i>
          </button>
          <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0 ">
              <li class="nav-item d-none d-md-inline">
                {logIn  ?<div className="d-flex align-items-center ">
                </div> :
                
                  <div className="d-flex align-items-center">
                  <a href="/registroUsuario" className="btn text-light mt-3 me-5 accederButton fs-4">Crear cuenta</a>
                    <a href="/inicioS" className="btn text-light mt-3 me-5 accederButton fs-4">Acceder</a>
                  </div>
                }
              </li>
            </ul>
            {
              logIn? <div className=" d-flex flex-column justify-content-between contenidoSide d-lg-none navbar-nav overflow-y-auto overflow-x-hidden">
              <ul>
                {rol=="seguridad" || rol=="admin" || rol=="client" ? (
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
      
                {rol == "seguridad" || rol== "admin"? (
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
                {rol == "admin" ? (
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
                {rol == "admin" ? (
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
                {rol == "admin" ? (
                  <div className="opcion">
                    <a href="/reclamosAdmin" className="text-decoration-none">
                      <div className="d-flex py-3  text-decoration-none text-light align-items-center">
                        <i class="fa-solid fa-envelope-circle-check fs-1 me-3 opciones"></i>
                        <h3 className="opciones fs-5">Sugerencias y reclamos</h3>
                      </div>
                    </a>
                  </div>
                ) : (
                  <></>
                )}
                {rol == "client" ? (
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
                {rol == "admin" ? (
                  <div className="opcion">
                    <a href="/registrarGuardia" className="text-decoration-none">
                      <div className="d-flex py-3  text-decoration-none text-light align-items-center">
                        <i class="fa-solid fa-person-military-pointing fs-1 me-3 opciones"></i>
                        <h3 className="opciones fs-5">Registrar guardia</h3>
                      </div>
                    </a>
                  </div>
                ) : (
                  <></>
                )}
      
               {rol=="client"? (<div>
              <a href="/MisReservas" className="text-decoration-none">
                  <div className="d-flex py-3 opcion text-decoration-none text-light align-items-center">
                    <i class="fa-solid fas fa-grip fs-1 me-3 opciones"></i>
                    <h3 className="opciones fs-5">Mis Reservas</h3>
                  </div>
                </a>
              </div>):(<></>)}
      
              {rol == "admin" ? (
                  <div className="opcion">
                    <a href="/generarReporte" className="text-decoration-none">
                      <div className="d-flex py-3  text-decoration-none text-light align-items-center">
                        <i class="fa-solid fa-envelope-open-text fs-1 me-3 opciones"></i>
                        <h3 className="opciones fs-5">Generar Reporte</h3>
                      </div>
                    </a>
                  </div>
                ) : (
                  <></>
                )}
      
                {rol == "admin" ? (
                  <div className="opcion">
                    <a href="/administrarInfo" className="text-decoration-none">
                      <div className="d-flex py-3  text-decoration-none text-light align-items-center">
                        <i class="fa-sharp fa-solid fa-users-gear fs-1 me-3 opciones"></i>
                        <h3 className="opciones fs-5">
                          Administrar información cliente
                        </h3>
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
            </div>:
            <ul className="d-lg-none navbar-nav">
            <li>
              <a href="/registroUsuario" className="text-decoration-none">
                <div className="d-flex py-3 text-decoration-none text-dark opcionesN">
                <i class="fa-solid fa-user-plus fs-1 me-3 opcionesN"></i>
                  <h3 className="opciones text-light">Crear cuenta</h3>
                </div>
              </a>
            </li>

            <li>
              <a href="/inicioS" className="text-decoration-none">
                <div className="d-flex py-3  text-decoration-none text-dark opcionesN">
                <i class="fa-solid fa-right-to-bracket fs-1 me-3 opcionesN"></i>
                  <h3 className="opciones text-light">Acceder</h3>
                </div>
              </a>
            </li>
          </ul>
            }
          </div>
        </div>
      </nav>
    </div>
  );
}
