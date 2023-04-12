import "../../styles/Sidebar.css"
import { Link } from "react-router-dom"
export default function SideBar() {
    return (
        <div className="main d-lg-inline d-none pt-2 ">
            <ul>
                <div className="opcion">
                    <a href="/parqueo" className="text-decoration-none">
                        <div className="d-flex py-3 text-decoration-none text-light align-items-center" >
                            <i class="fa-solid fa-square-parking fs-1 me-3 opciones"></i>
                            <h3 className="opciones fs-5">Plazas</h3>
                        </div>
                    </a>
                </div>

                <div className="opcion">
                    <a href="/plazaReserva" className="text-decoration-none">
                        <div className="d-flex py-3  text-decoration-none text-light align-items-center" >
                            <i class="fa-solid fa-calendar-days fs-1 me-3 opciones"></i>
                            <h3 className="opciones fs-5">Reservas</h3>
                        </div>
                    </a>
                </div>
            </ul>
        </div>
    )
}