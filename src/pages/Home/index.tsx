import React, { FunctionComponent } from "react";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";

import MenuBar from "../../common/Header";
import Footer from "../../common/Footer";

import aromaImg from "../../img/aroma-1.jpg";

const Home: FunctionComponent = () => (
  <div>
    <MenuBar />
    <Jumbotron>
      <h1>Seja bem vindo ao aroma-wiki da Aset Terapias!</h1>
      <p>
        Aqui voc&ecirc; vai encontrar dados detalhados sobre o aromaterapia...
      </p>
      <p>
        <Nav.Link href="/registration">
          <Button className="aset-action">Quero me inscrever!</Button>
        </Nav.Link>
      </p>
    </Jumbotron>
    <Container>
      <Row>
        <Col xs={12} sm={6} md={4}>
          <Card>
            <Card.Img variant="top" src={aromaImg} />
            <Card.Body>
              <Card.Title>Dica do dia</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button className="aset-action">Ler mais...</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} sm={6} md={4}>
          <Card>
            <Card.Img variant="top" src={aromaImg} />
            <Card.Body>
              <Card.Title>Mais Procurado</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button className="aset-action">Ler mais...</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} sm={6} md={4}>
          <Card>
            <Card.Img variant="top" src={aromaImg} />
            <Card.Body>
              <Card.Title>Sugestão do Ciclo</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button className="aset-action">Ler mais...</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    <Footer />
  </div>
);

export default Home;
