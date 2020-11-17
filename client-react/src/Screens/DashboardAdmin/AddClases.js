import React from 'react';
import {Link} from 'react-router-dom'
import Navbar from './NavBar/NavBar';
import './Dashboard.css';

function AddClases() {
    return (
        <div className ='dashboard_admin'>
            <Navbar/>
            <h1>Nueva Clase</h1>
            <form action="">
                <div>
                    <input type="text" placeholder='Titulo' className='form-control' name='Titulo'/>
                    <textarea  name="descripcion" placeholder='Descripcion' id="" cols="30" rows="5" className='form-control'></textarea>
                    <input type="date" className='form-control' name='fecha'/>
                    <Link>
                    <button>Enviar</button>
                    </Link>
                </div>
            </form>
        </div>
    )
}

export default AddClases
