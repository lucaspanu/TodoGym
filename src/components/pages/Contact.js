import React from "react";
import "../../components/Contact_2.css";
import icono from "../../assets/Iconos/map-pointer.png";
import Footer from "../Footer";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <div className="container_general">
      <div className="container_title">
        <div className="container_title_principal">
          <h1>Te esperamos en calquiera de nuestras sucursales</h1>
        </div>
        <div className=" container_subtitle">
          <h5>
            Todas totalmente equipadas para darte las mejores experiencias
          </h5>
        </div>
      </div>
      <div className="social_items">
        <div className="image_social">
          <Link to="/" target="_blank" className="social-icon facebook">
            <i class="fab fa-facebook-square " />
          </Link>
        </div>
        <div className="image_social">
          <Link to="/" target="_blank" className="social-icon instagram">
            <i class="fab fa-instagram" />
          </Link>
        </div>
        <div className="image_social">
          <Link to="/" target="_blank" className="social-icon youtube">
            <i class="fab fa-youtube" />
          </Link>
        </div>
      </div>
      <div className="container_sedes">
        <div className="item_sedes">
          {/* <div className="center">
            <div className="pointer"></div>
            <div className="shadow"></div>
          </div> */}

          <img className="sede_icon" src={icono} alt="icono" />
          <div>
            <h2>Capital</h2>
          </div>
        </div>
        <div className="item_sedes">
          <img className="sede_icon" src={icono} alt="icono" />
          <div>
            <h2>Yerba Buena</h2>
          </div>
        </div>
        <div className="item_sedes">
          <img className="sede_icon" src={icono} alt="icono" />
          <div>
            <h2>La Pampa</h2>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
