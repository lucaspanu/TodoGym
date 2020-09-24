import React from "react";
import "../assets/Styles/NavBar3.css";

function toggleMenu() {
  const toggleMenu = document.querySelector(".toggleMenu");
  const navigation = document.querySelector(".navigation");
  toggleMenu.classList.toggle("active");
  navigation.classList.toggle("navigation");
}

function NavBar3() {
  return (
    <div>
      <section>
        <header>
          <img src="./assets/Logo.png" alt="Logo" className="logo" />
          <div className="toggleMenu" onClick="toggleMenu()"></div>
          <ul className="navigation">
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
        </header>
      </section>
    </div>
  );
}

export default NavBar3;
