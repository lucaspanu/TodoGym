import React, { useState, useEffect } from 'react';
import Navbar from './NavBar/NavBar';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';


function AddTurnos() {
    const [formData, setFormData] = useState({
        titulo: '',
        descripcion: '',
        horarios: '',
        cupos: '',
        horario: '',
        clase: '',
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
    var { horario, clase, clases} = formData;

    
    //Handle change from inputs
    const handleChange = text => e => {
      if (e.target.value != text ) {
        setFormData({ ...formData, [text]: e.target.value });
        console.log(text, e.target.value)
      }else{
        setFormData({ ...formData, [text]: null });
      }
      };
    
      //submit data to backend
      const handleSubmit = e => {
        if (horario && clase) {
            setFormData({ ...formData});
            axios.post(`${process.env.REACT_APP_API_URL}/turno`, {
                horario,
                clase
              })
              .then(res => {
                setFormData({
                  ...formData,
                  horario: '',
                  clase: ''
                });
                toast.success('Turno Cargado Correctamente');
              })
              .catch(err => {
                setFormData({
                  ...formData,
                  horario: '',
                  clase: ''
                });
                console.log(err.response);
                toast.error(err.response.data.errors);
              }); 
        } else {
          toast.error('Rellena todo los campos');
        }
    };

    return (
        <>
            <Navbar/>
            <ToastContainer />
            <div className='min-h-screen bg-gray-100 text-gray-900 flex justify-center'>
            <div className='max-w-screen-xl m-0 sm:m-20 bg-white shadow sm:rounded-lg flex justify-center flex-1'>
            <div className='mt-12 flex flex-col items-center'>
            <h1 className='text-2xl xl:text-3xl font-extrabold'>
              Cargar Horarios de Clase
            </h1>
            <form
              className='w-full flex-1 mt-8 text-indigo-500'
              onSubmit={handleSubmit}
            >
              <div className='mx-auto max-w-xs relative '>
                <select
                id='clase'
                name='clase'
                className='w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5'
                placeholder='clases'
                onChange={handleChange('clase')}>
                  <option >clase</option>
                    {clases.map(elemento =>(
                            <option key={elemento.id} value={elemento.titulo}>{elemento.titulo}</option>
                    ))}
                </select>
                <select 
                id='horario'
                name='horario'
                className='w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5'
                placeholder='horario'
                onChange={handleChange('horario')}
                label='asdasd'
                >
                  <option >horario</option>
                    <option value='08:00'>08:00</option> 
                    <option value='09:00'>09:00</option>
                    <option value='10:00'>10:00</option>
                    <option value='11:00'>11:00</option>
                    <option value='12:00'>12:00</option>
                    <option value='16:00'>16:00</option>
                    <option value='17:00'>17:00</option>
                    <option value='18:00'>18:00</option>
                    <option value='19:00'>19:00</option>
                    <option value='20:00'>20:00</option>
                </select>
                <button
                  type='submit'
                  className='mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none'
                >
                  <i class="far fa-calendar-plus"></i>
                  <span className='ml-3'>Guardar</span>
                </button>
              </div>
            </form>
            </div>
            </div>
            </div>
        </>
    )
}

export default AddTurnos
