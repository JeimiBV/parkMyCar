export const espaciosVacios=(input)=>{
    return input.includes("  ");
}

export const validarInput=(texto) =>{
    const regex = /^[a-zA-Z0-9]+$/; // expresión regular que permite solo caracteres alfanuméricos
    return regex.test(texto); // devuelve true si el texto contiene solo caracteres alfanuméricos
  }