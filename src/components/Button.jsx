
import "../styles/Button.css"
export default function Card({children, volverButton}) {
    return(
        <div className={volverButton?"btn volver d-flex flex-column":"btn btn-primary m-2 d-flex justify-content-center align-items-center"} >
            {children}
        </div>
    );
}