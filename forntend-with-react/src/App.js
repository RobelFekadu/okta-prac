import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import AppWithRouterAccess from "./AppWithRouterAccess";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <BrowserRouter>
      <AppWithRouterAccess />
    </BrowserRouter>
  );
}

export default App;
