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
                <a href="/">READ MORE</a>
              </div>
              <div className="tarjeta">
                <img src={Icono2} alt="Icono2" />
                <h3>STREING WORKOUT</h3>
                <p>Aaslk;dfjaslk;dflkasjdfkflkasjdfkljasdlkljasdlkf</p>
                <a href="/">READ MORE</a>
              </div>
              <div className="tarjeta">
                <img src={Icono3} alt="Icono3" />
                <h3>PUMP WORKOUT</h3>
                <p>Aaslk;dfjaslk;dflkasjdfklflkasjdfkljasdlkjasdlkf</p>
                <a href="/">READ MORE</a>
              </div>
            </div>
          </div>
        </section>

        <section id="classes">
          <div className="contenedor">
            <h2>CLASES</h2>
            <table>
              <th>DAYS</th>
              <th>MONDAY</th>
              <th>TUESDAY</th>
              <th>WEDNESDAY</th>
              <th>THUSDAY</th>
              <th>FRIDAY</th>
              <tr className="gris">
                <td className="horario">09.00 - 10.00</td>
                <td></td>
                <td></td>
                <td>
                  <p className="negrita">Yoga</p>
                  <p>Michael Lewis</p>
                </td>
                <td>
                  <p className="negrita">Zumba</p>
                  <p>Donal Trump</p>
                </td>
                <td>
                  <p className="negrita">Body Balance</p>
                  <p>Gloria Ami</p>
                </td>
              </tr>
              <tr className="blanco">
                <td className="horario">10.00 - 12.00</td>
                <td>
                  <p className="negrita">Zumba</p>
                  <p>Donal Trump</p>
                </td>
                <td>
                  <p className="negrita">Body Balance</p>
                  <p>Gloria Ami</p>
                </td>
                <td></td>
                <td></td>
                <td>
                  <p className="negrita">Yoga</p>
                  <p>Michael Lewis</p>
                </td>
              </tr>
              <tr className="gris">
                <td className="horario">12.00 - 14.00</td>
                <td>
                  <p className="negrita">Body Balance</p>
                  <p>Gloria Ami</p>
                </td>
                <td>
                  <p className="negrita">Zumba</p>
                  <p>Donal Trump</p>
                </td>
                <td></td>
                <td>
                  <p className="negrita">Yoga</p>
                  <p>Michael Lewis</p>
                </td>
                <td></td>
              </tr>
            </table>
          </div>
        </section>
      </body>
    </div>
  );
}

export default Home;
