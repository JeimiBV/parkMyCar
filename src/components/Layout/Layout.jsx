import Navbar from "./Navbar";
import SideBar from "./Sidebar";
import Container from "./Container";
import "../../styles/Layout.css";
import { useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import { cerrarSesion, iniciarSesion } from "../../users/userSlice";
export default function Layout({ children }) {
  //const [logIn, setLogIn]= useState(true)
  const datos={
    nombre:"jaime",
    apellido:"reyes",
    rol:"cliente",
    estado:true
}
  const usuario = useSelector((state) => state.users);
  //var usuario = selector;
  console.log(usuario)

  const dispatch=useDispatch();
  const cambiarEstado=()=>{
   if(usuario.estado){
    dispatch(cerrarSesion())
   }
   else{
    dispatch(iniciarSesion(datos))
   }
  }
  return (
    <div className="layout ">
      <Navbar logIn={usuario.estado}
      cambiarE={cambiarEstado} />
      <div className="row w-100 layoutSC">
        <div className={usuario.estado?"col-lg-2 p-0":"d-none"}>
          <SideBar cambiarE={cambiarEstado} />
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
