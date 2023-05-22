import "../styles/PagesStyles/RegistroUsuario.css"
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function RegistroUsuario() {
    const [showPwd, setShowPwd] = useState(false);
    const navigate = useNavigate();
    return (
        <div className="containerRegistro p-4 overflow-y-scroll">
            <form class="wrapperRegistro p-5 pt-1 pb-1">
                <h2 className="mt-2 h2I text-center fs-1 mb-5">Registro de usuario</h2>
                <div className="form-group mb-2 p-2 d-block ">
                    <p className="w-100">Nombre</p>
                    <div className=" groupRegistro w-100">
                        <i class="fa-solid fa-user me-2 pe-2"></i>
                        <input type="text" className="inputRegistro w-100" />
                    </div>
                </div>
                <div className="form-group mb-2 p-2 d-block">
                    <p className="w-100">Teléfono</p>
                    <div className="w-75 groupRegistro w-100">
                        <i class="fa-solid fa-phone me-2 pe-2"></i>
                        <input className="inputRegistro w-100" />
                    </div>
                </div>
                <div className="form-group mb-2 p-2 d-block">
                    <p className="w-100">Carnet de identidad</p>
                    <div className=" groupRegistro w-100">
                        <i class="fa-regular fa-id-card me-2 pe-2"></i>
                        <input className="inputRegistro w-100" />
                    </div>
                </div>
                <div className="form-group mb-2 p-2 d-block">
                    <p className="w-100">Vehículo</p>
                    <div className="w-100">
                        <div className=" groupRegistro w-100">
                            <i class="fa-solid fa-car me-2 pe-2"></i>
                            <input className="inputRegistro w-100" />
                        </div>
                    </div>
                </div>
                <div className="form-group mb-2 p-2 d-block">
                    <p className="w-100">Correo electrónico</p>
                    <div className=" groupRegistro w-100">
                        <i class="fa-solid fa-at me-2 pe-2"></i>
                        <input className="inputRegistro w-100" />
                    </div>
                </div>
                <div className="form-group mb-2 p-2 d-block">
                    <p className="w-100">Contraseña</p>
                    <div className=" groupRegistro w-100">
                        <i class="fa-solid fa-lock me-2 pe-2"></i>
                        <input type={showPwd ? "text" : "password"} className="inputRegistro w-100" />
                        <div class="me-0" onClick={() => setShowPwd(!showPwd)}>
                            {showPwd ? <i class="fa-solid fa-eye eyecolor"></i> : <i class="fa-solid fa-eye-slash eyecolor"></i>}
                        </div>
                    </div>
                </div>
                <div className="w-100 row ms-1">
                    <button class="btn col-4  btn-block text-center my-3 rounded" onClick={()=>{navigate("/")}}>Cancelar</button>
                    <div className="col-4"></div>

                    <button class="btn btn-block col-4 text-center my-3 rounded me-0">Crear cuenta</button>
                </div>
            </form>
        </div>
    );
}