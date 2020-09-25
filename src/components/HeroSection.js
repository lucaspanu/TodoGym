import React from "react";
import { Button } from "./Button";
import "./HeroSection.css";
import imagenPortada from "../assets/Img/ImagenPortada2.jpg";

function HeroSection() {
  return (
    <div className="hero-container">
      <h1>COMIENZA A ENTRENAR</h1>
      <p>¿Que estar esperando?</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          INGRESAR AHORA
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
