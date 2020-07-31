import React, { FunctionComponent } from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faPhone,
  faEnvelopeOpen,
  faCalendar,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

import logo from "../../img/aset-logo-bgalpha.png";

import "./index.css";

const Footer: FunctionComponent = () => (
  <div id="page-footer">
    <Row>
      <Col md={4}>
        <div
          className="widget footer-about flat_counter"
          data-waypoint-active="yes"
        >
          <div>
            <img className="footer-logo" src={logo} alt="logo_footer" />
          </div>
          <p className="content">
            Nossa missão é proporcionar a todos os clientes amigos um ambiente
            agradável e acolhedor, onde se possa encontrar equilíbrio, maior
            qualidade de vida e autoconhecimento.
          </p>
        </div>
      </Col>
      <Col md={4}>
        <div className="widget contact-info">
          <h3 className="widget-title">Sede:</h3>
          <hr />
          <div className="textwidget">
            <div>
              Avenida João Ramalho, 430 - Vila Assunção - Santo André - SP
            </div>
            <div>
              <FontAwesomeIcon icon={faPhone} />
              &nbsp;(011) 3705-2738
              <br />
              <FontAwesomeIcon icon={faPhone} />
              &nbsp;(011) 98794-8205
              <br />
              <FontAwesomeIcon icon={faEnvelopeOpen} />
              &nbsp;aset.contato@gmail.com
              <Navbar
                className="no-padding"
                color="white"
                variant="dark"
                expand="lg"
              >
                <Nav className="mr-auto">
                  <Nav.Link
                    className="no-padding contato"
                    href="http://www.asetterapias.com.br/calendars/default/agenda/"
                    target="_blank"
                  >
                    <FontAwesomeIcon icon={faCalendar} />
                    &nbsp;Agendamento Online
                  </Nav.Link>
                </Nav>
              </Navbar>
            </div>
          </div>
        </div>
      </Col>
      <Col sm={4}>
        <div className="widget contact-info">
          <h3 className="widget-title">Redes Sociais:</h3>
          <hr />
          <div className="textwidget">
            <a
              className="social-media"
              href="https://www.facebook.com/asetterapiasholisticas/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon size="4x" icon={faFacebook} />
            </a>
            <a
              className="social-media"
              href="https://www.instagram.com/asetterapias/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                className="social-media"
                size="4x"
                icon={faInstagram}
              />
            </a>
            <a
              className="social-media"
              href="https://twitter.com/ASET_Terapias"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                className="social-media"
                size="4x"
                icon={faTwitter}
              />
            </a>
            <a
              className="social-media"
              href="https://www.youtube.com/channel/UCQI9GIlBFfqIJUga7siAVxA"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                className="social-media"
                size="4x"
                icon={faYoutube}
              />
            </a>
          </div>
        </div>
      </Col>
    </Row>
    <br />
    <br />
    <Row>
      <Col xs={12} className="disclaimer text-center">
        AS TERAPIAS HOLÍSTICAS E INTEGRATIVAS SÃO COMPLEMENTARES À MEDICINA
        ALOPÁTICA E NÃO DEVEM SUBSTITUIR NENHUMA CONSULTA E/OU TRATAMENTO
        MÉDICO.
      </Col>
    </Row>
  </div>
);

export default Footer;
