import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import { authenticate, isAuth } from '../../helpers/auth';
import { Link, Redirect } from 'react-router-dom';
import Navbar from './NavBar/NavBar';

function NewAdmin() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password1: '',
        password2: '',
        role: 'admin',
        textChange: 'Registrar'
      });
    
      const { name, email, password1, password2, textChange, role } = formData;
      //Handle change from inputs
      const handleChange = text => e => {
        setFormData({ ...formData, [text]: e.target.value });
      };
    
      //submit data to backend
      const handleSubmit = e => {
        e.preventDefault();
        if (name && email && password1) {
          if (password1 === password2) {
            setFormData({ ...formData, textChange: 'Submitting' });
            axios.post(`${process.env.REACT_APP_API_URL}/admin/new`, {
                name,
                email,
                password: password1,
                role: 'admin'
              })
              .then(res => {
                setFormData({
                  ...formData,
                  name: '',
                  email: '',
                  password1: '',
                  password2: '',
                  role: '',
                  textChange: 'Submitted'
                });
    
                toast.success(res.data.message);
              })
              .catch(err => {
                setFormData({
                  ...formData,
                  name: '',
                  email: '',
                  password1: '',
                  password2: '',
                  role: '',
                  textChange: 'Registrarse'
                });
                console.log(err.response);
                toast.error(err.response.data.errors);
              }); 
          } else {
            toast.error("Las contraseñas no son iguales");
          }
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
              Nueva cuenta Administrador
            </h1>

            <form
              className='w-full flex-1 mt-8 text-indigo-500'
              onSubmit={handleSubmit}
            >
              <div className='mx-auto max-w-xs relative '>
                <input
                  className='w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white'
                  type='text'
                  placeholder='Name'
                  onChange={handleChange('name')}
                  value={name}
                />
                <input
                  className='w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5'
                  type='email'
                  placeholder='Email'
                  onChange={handleChange('email')}
                  value={email}
                />
                <input
                  className='w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5'
                  type='password'
                  placeholder='Password'
                  onChange={handleChange('password1')}
                  value={password1}
                />
                <input
                  className='w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5'
                  type='password'
                  placeholder='Confirm Password'
                  onChange={handleChange('password2')}
                  value={password2}
                />
                <button
                  type='submit'
                  className='mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none'
                >
                  <i className='fas fa-user-plus fa 1x w-6  -ml-2' />
                  <span className='ml-3'>{textChange}</span>
                </button>
              </div>
            </form>
            </div>
          </div>
          </div>
        </>
    )
}

export default NewAdmin
