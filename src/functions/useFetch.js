import { useState, useEffect } from "react";

export function UseFetch(url){
    const [data, setData]= useState(null)
    const [loading, setLoading]= useState(true)
    useEffect(()=>{
        setLoading(true)
        fetch(url)
        .then(response => response.json())
        .then(data => {setData(data)})
        .finally(()=>setLoading(false))
      },[])
      return data
}
export async function postPeticion(url,datos){
  await fetch(url,{
    method:'POST',
    headers:{
      'Content-Type':'application/json'
    },
    body:JSON.stringify(datos)
  })
}

export async function postAuthorization(url){

  await fetch(url,{
    method:'POST',
    headers:{
      'authorization':token
    }
  }).then((res) => res.json()).then(data => {
    console.log(data)
  })
  
}