import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

function Profile() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClose = () => {
    localStorage.setItem("user", false);
    navigate("/login");
    if (location.state?.from) {
      console.log("hola");
    }
  };

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
