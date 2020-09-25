import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <h1>COMIENZA A ENTRENAR</h1>
      <p>¿Que estas esperando?</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          INGRESAR AHORA
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          REGISTRARSE
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
