import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import NotFound from "./containers/NotFound";
import Login from "./containers/Login";
import Header from "./containers/Header";
import Navigation from "./containers/Navigation";

export default () =>
  <Switch>
    {/* <Route path="/" exact component={Home} /> */}
    {/* <Route path="/login" exact component={Login} /> */}
    <Route exact component={Header} />
    {/* <Route exact component={Navigation} /> */}
    { /* Finally, catch all unmatched routes */ }
    <Route component={NotFound} />
  </Switch>;
