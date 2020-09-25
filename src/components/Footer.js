import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import LogoPng from "../assets/Logo.png";

function Footer() {
  return (
    <div className="footer-container">
      <div class="footer-links">
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>Info</h2>
            <Link to="/sign-up">Contacto</Link>
            <Link to="/">Precios</Link>
            <Link to="/">Politica de privacidad</Link>
            <Link to="/">Terminos de servicio</Link>
          </div>
          <div class="footer-link-items">
            <h2>Sedes</h2>
            <Link to="/">Capital</Link>
            <Link to="/">Yerba buena</Link>
            <Link to="/">La Pampa</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>Clases</h2>
            <Link to="/">Spinning</Link>
            <Link to="/">Yoga</Link>
            <Link to="/">Indor</Link>
            <Link to="/">Fuerza</Link>
          </div>
          <div class="footer-link-items">
            <h2>Social </h2>
            <Link to="/">Instagram</Link>
            <Link to="/">Facebook</Link>
            <Link to="/">Youtube</Link>
            <Link to="/">Twitter</Link>
          </div>
        </div>
      </div>
      <section class="social-media">
        <div class="social-media-wrap">
          <div class="footer-logo">
            <Link to="/" className="social-logo">
              <img src={LogoPng} alt="logo" />
            </Link>
          </div>
          <small class="website-rights">TDGYM © 2020</small>
          <div class="social-icons">
            <Link
              class="social-icon-link facebook"
              to="/"
              target="_blank"
              aria-label="Facebook"
            >
              <i class="fab fa-facebook-f" />
            </Link>
            <Link
              class="social-icon-link instagram"
              to="/"
              target="_blank"
              aria-label="Instagram"
            >
              <i class="fab fa-instagram" />
            </Link>
            <Link
              class="social-icon-link youtube"
              to="/"
              target="_blank"
              aria-label="Youtube"
            >
              <i class="fab fa-youtube" />
            </Link>
            <Link
              class="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="Twitter"
            >
              <i class="fab fa-twitter" />
            </Link>
            <Link
              class="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <i class="fab fa-linkedin" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
