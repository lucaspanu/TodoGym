import React from "react";
import "../../components/styles/Contact.css";
import Footer from "../Footer";
import ContactForm from "../ContactForm.js";
import RedesSociales from "../RedesSociales.js";
import Sedes from "../Sedes.js";
import NavBar from "../../components/Navbar";

function Contact() {
  return (
    <div>
      <NavBar/>
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
        <RedesSociales />
        {/* <Sedes /> */}
        <ContactForm />
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
