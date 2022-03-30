import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ContainerHome,
  CssContainer,
  CssJs,
  Figma,
  FigmaContainer,
  FigmaUx,
  HTMLContainer,
  HtmlCssImg,
  Js,
  JsContainer,
  PHome,
  Ux,
  UxContainer,
} from "../styles/HomeStyles";
import Navbar from "./Navbar";

function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("user") !== "true") {
      navigate("/Sprint-2-AG/login");
    }
  }, [navigate]);

  return (
    <ContainerHome>
      <PHome>Practica tus conocimientos en la categoría que prefieras</PHome>
      <HTMLContainer>
        <div>
          <Link to="/Sprint-2-AG/html">
            <HtmlCssImg
              src="https://raw.githubusercontent.com/CarlinGebyte/Sprint-2-AG/main/src/assets/img/html.png"
              alt="HTML"
            ></HtmlCssImg>
          </Link>
        </div>
        <p>HTML</p>
      </HTMLContainer>
      <CssJs>
        <CssContainer>
          <div>
            <Link to="/Sprint-2-AG/css">
              <HtmlCssImg
                src="https://raw.githubusercontent.com/CarlinGebyte/Sprint-2-AG/main/src/assets/img/css.png"
                alt="CSS"
              ></HtmlCssImg>
            </Link>
          </div>
          <p>CSS</p>
        </CssContainer>
        <JsContainer>
          <div>
            <Link to="/Sprint-2-AG/js">
              <Js
                src="https://raw.githubusercontent.com/CarlinGebyte/Sprint-2-AG/main/src/assets/img/js.png"
                alt="JavaScript"
              ></Js>
            </Link>
          </div>
          <p>JS</p>
        </JsContainer>
      </CssJs>
      <FigmaUx>
        <FigmaContainer>
          <div>
            <Link to="/Sprint-2-AG/figma">
              <Figma
                src="https://raw.githubusercontent.com/CarlinGebyte/Sprint-2-AG/main/src/assets/img/figma.png"
                alt="figma"
              ></Figma>
            </Link>
          </div>
          <p>Figma</p>
        </FigmaContainer>
        <UxContainer>
          <div>
            <Link to="/Sprint-2-AG/ux">
              <Ux
                src="https://raw.githubusercontent.com/CarlinGebyte/Sprint-2-AG/main/src/assets/img/ux.png"
                alt="Experiencia de usuario"
              ></Ux>
            </Link>
          </div>
          <p>UX</p>
        </UxContainer>
      </FigmaUx>
      <Navbar />
    </ContainerHome>
  );
}

export default Home;
