import "../../styles/Container.css";

export default function Container ({logIn, children}){
    console.log(logIn)
    return(
    <div className={logIn?"contenedorC ":"contenedorLogout"} >
        {children}
    </div>)
}