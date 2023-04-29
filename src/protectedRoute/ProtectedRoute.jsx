import {Navigate, Outlet} from "react-router-dom"
export const ProtectedRoute=({rol})=>{
    console.log(rol,"este es rol")
    if(rol!="admin"){
        return <Navigate to="/"/>
    }
    return <Outlet/>
}