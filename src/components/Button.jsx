import "../styles/Button.css"
export default function Card({children}) {
    return(
        <div className="btn btn-primary m-2" >
            {children}
        </div>
    );
}