import "../styles/PagesStyles/RegistroUsuario.css"
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function RegistroUsuario() {
    const [showPwd, setShowPwd] = useState(false);
    const navigate = useNavigate();
    return (
        <div className="containerRegistro p-4">
            <form class="wrapperRegistro p-5 pt-1 pb-1">
                <h2 className="mt-2 h2I text-center fs-1 mb-5">Registro de usuario</h2>
                <div className="form-group mb-4 p-2 d-flex align-items-center">
                    <label className="ms-0 me-5 w-50 fs-5">Nombre</label>
                    <div className=" groupRegistro w-100">
                        <i class="fa-solid fa-user me-2 pe-2"></i>
                        <input type="text" className="inputRegistro w-100" />
                    </div>
                </div>
                <div className="form-group mb-4 p-2 d-flex align-items-center">
                    <label className="ms-0 me-5 w-50 fs-5">Teléfono</label>
                    <div className="w-75 groupRegistro w-100">
                        <i class="fa-solid fa-phone me-2 pe-2"></i>
                        <input className="inputRegistro w-100" />
                    </div>
                </div>
                <div className="form-group mb-4 p-2 d-flex align-items-center">
                    <label className="ms-0 me-5 w-50 fs-5">Carnet de identidad</label>
                    <div className=" groupRegistro w-100">
                        <i class="fa-regular fa-id-card me-2 pe-2"></i>
                        <input className="inputRegistro w-100" />
                    </div>
                </div>
                <div className="form-group mb-4 p-2 d-flex align-items-center">
                    <label className="ms-0 me-5 w-50 fs-5">Vehiculo(s)</label>
                    <div className="w-100">
                        <div className=" groupRegistro w-100">
                            <i class="fa-solid fa-car me-2 pe-2"></i>
                            <input className="inputRegistro w-100" />
                        </div>
                        <a href="#">+ añadir otro vehículo</a>
                    </div>
                </div>
                <div className="form-group mb-4 p-2 d-flex align-items-center">
                    <label className="ms-0 me-5 w-50 fs-5">Correo electrónico</label>
                    <div className=" groupRegistro w-100">
                        <i class="fa-solid fa-at me-2 pe-2"></i>
                        <input className="inputRegistro w-100" />
                    </div>
                </div>
                <div className="form-group mb-4 p-2 d-flex align-items-center">
                    <label className="ms-0 me-5 w-50 fs-5">Contraseña</label>
                    <div className=" groupRegistro w-100">
                        <i class="fa-solid fa-lock me-2 pe-2"></i>
                        <input type={showPwd ? "text" : "password"} className="inputRegistro w-100" />
                        <div class="me-0" onClick={() => setShowPwd(!showPwd)}>
                            {showPwd ? <i class="fa-solid fa-eye eyecolor"></i> : <i class="fa-solid fa-eye-slash eyecolor"></i>}
                        </div>
                    </div>
                </div>
                <div className="w-100">
                    <button class="btn btnR1 btn-block text-center my-3 rounded">Cancelar</button>

                    <button class="btn btn-block text-center my-3 rounded me-0">Crear cuenta</button>
                </div>
            </form>
        </div>
    );
}