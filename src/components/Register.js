import axios from "axios";
import React, { useState } from "react";
import { Form, FormControl, FormGroup, FormLabel } from "react-bootstrap";
import { Link } from "react-router-dom";
import { uploadImage } from "../helpers/UploadImage";
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

function Register() {
  const initialState = {
    name: "",
    password: "",
    type: "user",
    image: "",
    email: "",
    statistics: {
      time: 0,
      total: 0,
      correct: 0,
      incorrect: 0,
    },
    html: 0,
    css: 0,
    javascript: 0,
    figma: 0,
    ux: 0,
  };
  const [user, setUser] = useState(initialState);

  const handleSubmit = async (e) => {
    e.preventDefault();
    axios
      .post(url, user)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
    setUser(initialState);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const handleFileChange = (event) => {
    const { name, files } = event.target;
    uploadImage(files[0]).then((result) => {
      setUser({ ...user, [name]: result });
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
        <Title>Registro</Title>
        <ButtonGmail variant="danger">
          <i className="fa-brands fa-google"></i>
          Continuar con Google
        </ButtonGmail>
        <Line></Line>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <FormLabel htmlFor="name">Nombre</FormLabel>
            <FormControl
              id="name"
              name="name"
              placeholder="Ingrese su nombre"
              required
              onChange={handleChange}
            ></FormControl>
          </FormGroup>
          <FormGroup>
            <FormLabel htmlFor="image">Imagen</FormLabel>
            <FormControl
              type="file"
              name="image"
              id="image"
              onChange={handleFileChange}
              required
            ></FormControl>
          </FormGroup>
          <FormGroup>
            <FormLabel htmlFor="email">Correo Electrónico</FormLabel>
            <FormControl
              type="email"
              name="email"
              id="email"
              placeholder="Ingrese su correo electrónico"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              onChange={handleChange}
              required
            ></FormControl>
          </FormGroup>
          <FormGroup>
            <FormLabel htmlFor="pass">Contraseña</FormLabel>
            <FormControl
              id="pass"
              name="password"
              type="password"
              placeholder="Ingrese su contraseña"
              onChange={handleChange}
              required
            ></FormControl>
          </FormGroup>
          <ButtonLogin type="submit" variant="primary">
            Crear cuenta
          </ButtonLogin>
        </Form>
        <Link to="/restore">¿Se te olvidó tu contraseña?</Link>
        <p>
          ¿Ya tienes una cuenta? <Link to="/">Iniciar sesión</Link>
        </p>
      </ContainerItems>
    </Main>
  );
}

export default Register;
