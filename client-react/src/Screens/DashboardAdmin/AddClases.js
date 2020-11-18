import React, { useState, useEffect } from 'react';
import Navbar from './NavBar/NavBar';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';

function AddClases() {
    const [formData, setFormData] = useState({
        titulo: '',
        descripcion: '',
        fecha: '',
        cupos: ''
      });
    
      const { titulo, descripcion, fecha, cupos } = formData;
      //Handle change from inputs
      const handleChange = text => e => {
        setFormData({ ...formData, [text]: e.target.value });
      };
    
      //submit data to backend
      const handleSubmit = e => {
        e.preventDefault();
        if (titulo && descripcion && fecha && cupos) {
            setFormData({ ...formData});
            axios.post(`${process.env.REACT_APP_API_URL}/admin/addclase`, {
                titulo,
                descripcion,
                fecha,
                cupos
              })
              .then(res => {
                setFormData({
                  ...formData,
                  titulo: '',
                  descripcion: '',
                  fecha: '',
                  cupos: ''
                });
    
                toast.success(res.data.message);
              })
              .catch(err => {
                setFormData({
                  ...formData,
                  titulo: '',
                  descripcion: '',
                  fecha: '',
                  cupos: ''
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
              Nueva Clase
            </h1>
            <form
              className='w-full flex-1 mt-8 text-indigo-500'
              onSubmit={handleSubmit}
            >
              <div className='mx-auto max-w-xs relative '>
                <input
                  className='w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white'
                  type='text'
                  placeholder='Titulo'
                  onChange={handleChange('titulo')}
                  value={titulo}
                />
                <input
                  className='w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5'
                  type='text'
                  placeholder='Descripcion'
                  onChange={handleChange('descripcion')}
                  value={descripcion}
                />
                <input
                  className='w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5'
                  type='date'
                  placeholder='Cantidad de Turnos'
                  onChange={handleChange('fecha')}
                  value={fecha}
                />
                <input
                  className='w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5'
                  type="number"
                  placeholder='Cupos Disponibles'
                  onChange={handleChange('cupos')}
                  value={cupos}
                />
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

export default AddClases
