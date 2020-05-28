import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Users from "./pages/Users";
import Details from "./pages/Details";

class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Users} />
          <Route path="/details" component={Details} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Router;
