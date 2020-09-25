import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import Home from "./Home";
import Contact from "./Contact";
import NoMatch from "./NoMatch";

import NavBar from "./components/Navbar";
// import Footer from "./components/Footer";

function App() {
  return (
    <>
      <React.Fragment>
        <Router>
          <NavBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/contacto" component={Contact} />
            <Route component={NoMatch} />
          </Switch>
        </Router>
      </React.Fragment>
    </>
  );
}

export default App;
