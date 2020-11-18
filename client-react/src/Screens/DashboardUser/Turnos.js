import React, { useState, useEffect } from 'react'
import Navbar from './NavBar2/NavBar2';
import { isAuth, getCookie, signout } from '../../helpers/auth';

import DatePicker, {registerLocale} from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import es from 'date-fns/locale/es'
import Form from 'react-bootstrap/Form'

import "./Turnos.css"

import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import { forEach } from 'lodash';

function Turnos() {
    const [formData, setFormData] = useState({
        name: '',
        suscripcion: '',
        clases:[],
        turnos:[],
        clase: ''
    });

    //Fechas
    const [startDate, setStartDate] = useState(new Date());
    
    var handleDateChange = date => setStartDate(date)

    registerLocale("es", es)
    
    const fiveDaysFromNow = new Date()
    fiveDaysFromNow.setDate(fiveDaysFromNow.getDate() +5)

    
    //evneto click
    const handleClick = text => e => {
    console.log(text);
    e.preventDefault();
    setFormData({ ...formData });
    axios
      .put(
        `${process.env.REACT_APP_API_URL}/turno/edit/${text}`,
        {
            usuario: `${isAuth()._id}`,
            fecha: `${startDate.getFullYear()}-${startDate.getMonth()+1}-${startDate.getDate()}`
        }
      )
      .then(res => {
        toast.success('Turno agregado exitosamente');
      })
      .catch(err => {
        console.log(err.response);
      });
    }

    //Carga de Datos
    useEffect(() => {
        loadData();
    }, []);

    const loadData = () => {
        const token = getCookie('token');
        axios.all([
            axios.get(`${process.env.REACT_APP_API_URL}/clases`,{clases}),
            axios.get(`${process.env.REACT_APP_API_URL}/user/${isAuth()._id}`, {
            headers: { Authorization: `Bearer ${token}` }
            }),
            axios.get(`${process.env.REACT_APP_API_URL}/turnos`,{})
        ])
          .then(axios.spread((req, res,tur) => {
            const { name, suscripcion} = res.data;
            setFormData({ ...formData, name, suscripcion, clases: req.data, turnos: tur.data});
          }))
          .catch(err => {
            toast.error(`Error To Your Information ${err.response.statusText}`);
          });
    };

    const { name, suscripcion, clases, turnos, clase } = formData;

    const handleChange = text => e => {
        if (e.target.value != text ) {
          setFormData({ ...formData, [text]: e.target.value });
          console.log(text, e.target.value)
        }else{
          setFormData({ ...formData, [text]: null });
        }
        };
    
    return (
        <div>
            <Navbar/>
            <ToastContainer/>
            <div className='min-h-screen bg-gray-100 text-gray-900 flex justify-center'>
                <div className="max-w-screen-xl m-0 sm:m-20 bg-white shadow sm:rounded-lg flex justify-center flex-1 contenedor_turnos">
                    <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
                        <div className="mt-12 flex flex-col items-center">
                            <h1 className="text-2xl xl:text-3xl font-extrabold">Bienvenido</h1>
                            <div className="nav__bienvenida">
                                <span >{name}</span>
                            </div>
                            <div className="text-2xl xl:text-3xl font-extrabold">
                                <h3 className="text-2xl xl:text-3xl font-extrabold">Estado de Suscripcion:</h3>
                            </div>
                            <div className="nav__bienvenida">
                            <span className={suscripcion?'sus_activa' : 'sus_inactiva'}>{suscripcion?'Activa' : 'Inactiva'}</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 bg-indigo-100 text-center  lg:flex">
                        <div className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat">
                    <form >

                            <div className="container-fluid">
                            <div className='mt-12 flex flex-col items-center'>
                                <div className="datepicker_title">

                                    <h1 className="text-2xl xl:text-3xl font-extrabold">Selecciona el dia</h1>
                                    <DatePicker
                                    disabled = {!suscripcion}
                                    className="datePicker"
                                    selected={startDate}
                                    onChange={handleDateChange}
                                    minDate={new Date()}
                                    maxDate={fiveDaysFromNow}
                                    filterDate={date => date.getDay() !==6 && date.getDay() !==0}
                                    locale="es"
                                    dateFormat="dd/MM/yyyy"/>
                                </div>
                                <div className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat">
                                    <div className='mt-12 flex flex-col items-center'>
                                        <div className="datepicker_title">
                                        <h1 className="text-2xl xl:text-3xl font-extrabold" >Selecciona la Clase</h1>
                                            <select
                                            id='clase'
                                            name='clase'
                                            className='w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5'
                                            placeholder='clases'
                                            onChange={handleChange('clase')}>
                                              <option hidden>clase</option>
                                                {clases.filter(e => e.fecha == `${startDate.getFullYear()}-${startDate.getMonth()+1}-${startDate.getDate()}`).map(elemento =>(
                                                        <option key={elemento.id} value={elemento.titulo}>{elemento.titulo}</option>
                                                ))}
                                            </select>                                            
                                        </div>
                                    </div>
                                </div>
                                <div className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat grid_horarios">
                                    <div className='mt-12 flex flex-col items-center'>
                                        <div className="datepicker_title">
                                        <h1 className="text-2xl xl:text-3xl font-extrabold">Selecciona el turno</h1>
                                            {/* <GridHorarios /> */}

                                            <div className="container -fluid">
                                                <div className="container_grid_horarios">
                                                    <div className="row">
                                                    {turnos.filter(e => e.clase == clase).map(elemento =>(
                                                         <div className="col">
                                                         <button name={elemento.horario} type="button" className="btn btn-primary" disabled = {!suscripcion} onClick={handleClick(elemento._id)} 
                                                         disabled={elemento.usuario==`${isAuth()._id}`? true : false}>
                                                            {elemento.horario}
                                                         </button>
                                                         </div>
                                                    ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </div>
                    </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Turnos
