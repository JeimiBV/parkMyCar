import Navbar from "./Navbar";
import SideBar from "./Sidebar";
import Container from "./Container";
import "../../styles/Layout.css";
import { useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import { cerrarSesion } from "../../users/userSlice";
export default function Layout({ children }) {
  //const [logIn, setLogIn]= useState(true)
  const [showButton,setShowButton]=useState(true)
  const usuario = useSelector((state) => state.users).userState;
  //var usuario = selector;
  console.log(usuario.userState,"este es user")

  const dispatch=useDispatch();
  const cambiarEstado=()=>{
    dispatch(cerrarSesion())
  }
  return (
    <div className="layout overflow-x-hidden">
      <Navbar logIn={usuario.estado}
              showButton={showButton}
       />
      <div className="row w-100 layoutSC">
        <div className={usuario.estado?"col-lg-2 p-0":"d-none"}>
          <SideBar cambiarE={cambiarEstado}
                    nombreUsuario={usuario.nombre}
                    rol={usuario.rol} />
        </div>
        <div className="col-10 p-0 ">
          <Container logIn={usuario.estado}>
            {children}
          </Container>
        </div>
      </div>
    </div>
  );
}
