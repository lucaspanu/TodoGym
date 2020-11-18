import React from 'react';
import Navbar from './NavBar/NavBar';
import './Dashboard.css';

function Dashboard() {
    return (
        <div className ='dashboard_admin'>
            <Navbar/>
            <h1>Dashboard Administrador</h1>
        </div>
    )
}

export default Dashboard
