import React from 'react';
import Navbar from '../../components/Navbar';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import '../styles/Horarios.css'

function Horarios() {
    return (
        <div>
            <Navbar/>
            <div className='titulo_horario'>
            <h1 className='titulo-horario'>Horarios</h1>
            </div>
            <FullCalendar
  plugins={[ dayGridPlugin ]}
  initialView="dayGridMonth"
  weekends={true}
  events={[
    { title: 'event 1', date: '2020-11-02' },
    { title: 'event 3', date: '2020-11-02' },
    { title: 'event 2', date: '2020-11-09' }
  ]}
/>
        </div>
    )
}

export default Horarios
