import "../styles/PagesStyles/RegistroUsuario.css"

import Spinner from "../components/Spinner";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postPeticion } from "../functions/useFetch";

export default function RegistroUsuario() {
    const [showPwd, setShowPwd] = useState(false);
    const [loading, setLoading] = useState(false);
    const [datosForm, setDatosForm] = useState({
        name: "",
        email: "",
        password: "",
        nit: "",
        phone: 0,
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setDatosForm({ ...datosForm, [e.target.name]: e.target.value });
    };

    const handlePost = async (e) => {
        e.preventDefault();
        setLoading(true);
        await postPeticion(
            "http://parkmycar-001-site1.atempurl.com/users/client",
            datosForm
        );
        setLoading(false);
        navigate("/inicioS");
    };

    return (
        <div className="containerRegistro p-0 p-md-5">
            <div className="d-flex contenedorRegistroA">
                <div class="welcome d-none bg-danger h-100 d-md-flex flex-column justify-content-center align-items-center p-5 text-center w-50">
                    <h1>Bienvenido!</h1>
                    <p className="text-light">Ingresa tus datos personales y comienza a reservar con nosotros </p>
                </div>
                <form class="wrapperRegistro px-3 px-md-5 pt-1 pb-1 h-100  " onSubmit={(e) => handlePost(e)}>
                    <h2 className="mt-2 h2I text-center fs-1 mb-4">Crear cuenta</h2>
                    <div className="form-group p-2 d-block ">
                        <p className="w-100 mb-1">Nombre</p>
                        <div className=" groupRegistro w-100">
                            <i class="fa-solid fa-user me-2 pe-2"></i>
                            <input name="name" type="text" className="inputRegistro w-100" onChange={handleChange} required pattern="[a-zA-Z\s]+" />
                        </div>
                    </div>
                    <div className="form-group p-2 d-block">
                        <p className="w-100 mb-1">Teléfono</p>
                        <div className="w-75 groupRegistro w-100">
                            <i class="fa-solid fa-phone me-2 pe-2"></i>
                            <input name="phone" className="inputRegistro w-100" onChange={handleChange} required pattern="[0-9]{8}" />
                        </div>
                    </div>
                    <div className="form-group p-2 d-block">
                        <p className="w-100 mb-1">Carnet de identidad</p>
                        <div className=" groupRegistro w-100">
                            <i class="fa-regular fa-id-card me-2 pe-2"></i>
                            <input name="nit" className="inputRegistro w-100" onChange={handleChange} required pattern="[a-zA-Z0-9]+" />
                        </div>
                    </div>
                    <div className="form-group p-2 d-block">
                        <p className="w-100 mb-1">Vehículo</p>
                        <div className="w-100">
                            <div className=" groupRegistro w-100">
                                <i class="fa-solid fa-car me-2 pe-2"></i>
                                <input className="inputRegistro w-100" onChange={handleChange} required />
                            </div>
                        </div>
                    </div>
                    <div className="form-group p-2 d-block">
                        <p className="w-100 mb-1">Correo electrónico</p>
                        <div className=" groupRegistro w-100">
                            <i class="fa-solid fa-at me-2 pe-2"></i>
                            <input type="email" name="email" className="inputRegistro w-100" onChange={handleChange} required />
                        </div>
                    </div>
                    <div className="form-group p-2 d-block">
                        <p className="w-100 mb-1">Contraseña</p>
                        <div className=" groupRegistro w-100">
                            <i class="fa-solid fa-lock me-2 pe-2"></i>
                            <input name="password" type={showPwd ? "text" : "password"} className="inputRegistro w-100" onChange={handleChange} required />
                            <div class="me-0" onClick={() => setShowPwd(!showPwd)}>
                                {showPwd ? <i class="fa-solid fa-eye eyecolor"></i> : <i class="fa-solid fa-eye-slash eyecolor"></i>}
                            </div>
                        </div>
                    </div>
                    <div className="w-100 row ms-1">
                        <button class="btn col-md-4 col-5 btn-block text-center my-3 rounded" onClick={() => { navigate("/") }}>Cancelar</button>
                        <div className="col-md-4 col-2"></div>

                        {
                            loading ? <Spinner /> : <button type="submit" class="btn btn-block col-md-4 col-5 text-center my-3 rounded me-0">Crear cuenta</button>
                        }

                    </div>
                </form>


            </div>
        </div>
    );
}