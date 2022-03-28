import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

function Statistics() {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("user") !== "true") {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <div>
      <h3>Estadísticas</h3>
      <select>
        <option value="1">Desde siempre</option>
      </select>
      <div>
        <i></i>
        <p>Tiempo de estudio (horas)</p>
        <span>0</span>
      </div>
      <div>
        <i></i>
        <p>Respuestas contestadas</p>
        <span>0</span>
      </div>
      <div>
        <i></i>
        <p>Respuestas correctas</p>
        <span>0</span>
      </div>
      <div>
        <i></i>
        <p>Respuestas incorrectas</p>
        <span>0</span>
      </div>
      <Navbar />
    </div>
  );
}

export default Statistics;
