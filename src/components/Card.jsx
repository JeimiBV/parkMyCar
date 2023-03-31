import "../styles/Card.css"
export default function Card({children, titulo, vertical }) {
    return(
        <div className={vertical?"d-flex card my-4  ":"d-flex card my-4 h-100"} >
            <h3>
                {titulo}
            </h3>
            {children}
        </div>
    );
}