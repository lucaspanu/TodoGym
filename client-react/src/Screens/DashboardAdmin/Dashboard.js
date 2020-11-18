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
import { isAuth, getCookie, signout } from '../../helpers/auth';

function Dashboard() {
    const [formData, setFormData] = useState({
        clases:[],
        name: '',
        email: '',
        role: '',
        createdAt: '',
        updatedAt: ''
    });

    useEffect(() => {
        loadClases();
      }, []);
    
      const loadClases = () => {
        const token = getCookie('token');
        axios.all([
        axios.get(`${process.env.REACT_APP_API_URL}/clases`,{clases}),
        axios.get(`${process.env.REACT_APP_API_URL}/user/${isAuth()._id}`, {
          headers: { Authorization: `Bearer ${token}` }
          }),
        ])
        .then(axios.spread((req, res,tur) => {
          const { name, email, role, createdAt, updatedAt} = res.data;
          setFormData({ ...formData, name, email,createdAt, updatedAt, role, clases: req.data})
            }))
            .catch((err) => {
              console.log(err);
        });
    };
    var {name,email, role,createdAt, updatedAt ,clases} = formData;

    const handleChange = text => e => {
      console.log(text)
      axios
      .delete(
        `${process.env.REACT_APP_API_URL}/admin/clase/${text}`,
        {text}
      )
      .then(res => {
        console.log(res)
        toast.success('Borrado Existoso');
      })
      .catch(err => {
        console.log(err.response);
      });
    };

    return (
        <>
        <Navbar/>
        <ToastContainer />
        
        <div className ='dashboard_admin'>
        <h1>Dashboard Administrador</h1>
        </div>

        <div className="container">
<div className="pefil_dashboard">

        <h2>Perfil</h2>
    <span>Nombre:    {name}</span>
    <span>Email:    {email}</span>
    <span>Rol:    {role}</span>
    <span>Fecha Ingreso:    {createdAt}</span>
    <span>Fecha Modificacion:    {updatedAt}</span>
</div>

          <div className="dashboard_clases-head">
        <h2>Clases</h2>
        <Link className='btn_clases' to='/admin/clases'>
            <button className='btn_clases_btn btn_clases-btn'>Nueva Clase</button>
        </Link>
          </div>
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
  <td className='td_borrar'>
    <button className='btn_borrar' value={elemento.id} onClick={handleChange(`${elemento._id}`)}>Borrar</button>
    </td>
  </tr>
                    ))}

  </tbody>
</Table>
<h3>Otras funciones:</h3>
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
