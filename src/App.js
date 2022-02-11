import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Layout/Navbar";
import AllUsers from "./Components/User/AllUsers";
import About from "./Components/Layout/About";
import NotFound from "./Components/Layout/NotFound";
import User from "./Components/User/User";
import Footer from "./Components/Layout/Footer";

import GithubState from "./Context/Github/GithubState";
import AlertState from "./Context/Alert/AlertState";

const App = () => {
  return (
    <AlertState>
      <GithubState>
        <Router basename={"/github"}>
          <div className="App">
            <Navbar logo="fab fa-github" appName="Github App" foo="bar" />
            <div className="container">
              <Switch>
                <Route path="/about">
                  <Route exact path="/about/">
                    <About teamMember="Us" />
                  </Route>
                </Route>
                <Route
                  path="/user/:id"
                  render={(props) => <User {...props} />}
                />
                <Route exact path="/">
                  <AllUsers />
                </Route>
                <Route>
                  <NotFound />
                </Route>
              </Switch>
            </div>
          </div>
          <Footer />
        </Router>
      </GithubState>
    </AlertState>
  );
};

export default App;
