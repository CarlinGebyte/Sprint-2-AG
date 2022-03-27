import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Footer } from "../styles/Footer";

function Navbar() {
  return (
    <Footer>
      <Nav className="justify-content-center">
        <Link className="nav-link" to="/"> {/*Sprint-2*/}
          Home
        </Link>
        <Link className="nav-link" to="/statistics/">
          Estadísticas
        </Link>
        <Link className="nav-link" to="/profile/">
          Perfil
        </Link>
      </Nav>
    </Footer>
  );
}

export default Navbar;
