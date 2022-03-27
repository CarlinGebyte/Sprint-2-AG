import React from 'react'
import Navbar from './Navbar';

function Home() {
  return (
    <div>
      <p>Practica tus conocimientos en la categoría que prefieras</p>
      <div>
        <div>
          <img alt='HTML'></img>
        </div>
        <p>HTML</p>
      </div>
      <div>
        <div>
          <img alt='CSS'></img>
        </div>
        <p>CSS</p>
      </div>
      <div>
        <div>
          <img alt='JavaScript'></img>
        </div>
        <p>JS</p>
      </div>
      <div>
        <div>
          <img alt='figma'></img>
        </div>
        <p>Figma</p>
      </div>
      <div>
        <div>
          <img alt='Experiencia de usuario'></img>
        </div>
        <p>UX</p>
      </div>
      <Navbar />
    </div>
  );
}

export default Home