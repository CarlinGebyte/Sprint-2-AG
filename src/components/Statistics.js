import React from 'react'
import Navbar from './Navbar';

function Statistics() {
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

export default Statistics