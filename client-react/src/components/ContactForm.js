import React from "react";
import "./ContactForm.css";
import './Button.css'
import emailjs from 'emailjs-com'

class ContactForm extends React.Component{

  handleChange = (e) => {
    console.log({value: e.target.value})
  }



  handleSubmit = (e) => {

    e.preventDefault();

    emailjs.sendForm('gmail', 'template_4tdd57e', e.target, 'user_qIJzZjoZMlupoiS5f4Ta4')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset()
      alert("Gracias por tu mensaje.")

      }
  render() {
     return (
    <div className="container_form">
      <div className="form_title">
        <h2>CONTACTANOS</h2>
      </div>
      <form className="form-contact" onSubmit={this.handleSubmit.bind(this)}>
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
              <textarea onChange={this.handleChange}
                name="message"
                id=""
                cols="30"
                rows="10"
                placeholder="Dejanos tu mensaje"
              ></textarea>
            </div>
          </div>
        </div>
      <div className="foot_form">
        <button className="btn--outline">
          ENVIAR
        </button>
      </div>
      </form>
    </div>
  );
}
}

export default ContactForm;
