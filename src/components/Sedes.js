import React from "react";
import icono from "../assets/Iconos/map-pointer.png";

function Sedes() {
  return (
    <div className="container_sedes">
      <div className="item_sedes">
        <img className="sede_icon" src={icono} alt="icono-sedes" />
        <div>
          <h2>Capital</h2>
        </div>
      </div>
      <div className="item_sedes">
        <img className="sede_icon" src={icono} alt="icono-sedes" />
        <div>
          <h2>Yerba Buena</h2>
        </div>
      </div>
      <div className="item_sedes">
        <img className="sede_icon" src={icono} alt="icono-sedes" />
        <div>
          <h2>La Pampa</h2>
        </div>
      </div>
    </div>
  );
}

export default Sedes;
