import React from "react";
import "../assets/Styles/NavBar2.css";

function NavigationBar2() {
  return (
    <div>
      <header>
        <img src="../assets/Logo.png" alt="Logo" className="logo" />
        <nav>
          <ul className="nav-area">
            <li>
              <a href="/">Inicio</a>
            </li>
            <li>
              <a href="/">Sedes</a>
            </li>
            <li>
              <a href="/">Precios</a>
            </li>
            <li>
              <a href="/">Contacto</a>
            </li>
          </ul>
        </nav>
        <a href="/ingrear" className="btn-area">
          Ingresar
        </a>
      </header>
    </div>
  );
}

export default NavigationBar2;
