import React, { FunctionComponent } from "react";
import { useOktaAuth } from "@okta/okta-react";

import Button from "react-bootstrap/Button";

const Authenticate: FunctionComponent = () => {
  const { authState, authService } = useOktaAuth();
  const login = () => authService.login("/catalog");
  const logout = () => authService.logout("/");

  if (authState.isPending) {
    return <Button className="aset-action disabled">Loading...</Button>;
  }

  if (!authState.isAuthenticated) {
    return (
      <Button onClick={login} className="aset-action">
        Entrar
      </Button>
    );
  }

  return (
    <Button onClick={logout} className="aset-action">
      logout
    </Button>
  );
};

export default Authenticate;
