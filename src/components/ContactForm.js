import React from "react";
import "./ContactForm.css";
import './Button.css'
import emailjs from 'emailjs-com'
import { Button } from "./Button";

function ContactForm() {

  function sendMail(e){
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_4tdd57e', e.target, 'user_qIJzZjoZMlupoiS5f4Ta4')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset()
  }

  return (
    <div className="container_form">
      <div className="form_title">
        <h2>CONTACTANOS</h2>
      </div>
      <form onSubmit={sendMail}>
        <div className="contact_form">
          <div className="form_datos_contacto">
            <div className="inputBox">
              <input type="text" placeholder="Nombre" name="name" required />
            </div>
            <div className="inputBox">
              <input type="text" placeholder="Apellido" name="last_name" required />
            </div>
            <div className="inputBox">
              <input type="text" placeholder="juan@example.com" name="mail" required />
            </div>
          </div>
          <div className="form_MessageBox">
            <div className="MessageBox">
              <textarea
                name="message"
                id=""
                cols="30"
                rows="10"
                placeholder="Dejanos tu mensaje"
              ></textarea>
            </div>
          </div>
        </div>
      </form>
      <div className="foot_form">
        <button type="submit">
          ENVIAR
        </button>
      </div>
    </div>
  );
}

export default ContactForm;
