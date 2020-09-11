import React from "react";
import "./Header.css";
import Logo from "./assets/Logo.png";

function Header() {
  return (
    <div>
      <div className="contenedor">
        <div className="menu">
          <img src={Logo} alt="logo" />
          <nav>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/">Classes</a>
              </li>
              <li>
                <a href="/">Trainers</a>
              </li>
              <li>
                <a href="/">Contacto</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Header;
