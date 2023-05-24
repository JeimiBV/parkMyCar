import { da } from "date-fns/locale";
import { useState, useEffect } from "react";

export function UseFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        console.log(data,"esta es la data")
      })
      .finally(() => setLoading(false));
  }, []);

}
export async function  postPeticion(url,datos){

  await fetch(url,{
    method:'POST',
    headers:{
      'Content-Type':'application/json'
    },
    body:JSON.stringify(datos)
  })
 
}

export async function postLogin(url, datos) {
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(datos),
  })
    .then((response) => {
      if (response) {
        return response.text();
      } else {
        throw new Error("error al obtener el token");
      }
    })
    .then((data) => {
      const token = data;
      console.log(token);
    })
    .catch((error) => {
      console.error(error);
    });
}

export async function postAuthorization(url) {
  await fetch(url, {
    method: "POST",
    headers: {
      authorization: token,
    },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
}
