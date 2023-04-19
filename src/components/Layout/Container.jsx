import "../../styles/Container.css";

export default function Container ({logIn, children}){
    
    return(
    <div className={logIn?"contenedorC ":"contenedorLogout"} >
        {children}
    </div>)
}