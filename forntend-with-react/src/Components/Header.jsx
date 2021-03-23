import React, { Component } from "react";
import { withOktaAuth } from "@okta/okta-react";

export default withOktaAuth(
  class Header extends Component {
    render() {
      if (this.props.authState.isPending) {
        return <div>Loading...</div>;
      }

      const button = this.props.authState.isAuthenticated ? (
        <button
          className="btn btn-secondary"
          onClick={() => {
            this.props.oktaAuth.signOut("/");
          }}
        >
          Logout
        </button>
      ) : (
        <button
          className="btn btn-secondary"
          onClick={() => {
            console.log("help");
            this.props.history.push("/login");
          }}
        >
          Login
        </button>
      );

      return (
        <div className="navbar" bg="light" expand="lg">
          <div className="navbar" href="/">
            {console.log(this.props)}
            To Do List
          </div>
          <div className="navbar" aria-controls="basic-navbar-nav"></div>
          <div className="navbar" id="basic-navbar-nav">
            <div className="navbar mr-auto"></div>
            <form className="inline">{button}</form>
          </div>
        </div>
      );
    }
  }
);
