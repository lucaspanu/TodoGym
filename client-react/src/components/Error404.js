import React from "react";
import "./Error404.css";
import { Link } from "react-router-dom";
import ImagenError from "../assets/Img/404.svg";

// Paguina 404 - Muestra cuando una paguina no existe

function Error404() {
  return (
    <>
      <section className="page-not-found">
        {/* Imagen */}
        <img src={ImagenError} alt="Error 404" />
        {/* Texto */}
        <h1>Pagina No Econtrada</h1>
        <p>Lo sentimos no pudimos encontrar lo que buscas</p>
        <Link to="/">
          <button className="button-volver">Volver</button>
        </Link>
      </section>
    </>
  );
}

export default Error404;
