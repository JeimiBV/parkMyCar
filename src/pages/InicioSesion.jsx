import "../styles/PagesStyles/InicioSesion.css"
import { useDispatch } from "react-redux";
import { iniciarSesion } from "../users/userSlice";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function InicioSesion() {

	
	const datos={
		nombre:"Jeimi Barral",
		rol:"seguridad",
		estado:true,
		guardId:1
	}
	const dispatch = useDispatch();
	const cambiarEstado = () => {
		event.preventDefault()
		dispatch(iniciarSesion(datos))
		navigate("/parqueo");
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
							<input className="inputColor" />
						</div>
					</div>
					<div class="form-group py-1 pb-2">
						<p>Ingrese su contraseña</p>
						<div class="input-field">
							<span class="fas fa-lock p-2"></span>
							<input type={showPwd ? "text" : "password"} className="inputColor" />
							<div class="btn text-muted" onClick={() => setShowPwd(!showPwd)}>
								{showPwd ? <i class="fa-solid fa-eye eyecolor"></i> : <i class="fa-solid fa-eye-slash eyecolor"></i>}
							</div>
						</div>
					</div>
					<div className="w-100 text-center">
						<button class="btn btn-block text-center my-3 rounded" onClick={cambiarEstado}>Ingresar</button>
					</div>
				</form>
			</div>
		</div>
	);
}