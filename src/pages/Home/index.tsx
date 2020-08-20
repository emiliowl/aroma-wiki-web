import React, { FunctionComponent } from "react";

import Button from "react-bootstrap/Button";
import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";

import MenuBar from "../../common/Header";
import Footer from "../../common/Footer";

import logoAroma from '../../img/aset-5.png';
import logoAromaMobile from '../../img/aset-5.mobile.jpeg';


const Home: FunctionComponent = () => (
  <div>
    <MenuBar />
    <Jumbotron>
      <h1>Seja bem vindo ao aroma-wiki da Aset Terapias!</h1>
      <p>
        Aqui voc&ecirc; vai encontrar a ficha t&eacute;cnica dos principais &oacute;leos essenciais.
      </p>
      <p>
        {/* <Nav.Link href="/registration">
          <Button className="aset-action">Quero me inscrever!</Button>
        </Nav.Link> */}
      </p>
    </Jumbotron>
    <Container>
      <Row>
        <Carousel>
          <Carousel.Item>
            <a href="http://asetterapias.com.br/jornada_aromatica_w01/" 
                       className="no-padding no-color" 
                       rel="noopener noreferrer"
                        target="_blank" >
              <img className="d-none d-md-block w-100"
                  src={logoAroma}
                  alt="Jornada Aromática" />
              <img className="d-block d-md-none w-100"
                  src={logoAromaMobile}
                  alt="Jornada Aromática" />
                  </a>
          </Carousel.Item>
        </Carousel>
      </Row>
    </Container>
    <Footer />
  </div>
);

export default Home;
