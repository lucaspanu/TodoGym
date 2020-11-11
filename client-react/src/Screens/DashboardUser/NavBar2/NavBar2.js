import React, { useState, useEffect } from 'react';
import './NabBar2.css';
import imgLogo from '../../../assets/Logo.png'

import { Link, Redirect } from 'react-router-dom';
import { isAuth, getCookie, signout } from '../../../helpers/auth';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';

function NavBar2() {
// Base de datos
const [formData, setFormData] = useState({
    name: '',
    email: '',
    password1: '',
    role: ''
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
        const { role, name, email } = res.data;
        setFormData({ ...formData, role, name, email });
      })
      .catch(err => {
        toast.error(`Error To Your Information ${err.response.statusText}`);
      });
  };
  
  const { name, email, password1,  role } = formData;
  const handleChange = text => e => {
    setFormData({ ...formData, [text]: e.target.value });
  };
  
/*===== LINK ACTIVE  =====*/ 
const linkColor = document.querySelectorAll('.nav__link')

function colorLink(){
    if(linkColor){
        linkColor.forEach(l=> l.classList.remove('active'))
        this.classList.add('active')
    }
}
linkColor.forEach(l=> l.addEventListener('click', colorLink))

//Mostrar NavBar
const [sidebar, setSidebar] = useState(false);

const showSidebar = () => setSidebar(!sidebar);

return (
    <div className='navbar2'>
        <link href='https://cdn.jsdelivr.net/npm/boxicons@2.0.5/css/boxicons.min.css' rel='stylesheet'/>

        <div className={sidebar ? "body-pd" : "" } id="body-pd">
        <div className={sidebar ? "header body-pd" :  "header"} id="header">
            <div className="header__toggle" onClick={showSidebar} >
                <i className={sidebar ? 'bx bx-x' : 'bx bx-menu'} id="header-toggle"></i>
            </div>

            <div className="nav__bienvenida">
                <span>Bienvenido, {name}</span>
            </div>
            {/* <div class="header__img">
                <img src={imgPerfil} alt="perfil"/>
            </div> */}
        </div>

        <div className={sidebar ? "l-navbar show" : "l-navbar" } id="nav-bar">
            <nav className="nav">
                <div>
                    <Link to="#" className="nav__logo" onClick={showSidebar}>
                    <i className="fas fa-dumbbell"></i>
                        <span className="nav__logo-name">TODOGYM</span>
                    </Link>

                    <div className="nav__list">
                        
                        <Link to="/private" className="nav__link">
                            <i className='bx bx-user nav__icon' ></i>
                            <span className="nav__name">Perfil</span>
                        </Link>
                        
                        <Link to="/users/turnos" className="nav__link">
                            <i className='bx bxs-calendar' ></i>
                            <span className="nav__name">Turnos</span>
                        </Link>

                        <Link to="/users/suscripcion" className="nav__link">
                            <i className='bx bxs-id-card' ></i>
                            <span className="nav__name">Suscripcion</span>
                        </Link>

                        <Link to="/users/config" className="nav__link">
                            <i className='bx bxs-lock-alt'></i>
                            <span className="nav__name">Configuracion</span>
                        </Link>

                    </div>
                </div>

                <Link to ='/' className="nav__link" 
                    onClick={() => {
                    signout(() => {
                      toast.error('Signout Successfully');
                    });
                  }}>
                    <i className='bx bx-log-out nav__icon' ></i>
                    <span className="nav__name">Log Out</span>
                </Link>
            </nav>
        </div>
    </div>
    </div>
)
}

export default NavBar2
