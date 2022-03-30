import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { url } from "../helpers/url";
import { AdminContainer, CardItem, ButtonToHome } from "../styles/StyledAdmin";

function Admin() {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("admin") !== "true") {
      navigate("/Sprint-2-AG/");
    } else if (localStorage.getItem("user") !== "true") {
      navigate("/Sprint-2-AG/login");
    }
  }, [navigate]);

  const getUsers = () => {
    axios.get(url).then((res) => {
      setUsers(res.data);
    });
  };
  const deleteUser = (id) => {
    axios
      .delete(`${url}${id}`)
      .then((res) => {
        console.log(res);
        getUsers();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const closeSession = () => {
    localStorage.setItem("admin", false);
    localStorage.setItem("account", false);
    localStorage.setItem("user", false);
    navigate("/Sprint-2-AG/login");
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <AdminContainer>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h1>Admin</h1>
        <Button variant="danger" onClick={closeSession}>
          Cerrar sesión
        </Button>
      </div>

      {users.map((user) => {
        return (
          <CardItem key={user.id}>
            <Card.Header>
              <Card.Img variant="top" src={user.image} />
            </Card.Header>
            <Card.Body>
              <p>Nombre: {user.name}</p>
              <p>Correo: {user.email}</p>
              <p>Total respuestas: {user.statistics.total}</p>
              <p>Respuestas correctas: {user.statistics.correct}</p>
              <p>Respuestas incorrectas: {user.statistics.incorrect}</p>
            </Card.Body>
            <Button variant="danger" onClick={() => deleteUser(user.id)}>
              Eliminar
            </Button>
          </CardItem>
        );
      })}
      <div style={{ textAlign: "center", marginTop: "10px" }}>
        <ButtonToHome
          variant="primary"
          onClick={() => navigate("/Sprint-2-AG/")}
        >
          Ir a Inicio
        </ButtonToHome>
      </div>
    </AdminContainer>
  );
}

export default Admin;
