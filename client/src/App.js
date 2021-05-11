import React from "react";
import Home from "./pages/home/Home";
import Directions from "./pages/directions/Directions";
import Bustops from "./pages/bustops/Bustops";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
  //Setup react router comming up ....

  //For now just rendering the Home Landing page of the app
  return (
    <div className="wrapper">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/directions/:route">
            <Directions />
          </Route>
          <Route path="/bustops/:route/:direction">
            <Bustops />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
