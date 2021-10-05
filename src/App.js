import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./Login";
import Dashboard from "./Dashboard";
import Bill from "./Bill";

const App = () => ( 
  <BrowserRouter>
    <Switch>
      <Route exact path = "/" component = { Login }/>
      <Route exact path = "/inventario" component = { Dashboard }/>
      <Route exact path = "/venta/:saleId" component = { Bill }/>
    </Switch> 
    </BrowserRouter>
);

export default App;