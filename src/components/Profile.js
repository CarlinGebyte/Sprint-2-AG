import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Avatar,
  ButtonCloseSS,
  NextTitle,
  ProfileContainer,
} from "../styles/ProfileStyle";
import Navbar from "./Navbar";

function Profile() {
  const navigate = useNavigate();

  const handleClose = () => {
    localStorage.setItem("account", "false");
    localStorage.setItem("user", false);
    localStorage.setItem("admin", false);
    navigate("/Sprint-2-AG/login");
  };

  useEffect(() => {
    if (localStorage.getItem("user") !== "true") {
      localStorage.setItem("account", false);
      navigate("/Sprint-2-AG/login");
    }
  }, [navigate]);

  return (
    <ProfileContainer>
      <h3>Perfil</h3>
      <NextTitle>
        <Avatar
          src={
            localStorage.getItem("account") !== ""
              ? JSON.parse(localStorage.getItem("account")).image
              : ""
          }
          alt="imagen de usuario"
        ></Avatar>
        <h5>
          {localStorage.getItem("account") !== ""
            ? JSON.parse(localStorage.getItem("account")).name
            : ""}
        </h5>
        <p>
          {localStorage.getItem("account") !== ""
            ? JSON.parse(localStorage.getItem("account")).email
            : ""}
        </p>
        <ButtonCloseSS variant="danger" onClick={handleClose}>
          Cerrar sesión
        </ButtonCloseSS>
      </NextTitle>
      <Navbar />
    </ProfileContainer>
  );
}

export default Profile;
