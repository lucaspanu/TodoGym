import React from "react";
import "./Header.css";
import Logo from "./assets/logos/small-logo-white.svg";

function Header() {
  return (
    <div>
      <body>
        <header>
          <div className="contenedor-header">
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
        </header>
      </body>
    </div>
  );
}

export default Header;
