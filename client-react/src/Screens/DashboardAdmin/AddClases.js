import React from 'react';
import Navbar from './NavBar/NavBar';
import './Dashboard.css';

function AddClases() {
    return (
        <div className ='dashboard_admin'>
            <Navbar/>
            <h1>Add Clases</h1>
            <Button>Nueva Clase</Button>
        </div>
    )
}

export default AddClases
