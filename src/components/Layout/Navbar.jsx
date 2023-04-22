import "../../styles/Navbar.css";

export default function Navbar({logIn}) {
  

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
              {logIn?<div className="d-flex align-items-center">
                  
                </div>:
                <div className="d-flex align-items-center">
                <a href="/inicioS" className="btn text-light mt-3 me-5 accederButton fs-4" >Acceder</a>
              </div>
                }
              </li>
            </ul>
            <ul className="d-lg-none navbar-nav">
              <li>
                <a href="/parqueo" className="text-decoration-none">
                  <div className="d-flex py-3 text-decoration-none text-dark opcionesN">
                    <i class="fa-solid fa-square-parking fs-1 me-3 opcionesN"></i>
                    <h3 className="opciones text-light">Plazas</h3>
                  </div>
                </a>
              </li>

              <li>
                <a href="/plazaReserva" className="text-decoration-none">
                  <div className="d-flex py-3  text-decoration-none text-dark opcionesN">
                    <i class="fa-solid fa-calendar-days fs-1 me-3 opcionesN"></i>
                    <h3 className="opciones text-light">Reservas</h3>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
