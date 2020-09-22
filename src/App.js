import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import Home from "./Home";
import Header from "./Header";

import Home2 from "./Home2";
import Contact from "./Contact";
import NoMatch from "./NoMatch";

function App() {
  return (
    <div className="App">
      {/* <Header />
      <Home /> */}

      <React.Fragment>
        <Router>
          <Switch>
            <Route exact path="/" component={Home2} />
            <Route exact path="/Contact" component={Contact} />
            <Route component={NoMatch} />
          </Switch>
        </Router>
      </React.Fragment>
    </div>
  );
}

export default App;
