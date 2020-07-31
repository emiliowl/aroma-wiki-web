import React, { FunctionComponent } from "react";

import Jumbotron from "react-bootstrap/Jumbotron";

import MenuBar from "../../common/Header";

const Succeed: FunctionComponent = () => {
  return (
    <div>
      <MenuBar />
      <br />
      <Jumbotron>
        <h1>Obrigado por efetuar seu cadastro!</h1>
        <p>
          Um e-mail ser&aacute; enviado com as instru&ccedil;&otilde;es para seu
          primeiro acesso em at&eacute; 24 horas
        </p>
      </Jumbotron>
    </div>
  );
};

export default Succeed;
