import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import routes from "./pages/routes";
import "./styles/App.css";

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          {routes.map((route, i) => <Route key={i} {...route} />)}
        </Switch>
      </div>
    )
  }
}

export default App;
