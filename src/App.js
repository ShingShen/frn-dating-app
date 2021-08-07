import React from "react";
import "./App.css";
import Header from "./Header";
import TinderCards from "./TinderCards";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Header />
      <Router>
        <Switch>
          <Route path="/chat">
            <h1>chat page</h1>
          </Route>
          <Route path="/">
            <h1>home page</h1>
          </Route>
        </Switch>


        <TinderCards />
      </Router>

    </div>
  );
}

export default App;
