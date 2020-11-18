import React, { useState, useEffect } from 'react'
import Navbar from './NavBar2/NavBar2';
import { isAuth, getCookie, signout } from '../../helpers/auth';

import DatePicker, {registerLocale} from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import es from 'date-fns/locale/es'


import "./Turnos.css"

import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';

function Turnos() {

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

    const [startDate, setStartDate] = useState(new Date());
    
    var handleDateChange =
        date => setStartDate(date)

    registerLocale("es", es)
    
    const fiveDaysFromNow = new Date()
    fiveDaysFromNow.setDate(fiveDaysFromNow.getDate() +5)

    const HandleClick = e => {
        alert(`${e.target.name} ${startDate.getDate()}/${startDate.getMonth()}/${startDate.getFullYear()}`)
    }

    const onRadioChange = e => {
        console.log(e.target.value)
    };

    return (
        <div>
            <Navbar/>

            <div className='min-h-screen bg-gray-100 text-gray-900 flex justify-center'>
                <div className="max-w-screen-xl m-0 sm:m-20 bg-white shadow sm:rounded-lg flex justify-center flex-1">
                    <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
                        <div className="mt-12 flex flex-col items-center">
                            <h1 className="text-2xl xl:text-3xl font-extrabold">Bienvenido</h1>
                            <div className="nav__bienvenida">
                                <span>{name}</span>
                            </div>
                            <div className="text-2xl xl:text-3xl font-extrabold">
                                <h3 className="text-2xl xl:text-3xl font-extrabold">Estado de Suscripcion:</h3>
                            </div>
                            <div className="nav__bienvenida">
                                <span>Activa</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 bg-indigo-100 text-center hidden lg:flex">
                        <div className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat">

                            <div className="container-fluid">
                            <div className='mt-12 flex flex-col items-center'>
                                <div className="datepicker_title">

                                    <h1 className="text-2xl xl:text-3xl font-extrabold">Selecciona el dia</h1>
                                    <DatePicker 
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
                                        <h1 className="text-2xl xl:text-3xl font-extrabold">Selecciona la Clase</h1>
                                            {/* <Checklist /> */}
                                            <div className="custom-control custom-checkbox ">
                                                <div className="custom-control custom-radio custom-control-inline">
                                                    <input type="radio" id="customRadioInline1" name="customRadioInline1" className="custom-control-input" 
                                                    // checked={this.checkCrossfit}
                                                    onChange={onRadioChange}
                                                    value="crossfit"/>
                                                    <label className="custom-control-label" for="customRadioInline1">CrossFit</label>
                                                </div>
                                                <div className="custom-control custom-radio custom-control-inline">
                                                    <input type="radio" id="customRadioInline2" name="customRadioInline1" className="custom-control-input" 
                                                    onChange={onRadioChange}
                                                    // checked={this.checkSpinning}
                                                    value="spinning"
                                                    />
                                                    <label className="custom-control-label" for="customRadioInline2">Spinning</label>
                                                </div>
                                            </div>
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
                                                        <div className="col">
                                                            <button name="08:00" type="button" className="btn btn-primary" onClick={HandleClick}>
                                                                08:00
                                                            </button>
                                                            </div>
                                                        <div className="col">
                                                            <button name="09:00" type="button" className="btn btn-primary" onClick={HandleClick}>
                                                                09:00
                                                            </button>
                                                            </div>
                                                        <div className="col">
                                                            <button name="10:00" type="button" className="btn btn-primary" onClick={HandleClick}>
                                                                10:00
                                                            </button>
                                                            </div>
                                                        <div className="col">
                                                            <button name="11:00" type="button" className="btn btn-primary" onClick={HandleClick}>
                                                                11:00
                                                            </button>
                                                            </div>
                                                        <div className="col">
                                                            <button name="12:00" type="button" className="btn btn-primary" onClick={HandleClick}>
                                                                12:00
                                                            </button>
                                                            </div>
                                                    </div>
                                                </div>
                                                <div className="container_grid_horarios">
                                                    <div className="row">
                                                        <div className="col">
                                                            <button name="16:00" type="button" className="btn btn-primary" onClick={HandleClick}>
                                                                16:00
                                                            </button>
                                                            </div>
                                                        <div className="col">
                                                            <button name="17:00" type="button" className="btn btn-primary" onClick={HandleClick}>
                                                                17:00
                                                            </button>
                                                            </div>
                                                        <div className="col">
                                                            <button name="18:00" type="button" className="btn btn-primary" onClick={HandleClick}>
                                                                18:00
                                                            </button>
                                                            </div>
                                                        <div className="col">
                                                            <button name="19:00" type="button" className="btn btn-primary" onClick={HandleClick}>
                                                                19:00
                                                            </button>
                                                            </div>
                                                        <div className="col">
                                                            <button name="20:00" type="button" className="btn btn-primary" onClick={HandleClick}>
                                                                20:00
                                                            </button>
                                                            </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Turnos
