import React, { FunctionComponent, ChangeEvent } from "react";
import { useHistory } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";

import MenuBar from "../../common/Header";

import { useInput } from "../../utils/useInput";

const Registration: FunctionComponent = () => {
  const history = useHistory();
  const { value: nameValue, bind: nameBind, reset: nameReset } = useInput("");
  const { value: phoneValue, bind: phoneBind, reset: phoneReset } = useInput(
    ""
  );
  const { value: emailValue, bind: emailBind, reset: emailReset } = useInput(
    ""
  );
  const { value: pwdValue, bind: pwdBind, reset: pwdReset } = useInput("");

  const submitForm = (evt: ChangeEvent<HTMLInputElement>) => {
    evt.preventDefault();
    evt.stopPropagation();
    console.log("form submitted with data");
    console.log(evt);

    console.log(nameValue);
    console.log(phoneValue);
    console.log(emailValue);
    console.log(pwdValue);

    nameReset();
    phoneReset();
    emailReset();
    pwdReset();

    history.push("/Succeed");
  };

  return (
    <div>
      <MenuBar />
      <br />
      <Container>
        <h3>Por favor preencha seus dados que vamos efetuar seu cadastro:</h3>
        <hr />
        <Form onSubmit={submitForm}>
          <Form.Group controlId="grpName">
            <Form.Label>Nome Completo</Form.Label>
            <Form.Control
              type="text"
              placeholder="Digite seu nome..."
              {...nameBind}
            />
          </Form.Group>

          <Form.Group controlId="grpPhone">
            <Form.Label>Telefone Celular</Form.Label>
            <Form.Control
              type="text"
              placeholder="Digite seu telefone..."
              {...phoneBind}
            />
          </Form.Group>

          <Form.Group controlId="grpEmail">
            <Form.Label>Endere&ccedil;o de e-mail</Form.Label>
            <Form.Control
              type="text"
              placeholder="Digite seu e-mail..."
              {...emailBind}
            />
          </Form.Group>

          <Form.Group controlId="grpPassword">
            <Form.Label>Digite sua senha</Form.Label>
            <Form.Control
              type="password"
              placeholder="Digite sua senha..."
              {...pwdBind}
            />
          </Form.Group>
          <Button className="aset-action" type="submit">
            Cadastrar
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default Registration;
