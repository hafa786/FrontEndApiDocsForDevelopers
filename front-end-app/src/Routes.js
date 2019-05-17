import React from "react";
import { Route, Switch } from "react-router-dom";
import NotFound from "./containers/NotFound";
import Page from "./containers/Page";

export default () =>
  <Switch>
    {/* adding the main page container with the route */}
    <Route exact component={Page} />
    <Route component={NotFound} />
  </Switch>;
