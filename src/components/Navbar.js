import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Footer } from "../styles/Footer";

function Navbar() {
  return (
    <Footer>
      <Nav className="justify-content-center">
        <Link className="nav-link" to="/Sprint-2-AG/">
          Home
        </Link>
        <Link className="nav-link" to="/Sprint-2-AG/statistics/">
          Estadísticas
        </Link>
        <Link className="nav-link" to="/Sprint-2-AG/profile/">
          Perfil
        </Link>
      </Nav>
    </Footer>
  );
}

export default Navbar;
