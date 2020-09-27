import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

// Paginas
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import Login from "./components/pages/Login";
import NoMatch from "./components/pages/NoMatch";
import Precios from "./components/pages/Precios";

//Elementos
import NavBar from "./components/Navbar";

function App() {
  return (
    <>
      <React.Fragment>
        <Router>
          <NavBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/contacto" component={Contact} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/precios" component={Precios} />
            <Route component={NoMatch} />
          </Switch>
        </Router>
      </React.Fragment>
    </>
  );
}

export default App;
