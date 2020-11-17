import React, { useState, useEffect } from "react";
import {Link, Redirect, useHistory } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import { updateUser, isAuth, getCookie} from '../../helpers/auth';


function PagoRealizado() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password1: '',
        textChange: 'Update',
        role: '',
        suscripcion: "true" 
      });
    
      useEffect(() => {
        loadProfile();
      }, []);
    
      const loadProfile = () => {
        const token = getCookie('token');
        axios
          .get(`${process.env.REACT_APP_API_URL}/user/${isAuth()._id}`, {
            headers: {
              Authorization: `Bearer ${token}`
            }
          })
          .then(res => {
            const { role, name, email, suscripcion } = res.data;
            setFormData({ ...formData, role, name, email, suscripcion});
          })
          .catch(err => {
            toast.error(`Error To Your Information ${err.response.statusText}`);
          });
      };
      
      const { name, email, password1, textChange, role, suscripcion } = formData;


      const handleSubmit = e => {
        const token = getCookie('token');
        console.log(token);
        e.preventDefault();
        setFormData({ ...formData, textChange: 'Submitting' });
        axios
          .put(
            `${process.env.REACT_APP_API_URL}/user/update`,
            {
              name,
              email,
              password: password1,
              suscripcion: true
            },
            {
              headers: {
                Authorization: `Bearer ${token}`
              }
            }
          )
          .then(res => {
            updateUser(res, () => {
              setFormData({ ...formData, textChange: 'Update'});
             window.location.href = "/private";
            });
          })
          .catch(err => {
            console.log(err.response);
          });
      };
    

    return (
        <>
        <ToastContainer />
        <div class="error-rescue-modal servidor">
                <div class="error-rescue-modal-centralizer">
                    <div class="error-rescue-modal-mensagem error-blue">
                    <div class="error-rescue-modal-cabecalho"><span class="error-rescue-modal-titulo">PAGO REALIZADO</span></div>
                        <span class="error-rescue-modal-icon"></span>
                            Se a realizado el pago correctamente!
                        <div class="error-rescue-modal-rodape">
                            <form onSubmit={handleSubmit}>
                            <button class="btn btn-nodanger" onClick>OK</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PagoRealizado
