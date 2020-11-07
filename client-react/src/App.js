import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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
import Admin from './Screens/DashboardAdmin/Admin.jsx';
// import Users from './Screens/Users.jsx';
import Users from './Screens/DashboardUser/Users';
import PrivateContra from './Screens/DashboardUser/PrivateContra';

import PrivateRoute from './Routes/PrivateRoute';
import AdminRoute from './Routes/AdminRoute';
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
            <Route exact path="/" component={Home} />
            <Route exact path="/contacto" component={Contact} />
            <Route exact path="/precios" component={Precios} />
            {/* Usuarios */}
            <Route path='/register' exact render={props => <Register {...props} />} />
            <Route path='/login' exact render={props => <Login {...props} />} />
            <Route path='/users/password/forget' exact render={props => <Forget {...props} />} />
            <Route path='/users/activate/:token' exact render={props => <Activate {...props} />} />
            <Route path='/users/password/reset/:token' exact render={props => <Reset {...props} />} />
            {/* <Route path='/users' exact render={props => <Users {...props} />} /> */}
            <PrivateRoute path="/users" exact component={Users} />
            <PrivateRoute path="/users/config" exact component={PrivateContra} />
            <PrivateRoute path="/private" exact component={Private} />
            <AdminRoute path="/admin" exact component={Admin} />
            {/* Pagina no encontrada */}
            <Route component={NoMatch} />
          </Switch>
        </Router>
      </React.Fragment>
    </>
  );
}

export default App;
