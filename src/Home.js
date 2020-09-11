import React from "react";
import "./Home.css";

import Icono1 from "./assets/Iconos/Icon1.png";
import Icono2 from "./assets/Iconos/Icon2.png";
import Icono3 from "./assets/Iconos/Icon3.png";

function Home() {
  return (
    <div>
      <body>
        <header>
          <div className="titular">
            <h1>EMPIEZA A ENTRENAR CON NOSOTROS</h1>
            <a href="/">Registrate</a>
          </div>
        </header>
        <section id="tarjetas">
          <div className="contenedor">
            <div className="contenedor-tarjetas">
              <div className="tarjeta">
                <img src={Icono1} alt="Icono1" />
                <h3>CARDIO WORKOUT</h3>
                <p>Aaslk;dfjaslk;dflkasjdfkljasdlkflkasjdfkljasdlkf</p>
                <a href="/">Read More</a>
              </div>
              <div className="tarjeta">
                <img src={Icono2} alt="Icono2" />
                <h3>STREING WORKOUT</h3>
                <p>Aaslk;dfjaslk;dflkasjdfkflkasjdfkljasdlkljasdlkf</p>
                <a href="/">Read More</a>
              </div>
              <div className="tarjeta">
                <img src={Icono3} alt="Icono3" />
                <h3>PUMP WORKOUT</h3>
                <p>Aaslk;dfjaslk;dflkasjdfklflkasjdfkljasdlkjasdlkf</p>
                <a href="/">Read More</a>
              </div>
            </div>
          </div>
        </section>

        <section id="Classes"></section>
      </body>
    </div>
  );
}

export default Home;
