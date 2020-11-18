import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import '../styles/Horarios.css'
import axios from 'axios';


function Horarios() {
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
console.log(clases)

    return (
        <div>
            <Navbar/>
            <div className="container">
              
            <div className='titulo_horario'>
            <h1 className='titulo-horario'>Horarios</h1>
            </div>
            <FullCalendar
              plugins={[ dayGridPlugin ]}
              initialView="dayGridMonth"
              weekends={true}
              events={ clases.map(elemento =>(
                { title: elemento.titulo, date: elemento.fecha }
                ))}
                />
            </div>
        </div>
            
    )
}

export default Horarios
