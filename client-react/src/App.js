import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Link, Redirect } from 'react-router-dom';
import "./App.css";

// Paginas
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import Precios from "./components/pages/Precios";
import NoMatch from "./components/pages/NoMatch";

//Usuario
import Register from './Screens/Register';
import Login from "./Screens/Login";
import Forget from "./Screens/ForgetPassword";
import Activate from './Screens/Activate'
import Reset from './Screens/Reset'
import Private from './Screens/DashboardUser/Private';
// import Users from './Screens/DashboardUser/Users';
// import Users from './Screens/Users.jsx';
import PrivateContra from './Screens/DashboardUser/PrivateContra';
import UserSuscripcion from './Screens/DashboardUser/SuscripcionUser';
import PagoCancelado from './Screens/DashboardUser/PagoCancelado';
import PagoExitoso from './Screens/DashboardUser/PagoRealizado';
import Turnos from './Screens/DashboardUser/Turnos';
//Administrador
import Admin from './Screens/DashboardAdmin/Admin.jsx';
import Dashboard from "./Screens/DashboardAdmin/Dashboard";
import Clases from "./Screens/DashboardAdmin/AddClases";
import AddTurnos from "./Screens/DashboardAdmin/AddTurnos";
import NewAdmin from "./Screens/DashboardAdmin/NewAdmin";

//Rutas privadas
import PrivateRoute from './Routes/PrivateRoute';
import AdminRoute from './Routes/AdminRoute';
import HomeRoute from  './Routes/HomeRoute';
import 'react-toastify/dist/ReactToastify.css';

//Elementos
// import NavBar from "./components/Navbar";

function App() {
  return (
    <>
      <React.Fragment>
        <Router>
          {/* <Navbar/> */}
          <Switch>
            <HomeRoute exact path="/" component={Home} />
            <Route exact path="/contacto" component={Contact} />
            <Route exact path="/precios" component={Precios} />
            {/* Usuarios */}
            <Route path='/register' exact render={props => <Register {...props} />} />
            <Route path='/login' exact render={props => <Login {...props} />} />
            <Route path='/users/password/forget' exact render={props => <Forget {...props} />} />
            <Route path='/users/activate/:token' exact render={props => <Activate {...props} />} />
            <Route path='/users/password/reset/:token' exact render={props => <Reset {...props} />} />
            {/* <Route path='/users' exact render={props => <Users {...props} />} /> */}
            {/* <PrivateRoute path="/users" exact component={Users} />
             */}
            <Redirect exact from="/users" to="/private" />
            <PrivateRoute path="/private" exact component={Private} />
            <PrivateRoute path="/users/config" exact component={PrivateContra} />
            <PrivateRoute path="/users/turnos" exact component={Turnos} />
            <PrivateRoute path="/users/suscripcion" exact component={UserSuscripcion} />
            <PrivateRoute path="/canceled" exact component={PagoCancelado} />
            <PrivateRoute path="/success" exact component={PagoExitoso} />
            <AdminRoute path="/admin" exact component={Dashboard} />
            <AdminRoute path="/admin/clases" exact component={Clases} />
            <AdminRoute path="/admin/turnos" exact component={AddTurnos} />
            <AdminRoute path="/admin/new" exact component={NewAdmin} />

            {/* Pagina no encontrada */}
            <Route component={NoMatch} />
          </Switch>
        </Router>
      </React.Fragment>
    </>
  );
}

export default App;
