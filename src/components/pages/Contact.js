import React from "react";
import "../../components/Contact_2.css";
import Footer from "../Footer";

function Contact() {
  return (
    <div className="container_general">
      <div className="container_title">
        <div className="container_title_principal">
          <h2>Te esperamos en calquiera de nuestras sucursales</h2>
        </div>
        <div className=" container_subtitle">
          <p>Todas totalmente equipadas para darte las mejores experiencias</p>
        </div>
      </div>
      <div className="social_items">
        <div className="image_social"></div>
        <div className="image_social"></div>
        <div className="image_social"></div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
