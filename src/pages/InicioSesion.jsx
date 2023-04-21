import "../styles/PagesStyles/InicioSesion.css"

export default function InicioSesion() {
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
							<input type="password" className="inputColor" />
							<button class="btn bg-white text-muted">
								<span class="far fa-eye-slash"></span>
							</button>
						</div>
					</div>
					<div className="w-100 text-center">
						<button class="btn btn-block text-center my-3 rounded">Ingresar</button>
					</div>
				</form>
			</div>
		</div>
	);
}