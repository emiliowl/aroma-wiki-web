import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Security, SecureRoute, LoginCallback } from "@okta/okta-react";

import "./App.css";

import Config from "./config";
import Home from "./pages/Home";
import Registration from "./pages/Registration";
import Succeed from "./pages/Registration/Succeed";
import Catalog from "./pages/Catalog";

const CALLBACK_PATH = "/implicit/callback";

const App = () => (
  <Router>
    <Suspense
      fallback={
        <div className="suspence text-center">
          <span>carregando...</span>
        </div>
      }
    >
      <Switch>
        <Security {...Config.oidc}>
          <Route exact path="/" component={Home} />
          <Route exact path="/registration" component={Registration} />
          <Route exact path="/succeed" component={Succeed} />
          <Route path={CALLBACK_PATH} component={LoginCallback} />

          <SecureRoute exact path="/catalog" component={Catalog} />
        </Security>
      </Switch>
    </Suspense>
  </Router>
);

export default App;
