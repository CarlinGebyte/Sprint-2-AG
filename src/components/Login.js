import axios from "axios";
import React, { useEffect, useState } from "react";
import { Form, FormControl, FormGroup, FormLabel } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { url } from "../helpers/url";
import {
  ButtonGmail,
  ButtonLogin,
  ContainerItems,
  Line,
  Logo,
  LogoContainer,
  Main,
  Title,
} from "../styles/SingIn";

function Login() {
  const [loged, setLoged] = useState(false);

  useEffect(() => {
    localStorage.setItem("user", loged);
  }, [loged]);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const password = e.target.password.value;
    const email = e.target.email.value;
    axios.get(url).then((result) => {
      const data = result.data;
      const userExist = data.find((user) => {
        return user.email === email;
      });
      console.log(userExist);
      if (userExist) {
        if (userExist.password === password) {
          setLoged(true);
          navigate("/");
        } else {
          alert("Contraseña incorrecta");
          setLoged(false);
        }
      } else {
        alert("Usuario no existe");
        setLoged(false);
      }
    });
  };

  return (
    <Main>
      <LogoContainer>
        <Logo
          src="https://github.com/CarlinGebyte/Sprint-2-AG/blob/main/src/assets/img/Color=Purple,%20Container=Yes.png?raw=true"
          alt="logo"
        ></Logo>
      </LogoContainer>
      <ContainerItems>
        <Title>Iniciar Sesión</Title>
        <ButtonGmail variant="danger">
          <i className="fa-brands fa-google"></i>
          Continuar con Google
        </ButtonGmail>
        <Line></Line>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <FormLabel htmlFor="email">Correo Electrónico</FormLabel>
            <FormControl
              id="email"
              name="email"
              placeholder="Ingrese su correo electrónico"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              required
            ></FormControl>
          </FormGroup>
          <FormGroup>
            <FormLabel htmlFor="password">Contraseña</FormLabel>
            <FormControl
              id="passwoed"
              name="password"
              type="password"
              placeholder="Ingrese su contraseña"
              required
            ></FormControl>
          </FormGroup>
          <ButtonLogin type="submit" variant="primary">
            Iniciar Sesión
          </ButtonLogin>
        </Form>
        <Link to="/restore">¿Se te olvidó tu contraseña?</Link>
        <p>
          ¿Aún no tienes una cuenta? <Link to="/register">Inscribirme</Link>
        </p>
      </ContainerItems>
    </Main>
  );
}

export default Login;
