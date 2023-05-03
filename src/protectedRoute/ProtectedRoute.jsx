import {Navigate, Outlet} from "react-router-dom"
export const ProtectedRoute=({isAllowed})=>{
    console.log(isAllowed,"este es rol")
    if(!isAllowed){
        return <Navigate to="/"/>
    }
    return <Outlet/>
}