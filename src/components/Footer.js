import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import LogoPng from "../assets/Logo.png";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Informacion</h2>
            <Link to="/contacto">Contacto</Link>
            <Link to="/precios">Precios</Link>
            <Link to="/politicas">Politica de privacidad</Link>
            <Link to="/terminos">Terminos de servicio</Link>
          </div>
          <div className="footer-link-items">
            <h2>Sedes</h2>
            <Link to="/">Capital</Link>
            <Link to="/">Yerba buena</Link>
            <Link to="/">La Pampa</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Clases</h2>
            <Link to="/">Spinning</Link>
            <Link to="/">Yoga</Link>
            <Link to="/">Indor</Link>
            <Link to="/">Fuerza</Link>
          </div>
          <div className="footer-link-items">
            <h2>Social </h2>
            <Link to="/" target="_blank">
              Instagram
            </Link>
            <Link to="/" target="_blank">
              Facebook
            </Link>
            <Link to="/" target="_blank">
              Youtube
            </Link>
            <Link to="/" target="_blank">
              Twitter
            </Link>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="social-logo">
              <img src={LogoPng} alt="logo" />
            </Link>
          </div>
          <small className="website-rights">TDGYM © 2020</small>
          <div className="social-icons">
            <Link
              className="social-icon-link facebook"
              to="/"
              target="_blank"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f" />
            </Link>
            <Link
              className="social-icon-link instagram"
              to="/"
              target="_blank"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram" />
            </Link>
            <Link
              className="social-icon-link youtube"
              to="/"
              target="_blank"
              aria-label="Youtube"
            >
              <i className="fab fa-youtube" />
            </Link>
            <Link
              className="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter" />
            </Link>
            <Link
              className="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
