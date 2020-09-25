import React from "react";
import "../../components/Contact.css";
import Footer from "../Footer";

function Contact() {
  return (
    <div>
      <div className="Container">
        <div className="Container_General">
          <div className="Cards_General">
            <h2>Contact Us</h2>
            <p>Mail:</p>
          </div>
        </div>

        <div className="Container_Cards">
          <div className="Cards">
            <h2>Sede Capital</h2>
            <p>Direccion:</p>
            <p>Telefono:</p>
          </div>
          <div className="Cards">
            <h2>Sede Yerba Buena</h2>
            <p>Direccion:</p>
            <p>Telefono:</p>
          </div>
          <div className="Cards">
            <h2>Sede La Pampa</h2>
            <p>Direccion:</p>
            <p>Telefono:</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
