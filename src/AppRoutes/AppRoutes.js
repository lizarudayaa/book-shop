import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Home from "../pages/Home/Home";
import Favorites from "../pages/Favorites/Favorites";
import Card from "../pages/Card/Card";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Checkout from "../pages/Checkout/Checkout";

const AppRoutes = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <Redirect from="/" to="/home" />
      </Route>
      <Route exact path="/home">
        <Home />
      </Route>
      <Route exact path="/favorites">
        <Favorites />
      </Route>
      <Route exact path="/card">
        <Card />
      </Route>
      <Route exact path="/checkout">
        <Checkout />
      </Route>
      <Route path="*">
        <ErrorPage errorType="404" />
      </Route>
    </Switch>
  );
};

export default AppRoutes;
