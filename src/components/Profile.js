import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

function Profile() {
  const navigate = useNavigate();

  const handleClose = () => {
    localStorage.setItem("user", false);
    localStorage.setItem("account", "closed");
    navigate("/login");
  };

  useEffect(() => {
    if (localStorage.getItem("user") !== "true") {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <main>
      <h3>Perfil</h3>
      <img alt="imagen de usuario"></img>
      <h4>name</h4>
      <p>email</p>
      <Link to="/login" onClick={() => handleClose}>
        Cerrar sesión
      </Link>
      <Navbar />
    </main>
  );
}

export default Profile;
