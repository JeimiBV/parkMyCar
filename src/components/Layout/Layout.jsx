import Navbar from "./Navbar";
import SideBar from "./Sidebar";
import Container from "./Container";
import "../../styles/Layout.css";
import { useState } from "react";

export default function Layout({ children }) {
  const [logIn, setLogIn]= useState(true)
  const cambiarEstado=()=>{
  setLogIn(!logIn)
  }
  return (
    <div className="layout ">
      <Navbar logIn={logIn}
      cambiarE={cambiarEstado} />
      <div className="row w-100 layoutSC">
        <div className={logIn?"col-lg-2 p-0":"d-none"}>
          <SideBar cambiarE={cambiarEstado} />
        </div>
        <div className="col-10 p-0 ">
          <Container logIn={logIn}>
            {children}
          </Container>
        </div>
      </div>
    </div>
  );
}
