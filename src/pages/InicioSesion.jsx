import "../styles/PagesStyles/InicioSesion.css";
import { useDispatch } from "react-redux";
import { iniciarSesion } from "../users/userSlice";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";

export default function InicioSesion() {
  const [logInFail, setLoginFail] = useState(false);
  const [showPwd, setShowPwd] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  // redireccionar la pagina de ser necesario
  const navigate = useNavigate();

  //obtener todos los datos de inputs y guardarlas en el estado 'data'
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const dispatch = useDispatch();

  const cambiarEstado = async (event) => {
    event.preventDefault();
    fetch("http://testingapi12023-001-site1.atempurl.com/Authentication", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response) {
          return response.text();
        } else {
          throw new Error("error al obtener el token");
        }
      })
      .then((data) => {
        const token = data;
        console.log(token);
        const decodedToken = jwt_decode(token);
        console.log(decodedToken, "token");
        dispatch(iniciarSesion(decodedToken));
        navigate("/parqueo");
      })
      .catch((error) => {
        console.error(error);
        setLoginFail(true);
      });
  };
  return (
    <div className="containerInicio p-5 d-flex justify-content-center">
      <div className="d-flex w-75">
        <div class="welcomeb h-100 d-flex flex-column justify-content-center align-items-center p-5 text-center w-50">
          <h1>Bienvenido de vuelta!</h1>
          <p className="text-light">Para mantenerse conectado con nosotros, inicie sesión con su información personal</p>
        </div>
        <div class="wrapper p-5 pt-1 pb-1 h-100 overflow-y-scroll w-50 d-flex flex-column justify-content-center">
          <div class="h2I text-center fs-1 ">Iniciar sesión</div>
          <form class="pt-3 d-block justify-content-center">
            <div class="form-group py-2">
              <p>Ingrese su correo</p>
              <div class={logInFail ? "input-field border-danger" : "input-field "}>
                <i class="fa-solid fa-user p-2"></i>
                <input
                  name="email"
                  className="inputColor w-100"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                />
              </div>
            </div>
            <div class="form-group py-1 pb-2">
              <p>Ingrese su contraseña</p>
              <div class={logInFail ? "input-field border-danger" : "input-field "}>
                <span class="fas fa-lock p-2"></span>
                <input
                  name="password"
                  type={showPwd ? "text" : "password"}
                  className="inputColor w-100"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                />
                <div class="btn text-muted" onClick={() => setShowPwd(!showPwd)}>
                  {showPwd ? (
                    <i class="fa-solid fa-eye eyecolor"></i>
                  ) : (
                    <i class="fa-solid fa-eye-slash eyecolor"></i>
                  )}
                </div>
              </div>
            </div>
            <div className="w-100 text-center">
              <p className={logInFail ? "text-danger" : "d-none"}>
                Por favor verifique sus credenciales y vuelva a intentar
              </p>
              <button
                class="btn btn-block text-center my-3 rounded btnInicio"
                onClick={(event) => {
                  cambiarEstado(event);
                }}
              >
                Ingresar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
