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
      })
      .finally(() => setLoading(false));
  }, []);

}
export async function  postPeticion(url,datos){
  console.log(datos, "fetchhhhhhhhhhhh", url)
    await fetch(url,{
    method:'POST',
    headers:{
      'Content-Type':'application/json'
    },
    body:JSON.stringify(datos)
  })
}

export const fetchVehicles = async (id) => {
  const response = await fetch(
    `https://parkmycar-001-site1.atempurl.com/Vehicles?userId=${id}`
  );
  return await response.json();
};

export async function postReporte(url,datos){
  const response =await fetch(url,{
    method:'POST',
    headers:{
      'Content-Type':'application/json'
    },
    body:JSON.stringify(datos)
  })
  return await response.json();
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

export async function postReservesByPlate(plate){
  const bodydata ={
    "plateId": plate,
    "fromDate": "1900-06-11T14:32:03.204Z",
    "toDate": "2080-06-11T14:32:03.204Z"
  }
  const response =await fetch(`https://parkmycar-001-site1.atempurl.com/Reserves/plate`,{
    method:'POST',
    headers:{
      'Content-Type':'application/json'
    },
    body:JSON.stringify(bodydata)
  })
  return await response.json();
}
export const fetchVerification = async () => {
  const response = await fetch(
    "https://parkmycar-001-site1.atempurl.com/Reserves/History?placeId=57"
  );
  return await response.json();
};

export const patchVerificacion=()=>{
  fetch('https://parkmycar-001-site1.atempurl.com/Reserves/264' , {
            method: 'PATCH',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({}) // Puedes enviar un objeto vacío si solo deseas enviar el ID
          })
            .then(response => {
               
            })
            .catch(error => {
               console.log("error",error);
            });
}

