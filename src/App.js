import React from "react";
import { connect } from "react-redux";
//import { Auth } from "aws-amplify";
import { useAuthenticator } from "@aws-amplify/ui-react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "@aws-amplify/ui-react/styles.css";
//import "bootstrap/dist/css/bootstrap.min.css";

import NavBar from "./components/NavBar";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
//import NavMenu from "./components/NavMenu";
import BackgroundImage from "./components/backgroundImage";
import Admin from "./components/Admin";
import { Login } from "./auth/Login";
import "./auth/styles.css";

const App = ({ games, dispatch }) => {
  const { user } = useAuthenticator();

  if (user) {
    let adminGroup = [];
    try {
      if (
        user.signInUserSession.accessToken.payload["cognito:groups"] !==
        undefined
      ) {
        adminGroup = user.signInUserSession.accessToken.payload[
          "cognito:groups"
        ].filter((group) => (group === "admins" ? group : ""));
        console.log("adminGroup: ", adminGroup.join());
      }
    } catch (e) {
      console.log("Error in group retrieval: ", e);
    }

    return (
      <>
        <div className="App">
          <Router>
            <BackgroundImage>
              <NavBar />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
                {adminGroup.join() === "admins" && (
                  <Route path="/admin" component={Admin} />
                )}
              </Switch>
            </BackgroundImage>
          </Router>
        </div>
      </>
    );
  }

  return <Login />;
};

const mapStateToProps = (state) => {
  const { games } = state;

  return {
    games,
  };
};

export default connect(mapStateToProps)(App);
