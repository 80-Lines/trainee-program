import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import BrandsScreen from "./screens/brands-screen";
import CarsScreen from "./screens/cars-screen";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Redirect to="/marcas" />
        </Route>
        <Route path="/marcas">
          <BrandsScreen />
        </Route>
        <Route path="/carros">
          <CarsScreen />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
