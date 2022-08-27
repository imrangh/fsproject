import { Nav, Navbar, Button } from "react-bootstrap";
import { useAuthenticator } from "@aws-amplify/ui-react";
import { Auth } from "aws-amplify";
//import {  } from "reactstrap";
import { NavLink, Link } from "react-router-dom";
import AmplifyLogo from "../auth/amplifyorange.png";
//import { useState } from "react";

const NavBar = (props) => {
  const { signOut, user } = useAuthenticator();
  const handleSignOutClick = () => {
    return async function signOut() {
      try {
        console.log("Inside SingnOut");
        const user = await Auth.currentAuthenticatedUser();

        console.log("User is loged out :", user.storage.isLogin);

        //console.log("user info:", user.signInUserSession.idToken.payload);
        await Auth.signOut();
        //props.history.push("/");
      } catch (error) {
        console.log("error signing out: ", error);
      }
    };
  };

  return (
    <>
      <div
        className="container content center aligned"
        style={{
          float: "none",
          position: "absolute",
          top: 50,
          left: 50,
          transform: "translate(-50, -50)",
          margin: "0 auto",
        }}
      >
        <div className="ui top fixed menu">
          <img
            src={AmplifyLogo}
            alt=""
            className="item"
            style={{ height: 50, width: 50 }}
          />

          <NavLink to="/" className="item">
            <i className="home icon"></i> Home
          </NavLink>
          <NavLink to="/about" className="item">
            About
          </NavLink>
          <NavLink to="/contact" className="item">
            <i className="envelope icon"></i>Contact
          </NavLink>
          <NavLink to="/admin" className="item">
            <i className="user icon"></i> Admin
          </NavLink>
          <NavLink to="/" className="right menu item">
            <Button className="ui grey button " onClick={signOut}>
              <i className="power off icon"></i>Logout
            </Button>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default NavBar;
