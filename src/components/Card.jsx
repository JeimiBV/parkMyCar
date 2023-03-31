import "../styles/Card.css"
export default function Card({children, titulo, vertical }) {
    return(
        <div className={vertical?"d-flex card cardV my-4 p-4 ":"d-flex card cardH my-4 p-4"} >
            <h3>
                {titulo}
            </h3>
            {children}
        </div>
    );
}