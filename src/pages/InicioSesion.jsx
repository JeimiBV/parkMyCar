import "../styles/PagesStyles/InicioSesion.css";
import { useDispatch } from "react-redux";
import { iniciarSesion } from "../users/userSlice";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postPeticion, postAuthorization } from "../functions/useFetch";
import jwt_decode from "jwt-decode";

export default function InicioSesion() {
  const [logInFail, setLoginFail]=useState(false);
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
    <div className="containerInicio p-5">
      <div class="wrapper">
        <div class="h2I text-center fs-1 ">Iniciar sesión</div>
        <form class="pt-3 d-block justify-content-center">
          <div class="form-group py-2">
            <p>Ingrese su correo</p>
            <div class={logInFail?"input-field border-danger":"input-field "}>
            <i class="fa-solid fa-user p-2"></i>
              <input
                name="email"
                className="inputColor"
                onChange={(e) => {
                  handleChange(e);
                }}
              />
            </div>
          </div>
          <div class="form-group py-1 pb-2">
            <p>Ingrese su contraseña</p>
            <div class={logInFail?"input-field border-danger":"input-field "}>
              <span class="fas fa-lock p-2"></span>
              <input
                name="password"
                type={showPwd ? "text" : "password"}
                className="inputColor "
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
            <p className={logInFail? "text-danger":"d-none"}>
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
  );
}
