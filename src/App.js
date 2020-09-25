import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import Login from "./components/pages/Login";
import NoMatch from "./components/pages/NoMatch";

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
            <Route component={NoMatch} />
          </Switch>
        </Router>
      </React.Fragment>
    </>
  );
}

export default App;
