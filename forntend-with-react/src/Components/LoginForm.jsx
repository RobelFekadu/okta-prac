import React, { Component } from "react";
import { withOktaAuth } from "@okta/okta-react";

export default withOktaAuth(
  class LoginForm extends Component {
    constructor(props) {
      super(props);

      this.state = {
        sessionToken: null,
        error: null,
        username: "",
        password: "",
      };

      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleUsernameChange = this.handleUsernameChange.bind(this);
      this.handlePasswordChange = this.handlePasswordChange.bind(this);

      // this.oktaAuth = new OktaAuth({
      //   issuer: process.env.REACT_APP_OKTA_URL_BASE,
      // });
    }

    handleSubmit = (e) => {
      e.preventDefault();

      // this.oktaAuth
      // .signInWithCredentials({
      this.props.oktaAuth
        .signIn({
          username: this.state.username,
          password: this.state.password,
        })
        .then((res) => {
          const sessionToken = res.sessionToken;
          this.setState({ sessionToken }, () =>
            this.props.oktaAuth.signInWithRedirect({ sessionToken })
          );
        })
        .catch((err) => {
          this.setState({ error: err.message });
          console.log(err.statusCode + " error", err);
        });
    };

    handleUsernameChange = (e) => {
      this.setState({ username: e.target.value });
    };

    handlePasswordChange = (e) => {
      this.setState({ password: e.target.value });
    };

    render() {
      console.log(this.props);
      if (this.state.sessionToken) {
        // this.props.auth.redirect({ sessionToken: this.state.sessionToken });
        return null;
      }

      const errorMessage = this.state.error ? (
        <span className="error-message">{this.state.error}</span>
      ) : null;

      return (
        <form onSubmit={this.handleSubmit}>
          {errorMessage}
          <div className="form-element">
            <label>Username:</label>
            <input
              id="username"
              type="text"
              value={this.state.username}
              onChange={this.handleUsernameChange}
            />
          </div>

          <div className="form-element">
            <label>Password:</label>
            <input
              id="password"
              type="password"
              value={this.state.password}
              onChange={this.handlePasswordChange}
            />
          </div>
          <input id="submit" type="submit" value="Submit" />
        </form>
      );
    }
  }
);
