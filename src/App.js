import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Details from "./pages/details";

import Home from "./pages/home";

function App() {
  return (
    <Router>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/details">
        <Details />
      </Route>
    </Router>
  );
}

export default App;
