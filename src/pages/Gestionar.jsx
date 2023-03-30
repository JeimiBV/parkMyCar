import React from "react";
import "../styles/Gestionar.css";

const Gestionar = () => {
  return (
    <div className="contenedorG">
      <h1 className="titulo ">GESTIONAR</h1>
      <div className="formulario p-3">
        Numero de bloques de autos:
        <select name="opciones">
          <option value="2">1</option>
          <option value="4">2</option>
          <option value="6">3</option>
        </select>
        <p className="p">Capacidad de autos en cada bloque:</p>
        <div class="container text-center ">
          <div class="row align-items-center">
            <div class="col">Bloque 1</div>
            <div class="col">
              <select name="opciones">
                <option value="2">2</option>
                <option value="4">4</option>
                <option value="6">6</option>
                <option value="8">8</option>
                <option value="10">10</option>
                <option value="12">12</option>
              </select>
            </div>
            <div class="col">Bloque 2</div>
            <div class="col">
              <select name="opciones">
                <option value="2">0</option>
                <option value="2">2</option>
                <option value="4">4</option>
                <option value="6">6</option>
                <option value="8">8</option>
                <option value="10">10</option>
                <option value="12">12</option>
              </select>
            </div>
            <div class="col">Bloque 3</div>
            <div class="col">
              <select name="opciones">
                <option value="2">0</option>
                <option value="2">2</option>
                <option value="4">4</option>
                <option value="6">6</option>
                <option value="8">8</option>
                <option value="10">10</option>
                <option value="12">12</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="formulario p-3">
        Cantidad plazas especiales:
        <select name="opciones">
          <option value="2">2</option>
          <option value="4">4</option>
          <option value="6">6</option>
          <option value="8">8</option>
          <option value="10">10</option>
          <option value="12">12</option>
        </select>
        <p className="p">Capacidad de plazas en cada bloque:</p>
        <div class="container text-center ">
          <div class="row align-items-center">
            <div class="col">Bloque 1</div>
            <div class="col">
              <select name="opciones">
                <option value="2">2</option>
                <option value="4">4</option>
                <option value="6">6</option>
                <option value="8">8</option>
                <option value="10">10</option>
                <option value="12">12</option>
              </select>
            </div>
            <div class="col">Bloque 2</div>
            <div class="col">
              <select name="opciones">
                <option value="2">0</option>
                <option value="2">2</option>
                <option value="4">4</option>
                <option value="6">6</option>
                <option value="8">8</option>
                <option value="10">10</option>
                <option value="12">12</option>
              </select>
            </div>
            <div class="col">Bloque 3</div>
            <div class="col">
              <select name="opciones">
                <option value="2">0</option>
                <option value="2">2</option>
                <option value="4">4</option>
                <option value="6">6</option>
                <option value="8">8</option>
                <option value="10">10</option>
                <option value="12">12</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="formulario p-3">
        <p>Capacidad de motos:</p>
        <button className="botonGuardar"> Guardar</button>
      </div>
    </div>
  );
};

export default Gestionar;
