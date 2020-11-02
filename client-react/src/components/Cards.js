import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";
import img1 from "../assets/Img/img-1.jpg";
import img2 from "../assets/Img/img-2.jpg";
import img3 from "../assets/Img/img-3.jpg";
import img4 from "../assets/Img/img-4.jpg";
import img5 from "../assets/Img/img-5.jpg";

function Cards() {
  return (
    <div className="cards">
      <h1>¡Prueba nuestras actividades!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={img1}
              text="Funcional es un entrenamiento personal muy efectivo"
              label="Funcional"
              path="/"
            />
            <CardItem
              src={img2}
              text="Un sistema de entrenamiento de fuerza y acondicionamiento"
              label="Crossfit"
              path="/"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src={img3}
              text="Es un baño de vapor o sudoración que se realiza en un recinto a muy alta temperatura"
              label="Sauna"
              path="/"
            />
            <CardItem
              src={img4}
              text="Disfruta de todas las actividades de natacion"
              label="Piscina"
              path="/"
            />
            <CardItem
              src={img5}
              text="Busca una nutritiva comida para acompañar tu entrenamiento"
              label="Restaurante"
              path="/"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
