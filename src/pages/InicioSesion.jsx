import "../styles/PagesStyles/InicioSesion.css"
import { useDispatch } from "react-redux";
import { iniciarSesion } from "../users/userSlice";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postPeticion,postAuthorization } from "../functions/useFetch";
import jwt_decode from 'jwt-decode';

export default function InicioSesion(){
	const [showPwd, setShowPwd]=useState(false);
	const [data, setData] = useState({
		"email":"",
		"password":""
	})
	const navigate = useNavigate();
	//const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEiLCJyb2xlIjoiYWRtaW4iLCJleHAiOjE2ODI1NDcyMTcsImlzcyI6IlBhcmtNeUNhciIsImF1ZCI6IlBhcmtNeUNhciJ9._8h8Oo3fSPS4bWsXPcA1WDRBqqfRDBfjMEl7Ch6DapE";
	const handleChange=(e)=>{
		setData({...data, [e.target.name]: e.target.value})
	}
	const datos={
		nombre:"Jeimi Barral",
		rol:"seguridad",
		estado:true,
		guardId:1
	}
	const dispatch =  useDispatch();
	const cambiarEstado = async (event) => {
		event.preventDefault()
		const token = await postPeticion("http://testingapi12023-001-site1.atempurl.com/Authentication", data);
		if (token) {
		  console.log(token);
		} else {
		  console.error("Error al obtener el token");
		}
		
		
		//const decodedToken = jwt_decode(token);
		//console.log(decodedToken,"token")
		//dispatch(iniciarSesion(decodedToken))
		//navigate("/parqueo");
	
	}
	return (
		<div className="containerInicio p-5">
			<div class="wrapper">
				<div class="h2I text-center fs-1 ">Iniciar sesión</div>
				<form class="pt-3 d-block justify-content-center">
					<div class="form-group py-2">
						<p>Ingrese su correo</p>
						<div class="input-field">
							<span class="far fa-user p-2"></span>
							<input name="email" className="inputColor" onChange={(e)=>{handleChange(e)}} />
						</div>
					</div>
					<div class="form-group py-1 pb-2">
						<p>Ingrese su contraseña</p>
						<div class="input-field">
							<span class="fas fa-lock p-2"></span>
							<input name="password" type={showPwd ? "text" : "password"} className="inputColor" onChange={(e) => {handleChange(e)}} />
							<div class="btn text-muted" onClick={() => setShowPwd(!showPwd)}>
								{showPwd ? <i class="fa-solid fa-eye eyecolor"></i> : <i class="fa-solid fa-eye-slash eyecolor"></i>}
							</div>
						</div>
					</div>
					<div className="w-100 text-center">
						<button class="btn btn-block text-center my-3 rounded" onClick={(event) => {cambiarEstado(event)}}>Ingresar</button>
					</div>
				</form>
			</div>
		</div>
	);
}