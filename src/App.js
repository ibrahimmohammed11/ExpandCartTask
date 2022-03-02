import { Fragment } from "react";
import Home from "./views/Home";
import Navbar from "./views/Navbar";
import RestDetails from "./views/RestDetails";

import { Redirect, Route, Switch } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Fragment>
      <Navbar />
      <div className="container my-4">
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/restaurant/:name" component={RestDetails} />
          <Redirect path="*" to="/home" />
        </Switch>
      </div>
    </Fragment>
  );
}

export default App;
