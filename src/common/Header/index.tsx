import React, { FunctionComponent } from "react";
import { useOktaAuth } from "@okta/okta-react";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import Authenticate from "./Authenticate";

import logoAset from "../../img/aset-logo-bgalpha.png";

import "./index.css";

const MenuBar: FunctionComponent = () => {
  const { authState } = useOktaAuth();
  return (
    <Navbar className="aset-lightpurple-bg" variant="dark" expand="lg">
      <Navbar.Brand href="/">
        <img src={logoAset} alt="aset terapias logomark" width="100px" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          { authState.isAuthenticated && <Nav.Link href="/catalog">Catalog</Nav.Link> }
        </Nav>
        <Nav>
          <Nav.Link>
            <Authenticate />
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
export default MenuBar;
