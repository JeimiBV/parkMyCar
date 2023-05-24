import "../styles/PagesStyles/RegistroUsuario.css"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postPeticion, postAuthorization } from "../functions/useFetch";
import {toast} from "react-toastify";

export default function RegistroUsuario() {
    const [showPwd, setShowPwd] = useState(false);
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
        await postPeticion(
            "http://testingapi12023-001-site1.atempurl.com/users/client",
            datosForm
        );
        toast.success('Registrando usuario', { theme: "colored", autoClose: 3000});
        //navigate("/");
    };

    return (
        <div className="containerRegistro p-5">
            <div className="d-flex w-75">
                <div class="welcome bg-danger h-100 d-flex flex-column justify-content-center align-items-center p-5 text-center w-50">
                    <h1>Bienvenido!</h1>
                    <p className="text-light">Ingresa tus datos personales y comienza a reservar con nosotros </p>
                </div>
                <form class="wrapperRegistro p-5 pt-1 pb-1 h-100 overflow-y-scroll w-50" onSubmit={(e) => handlePost(e)}>
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
                        <button class="btn col-4  btn-block text-center my-3 rounded" onClick={() => { navigate("/") }}>Cancelar</button>
                        <div className="col-4"></div>

                        <button data-bs-toggle="modal" type="submit" class="btn btn-block col-4 text-center my-3 rounded me-0">Crear cuenta</button>
                    </div>
                </form>

                
            </div>
        </div>
    );
}