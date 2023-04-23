import {Navigate, Outlet} from "react-router-dom"
export const ProtectedRoute=()=>{
    let rol="seguridad";
    console.log(rol,"este es rol")
    if(rol!="seguridad"){
        return <Navigate to="/"/>
    }
    return <Outlet/>
}