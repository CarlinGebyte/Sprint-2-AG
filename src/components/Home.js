import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("user") !== "true") {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <div>
      <p>Practica tus conocimientos en la categoría que prefieras</p>
      <div>
        <div>
          <Link to="/html">
            <img src="" alt="HTML"></img>
          </Link>
        </div>
        <p>HTML</p>
      </div>
      <div>
        <div>
          <Link to="/css">
            <img src="" alt="CSS"></img>
          </Link>
        </div>
        <p>CSS</p>
      </div>
      <div>
        <div>
          <Link to="/js">
            <img src="" alt="JavaScript"></img>
          </Link>
        </div>
        <p>JS</p>
      </div>
      <div>
        <div>
          <Link to="/figma">
            <img src="" alt="figma"></img>
          </Link>
        </div>
        <p>Figma</p>
      </div>
      <div>
        <div>
          <Link to="/ux">
            <img src="" alt="Experiencia de usuario"></img>
          </Link>
        </div>
        <p>UX</p>
      </div>
      <Navbar />
    </div>
  );
}

export default Home;
