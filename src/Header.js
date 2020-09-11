import React from "react";
import "./Header.css";

function Header() {
  return (
    <div>
      <div className="contenedor">
        <div className="menu">
          <img src="./assets/Logo.png" alt="logo" />
          <nav>
            <ul>
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">Classes</a>
              </li>
              <li>
                <a href="">Trainers</a>
              </li>
              <li>
                <a href="">Contacto</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Header;
