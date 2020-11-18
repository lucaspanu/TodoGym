import React, { useState, useEffect } from 'react';
import Navbar from './NavBar/NavBar';
import {Link} from 'react-router-dom'
import './Dashboard.css';
import Table from 'react-bootstrap/Table'
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function Dashboard() {
    const [formData, setFormData] = useState({
        clases:[]
    });

    useEffect(() => {
        loadClases();
      }, []);
    
      const loadClases = () => {
        axios.get(`${process.env.REACT_APP_API_URL}/clases`,{clases})
            .then((res) => {
                setFormData({
                    ...formData,
                    clases: res.data
                });
                
            })
            .catch((err) => {
              console.log(err);
        });
    };
    var {clases} = formData;

    return (
        <>
        <Navbar/>
        <ToastContainer />
        
                <div className ='dashboard_admin'>
        <h1>Dashboard Administrador</h1>
        <h2>Clases</h2>
        </div>

        <div className="container">
        <Link className='btn_clases' to='/admin/clases'>
            <button className='btn_clases_btn btn_clases-btn'>Nueva Clase</button>
        </Link>
            {/* Tabla de Clases */}
        <Table  bordered hover responsive >
        <thead className='thead-dark'>
    <tr>
      <th>Titulo</th>
      <th>Descripcion</th>
      <th>Fecha</th>
      <th>Cupos</th>
    </tr>
  </thead>
  
  
  <tbody>
  {clases.map(elemento =>(
  <tr>
      <td>{elemento.titulo}</td>
  <td>{elemento.descripcion}</td>
  <td>{elemento.horarios}</td>
  <td>{elemento.cupos}</td>
  <button>Borrar</button>
  </tr>
                    ))}

  </tbody>
</Table>
<Container>
<Row>
    <Col><Link to='/admin/turnos'><button className='btn_clases_btn btn_clases-btn'>Nuevo Turno</button></Link></Col>
    <Col><Link to='/admin/new'><button className='btn_clases_btn btn_clases-btn'>Nuevo 
    Admin</button></Link></Col>
  </Row>
</Container>

</div>
</>
    )
}

export default Dashboard
