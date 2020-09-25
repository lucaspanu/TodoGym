import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import Home from "./Home";
import Contact from "./Contact";
import NoMatch from "./NoMatch";

// import NavigationBar from "./components/NavBar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <React.Fragment>
        {/* <NavigationBar /> */}

        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/contact" component={Contact} />
            <Route component={NoMatch} />
          </Switch>
        </Router>

        <Footer />
      </React.Fragment>
    </div>
  );
}

export default App;
