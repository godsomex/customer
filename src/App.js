import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Details from "./pages/Details";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/details/:id" component={Details}></Route>
      </Switch>
    </Router>
  );
}

export default App;
