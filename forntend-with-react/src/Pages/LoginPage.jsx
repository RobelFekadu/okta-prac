import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import LoginForm from "../Components/LoginForm";
import { withOktaAuth } from "@okta/okta-react";

export default withOktaAuth(
  class Login extends Component {
    constructor(props) {
      super(props);
      this.state = { authenticated: null };
      this.checkAuthentication();
    }

    checkAuthentication = async () => {
      const authenticated = await this.props.authState.isAuthenticated;
      if (authenticated !== this.state.authenticated) {
        this.setState({ authenticated });
      }
    };

    componentDidUpdate() {
      this.checkAuthentication();
    }

    render() {
      if (this.state.authenticated === null) return null;
      return this.state.authenticated ? (
        <Redirect to={{ pathname: "/" }} />
      ) : (
        <LoginForm baseUrl={this.props.baseUrl} />
      );
    }
  }
);
