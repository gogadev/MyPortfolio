import React from "react";

import { Switch, Route } from "react-router-dom";

import Nav from "./components/nav/Nav";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";

import "./App.css";

const App = () => {
  return (
    <React.Fragment>
      <Nav />
      <Switch>
        <Route exact path="/" component={Hero} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </React.Fragment>
  );
};

export default App;
