import React from "react";
import "./styles/ContactForm.css";

import { Button } from "./Button";

function ContactForm() {
  return (
    <div className="container_form">
      <h2>CONTACTANOS</h2>
      <div className="contact_form">
        <div className="form">
          <div>
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
          <div>
            <div className="MessageBox">
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                placeholder="Dejanos tu mensaje"
              ></textarea>
            </div>
            <Button
              className="btns"
              buttonStyle="btn--outline"
              buttonSize="btn--medium"
            >
              ENVIAR
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
