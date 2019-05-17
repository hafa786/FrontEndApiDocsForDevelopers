import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import NotFound from "./containers/NotFound";
import Login from "./containers/Login";
import Page from "./containers/Page";
import Navigation from "./containers/Navigation";

export default () =>
  <Switch>
    {/* <Route path="/" exact component={Home} /> */}
    {/* <Route path="/login" exact component={Login} /> */}
    <Route exact component={Page} />
    {/* <Route exact component={Navigation} /> */}
    { /* Finally, catch all unmatched routes */ }
    <Route component={NotFound} />
  </Switch>;
