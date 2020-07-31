import React, { FunctionComponent, useState, useEffect } from "react";
import { useAsyncEffect } from "use-async-effect";
import { useOktaAuth } from "@okta/okta-react";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Row from "react-bootstrap/Row";
import Table from "react-bootstrap/Table";

import MenuBar from "../../common/Header";
import Footer from "../../common/Footer";

import { getApiUrl } from "../../utils/constants";

const Catalog: FunctionComponent = () => {
  const { authState, authService } = useOktaAuth();
  const [userInfo, setUserInfo] = useState<any | null>(null);
  const [scents, setScents] = useState<Array<any> | null>(null);

  useEffect(() => {
    console.log("triggering useEffect");
    if (!authState.isAuthenticated) {
      // When user isn't authenticated, forget any user info
      setUserInfo(null);
    } else {
      authService.getUser().then((info: any) => {
        setUserInfo(info);
      });
    }
  }, [authState, authService]); // Update if authState changes

  useAsyncEffect(async () => {
    const headers = new Headers();
    headers.append("Accept", "application/json");
    headers.append("Content-Type", "application/json");
    headers.append("Authorization", `Bearer ${authState.accessToken}`);

    const requestInfo: RequestInit = {
      method: "GET",
      headers,
    };

    let httpResponse = await fetch(
      getApiUrl("/api/scents/"),
      requestInfo
    );
    let result = await httpResponse.json();
    setScents(result.scents);
  }, []);

  return (
    <div>
      <MenuBar />
      <Jumbotron fluid>
        <Container>
          <h1>Ol&aacute;, {userInfo?.name}</h1>
          <p>Utilize os filtros para facilitar sua jornada em nossa wiki ;)</p>
        </Container>
      </Jumbotron>
      <Container>
        <Row>
          {scents?.map((el) => {
            return (
              <Col xs={12} sm={6} md={4}>
                <Card>
                  <Card.Img variant="top" src={el.picture} />
                  <Card.Body>
                    <Card.Title>{el.name}</Card.Title>
                    <Card.Text as="div">
                      <strong>Nome bot&acirc;nico:</strong>&nbsp;
                      {el.bothanical_name}
                      <br />
                      <strong>Fam&iacute;lia bot&acirc;nica:</strong>
                      {el.bothanical_family}
                      <hr />
                      <br />
                      <h5>Principais propriedades terap&ecirc;uticas</h5>
                      <hr />
                      <span>
                        {el.therapeutic_properties}
                      </span>
                      <br />
                      <br />
                      <h5>Principais indica&ccedil;&otilde;es</h5>
                      <hr />
                      <span>
                        {el.recommendations}
                      </span>
                      <br />
                      <br />
                      <h5>Contraindica&ccedil;&otilde;es</h5>
                      <hr />
                      <span>{el.contraindication}</span>
                      <br />
                      <br />
                      <Table striped bordered hover size="xs">
                        <tbody>
                          <tr>
                            <th>&Aacute;lcoois</th>
                            <td>{el.alcohols}</td>
                          </tr>
                          <tr>
                            <th>Alde&iacute;dos</th>
                            <td>{el.aldehydes}</td>
                          </tr>
                          <tr>
                            <th>Cetonas</th>
                            <td>{el.ketones}</td>
                          </tr>
                          <tr>
                            <th>&Eacute;steres</th>
                            <td>{el.esters}</td>
                          </tr>
                          <tr>
                            <th>Fen&oacute;is</th>
                            <td>{el.phenols}</td>
                          </tr>
                          <tr>
                            <th>&Oacute;xidos</th>
                            <td>{el.oxides}</td>
                          </tr>
                          <tr>
                            <th>Terpenos</th>
                            <td>{el.terpenes}</td>
                          </tr>
                          <tr>
                            <th>Lactonas</th>
                            <td>{el.lactones}</td>
                          </tr>
                          <tr>
                            <th>Cumarinas</th>
                            <td>{el.coumarins}</td>
                          </tr>
                          <tr>
                            <th>Sesquiterpenos</th>
                            <td>{el.sesquiterpenes}</td>
                          </tr>
                        </tbody>
                      </Table>
                    </Card.Text>
                    <Button className="aset-action">+ Favorito</Button>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default Catalog;
