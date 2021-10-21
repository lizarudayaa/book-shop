import React, { Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Home from "../pages/Home/Home";
// import Favorites from "../pages/Favorites/Favorites";
// import Card from "../pages/Card/Card";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
// import Checkout from "../pages/Checkout/Checkout";
import Loader from "../UI/Loader/Loader";

const Card = React.lazy(() => import("../pages/Card/Card"));
const Favorites = React.lazy(() => import("../pages/Favorites/Favorites"));
const Checkout = React.lazy(() => import("../pages/Checkout/Checkout"));

const AppRoutes = () => {
  return (
    <Suspense fallback={<Loader />}>
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
    </Suspense>
  );
};

export default AppRoutes;
