import React from "react";
import icono from "../assets/Iconos/map-pointer.png";
import { Link } from "react-router-dom";

function Sedes() {
  return (
    <div className="container_sedes">
      <div className="container_sedes_wrapper">
        <Link to="/sedes/capital" className="item_sedes">
          <img className="sede_icon" src={icono} alt="icono-sedes" />
          <div>
            <h2>Capital</h2>
          </div>
        </Link>
        <Link to="/sedes/yerbabuena" className="item_sedes">
          <img className="sede_icon" src={icono} alt="icono-sedes" />
          <div>
            <h2>Yerba Buena</h2>
          </div>
        </Link>
      </div>
      <div className="container_sedes_wrapper">
        <Link to="/sedes/lapampa" className="item_sedes">
          <img className="sede_icon" src={icono} alt="icono-sedes" />
          <div>
            <h2>La Pampa</h2>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Sedes;
