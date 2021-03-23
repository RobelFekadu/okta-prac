import React from "react";
import { OktaAuth } from "@okta/okta-auth-js";
import { LoginCallback, Security } from "@okta/okta-react";
import { Route } from "react-router-dom";
import Home from "./Pages/Home";
import LoginPage from "./Pages/LoginPage";
import RegistrationForm from "./Components/RegistrationForm";

const AppWithRouterAccess = () => {
  const issuer = process.env.REACT_APP_OKTA_URL_BASE + "/oauth2/default";
  const clientId = process.env.REACT_APP_OKTA_CLIENTID;
  const redirect = process.env.REACT_APP_BASE_URL + "/login/callback";

  const oktaAuth = new OktaAuth({
    issuer: issuer,
    clientId: clientId,
    redirectUri: redirect,
    pkce: true,
  });

  return (
    <Security oktaAuth={oktaAuth}>
      <Route path="/" exact={true} component={Home} />
      <Route
        path="/login"
        render={() => (
          <LoginPage baseUrl={process.env.REACT_APP_OKTA_URL_BASE} />
        )}
      />
      <Route path="/login/callback" component={LoginCallback} />
      <Route path="/register" component={RegistrationForm} />
    </Security>
  );
};

export default AppWithRouterAccess;
