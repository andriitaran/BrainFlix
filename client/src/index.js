import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Upload from "./components/Upload";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

ReactDOM.render(
  <Router>
    <Switch>
      <Redirect from="/" to="/videos/1af0jruup5gu" exact />
      <Route path="/videos/:id" component={App} />
      <Route path="/upload" component={Upload} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
