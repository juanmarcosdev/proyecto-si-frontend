import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./Login";
import Dashboard from "./Dashboard";

const App = () => ( 
  <BrowserRouter>
    <Switch>
      <Route exact path = "/" component = { Login }/>
      <Route exact path = "/inventario" component = { Dashboard }/>
    </Switch> 
    </BrowserRouter>
);

export default App;