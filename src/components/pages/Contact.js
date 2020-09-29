import React from "react";
import "../../components/Contact_2.css";
import Footer from "../Footer";

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
        <div className="image_social"></div>
        <div className="image_social"></div>
        <div className="image_social"></div>
      </div>
      <div className="container_sedes">
        <div className="item_sedes"></div>
        <div className="item_sedes"></div>
        <div className="item_sedes"></div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
