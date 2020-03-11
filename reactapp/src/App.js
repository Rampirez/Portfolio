import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import NoMatch from "./pages/NoMatch";


import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
        <Route exact path="/" component={Home} />
          <Route exact path="/Portfolio" component={Portfolio} />
          <Route exact path="/contact" component={Contact} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
