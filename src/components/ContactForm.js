import React from "react";
import "./ContactForm.css";

import { Button } from "./Button";

function ContactForm() {
  return (
    <div className="container_form">
      <div className="form_title">
        <h2>CONTACTANOS</h2>
      </div>
      <div className="contact_form">
        <div className="form_datos_contacto">
          <div className="inputBox">
            <input type="text" placeholder="Nombre" required />
          </div>
          <div className="inputBox">
            <input type="text" placeholder="Apellido" required />
          </div>
          <div className="inputBox">
            <input type="text" placeholder="juan@example.com" required />
          </div>
        </div>
        <div className="form_MessageBox">
          <div className="MessageBox">
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Dejanos tu mensaje"
            ></textarea>
          </div>
        </div>
      </div>
      <div className="foot_form">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--medium"
        >
          ENVIAR
        </Button>
      </div>
    </div>
  );
}

export default ContactForm;
