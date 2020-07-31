import React, { FunctionComponent, useState, useEffect } from "react";
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

import aromaImg from "../../img/aroma-1.jpg";

const Catalog: FunctionComponent = () => {
  const { authState, authService } = useOktaAuth();
  const [userInfo, setUserInfo] = useState<any | null>(null);

  useEffect(
    () => {
      if (!authState.isAuthenticated) {
        // When user isn't authenticated, forget any user info
        setUserInfo(null);
      } else {
        authService.getUser().then((info :any) => {
          setUserInfo(info);
        });
      }
    }, 
    [authState, authService]
  ); // Update if authState changes

  return (
    <div>
      <MenuBar />
      <Jumbotron fluid>
        <Container>
          <h1>Ol&aacute;, {userInfo?.name}</h1>
          <p>
            Utilize os filtros para facilitar sua jornada em nossa wiki ;)
          </p>
        </Container>
      </Jumbotron>
      <Container>
        <Row>
          <Col xs={12} sm={6} md={4}>
            <Card>
              <Card.Img variant="top" src={aromaImg} />
              <Card.Body>
                <Card.Title>Alecrim</Card.Title>
                <Card.Text>
                  <strong>Nome bot&acirc;nico:</strong>&nbsp;Rosmarinus Officinalis qt cânfora
                  <br />
                  <strong>Fam&iacute;lia bot&acirc;nica:</strong>&nbsp;Laminaceae
                  <hr />
                  <br />

                  <h5>Principais propriedades terap&ecirc;uticas</h5>
                  <hr />
                  <span>
                    Vasodilatador, descontracturante, miorrelaxante
                  </span>
                  <br />
                  <br />

                  <h5>Principais indica&ccedil;&otilde;es</h5>
                  <hr />
                  <span>
                    Mialgia, Fibromialgia, Amenorréria, Menstruação dolorosa, adiposidades
                  </span>
                  <br />
                  <br />
                  
                  <h5>Contraindica&ccedil;&otilde;es</h5>
                  <hr />
                  <span>
                    Bebes, gestantes e lactantes, hipertensos
                  </span>
                  <br />
                  <br />

                  <Table striped bordered hover size="xs">
                    <tbody>
                      <tr>
                        <th>&Aacute;lcoois</th>
                        <td>&Aacute;lcoois 5%</td>
                      </tr>
                      <tr>
                        <th>Alde&iacute;dos</th>
                        <td>-</td>
                      </tr>
                      <tr>
                        <th>Cetonas</th>
                        <td>Cetonas 30%</td>
                      </tr>
                      <tr>
                        <th>&Eacute;steres</th>
                        <td>-</td>
                      </tr>
                      <tr>
                        <th>Fen&oacute;is</th>
                        <td>-</td>
                      </tr>
                      <tr>
                        <th>&Oacute;xidos</th>
                        <td>&Oacute;xidos 30%</td>
                      </tr>
                      <tr>
                        <th>Terpenos</th>
                        <td>Terpenos 35%</td>
                      </tr>
                      <tr>
                        <th>Lactonas</th>
                        <td>-</td>
                      </tr>
                      <tr>
                        <th>Cumarinas</th>
                        <td>-</td>
                      </tr>
                      <tr>
                        <th>Sesquiterpenos</th>
                        <td>-</td>
                      </tr>
                    </tbody>
                  </Table>
                </Card.Text>
                <Button className="aset-action">+ Favorito</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={4}>
            <Card>
              <Card.Img variant="top" src={aromaImg} />
              <Card.Body>
                <Card.Title>Bergamota</Card.Title>
                <Card.Text>
                  <strong>Nome bot&acirc;nico:</strong>&nbsp;Citrus x bergamia
                  <br />
                  <strong>Fam&iacute;lia bot&acirc;nica:</strong>&nbsp;Rutaceae
                  <hr />
                  <br />

                  <h5>Principais propriedades terap&ecirc;uticas</h5>
                  <hr />
                  <span>
                    Calmante, relaxante, sedativo
                  </span>
                  <br />
                  <br />

                  <h5>Principais indica&ccedil;&otilde;es</h5>
                  <hr />
                  <span>
                    Agitação, insônia, estresse, vitiligo
                  </span>
                  <br />
                  <br />
                  
                  <h5>Contraindica&ccedil;&otilde;es</h5>
                  <hr />
                  <span>
                    Fotossensibilizante
                  </span>
                  <br />
                  <br />

                  <Table striped bordered hover size="xs">
                    <tbody>
                      <tr>
                        <th>&Aacute;lcoois</th>
                        <td>&Aacute;lcoois</td>
                      </tr>
                      <tr>
                        <th>Alde&iacute;dos</th>
                        <td>Alde&iacute;dos</td>
                      </tr>
                      <tr>
                        <th>Cetonas</th>
                        <td>-</td>
                      </tr>
                      <tr>
                        <th>&Eacute;steres</th>
                        <td>&Eacute;steres 30%</td>
                      </tr>
                      <tr>
                        <th>Fen&oacute;is</th>
                        <td>-</td>
                      </tr>
                      <tr>
                        <th>&Oacute;xidos</th>
                        <td>-</td>
                      </tr>
                      <tr>
                        <th>Terpenos</th>
                        <td>Terpenos 60%</td>
                      </tr>
                      <tr>
                        <th>Lactonas</th>
                        <td>-</td>
                      </tr>
                      <tr>
                        <th>Cumarinas</th>
                        <td>Furanocumarinas</td>
                      </tr>
                      <tr>
                        <th>Sesquiterpenos</th>
                        <td></td>
                      </tr>
                    </tbody>
                  </Table>
                </Card.Text>
                <Button className="aset-action">+ Favorito</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={4}>
            <Card>
              <Card.Img variant="top" src={aromaImg} />
              <Card.Body>
                <Card.Title>Canela-da-china</Card.Title>
                <Card.Text>
                  <strong>Nome bot&acirc;nico:</strong>&nbsp;Cinnamumum cassia
                  <br />
                  <strong>Fam&iacute;lia bot&acirc;nica:</strong>&nbsp;Lauraceae
                  <hr />
                  <br />

                  <h5>Principais propriedades terap&ecirc;uticas</h5>
                  <hr />
                  <span>
                    Tônico e estimulante geral, reenergizante, anti-infeccioso muito potente
                  </span>
                  <br />
                  <br />

                  <h5>Principais indica&ccedil;&otilde;es</h5>
                  <hr />
                  <span>
                    Infecções bacterianas, viróticas, fúngicas e parasitárias, depressão nervosa
                  </span>
                  <br />
                  <br />
                  
                  <h5>Contraindica&ccedil;&otilde;es</h5>
                  <hr />
                  <span>
                    Crianças, gestantes e lactantes, cáustico
                  </span>
                  <br />
                  <br />

                  <Table striped bordered hover size="xs">
                    <tbody>
                      <tr>
                        <th>&Aacute;lcoois</th>
                        <td></td>
                      </tr>
                      <tr>
                        <th>Alde&iacute;dos</th>
                        <td>Alde&iacute;dos 75% a 80%</td>
                      </tr>
                      <tr>
                        <th>Cetonas</th>
                        <td>-</td>
                      </tr>
                      <tr>
                        <th>&Eacute;steres</th>
                        <td>-</td>
                      </tr>
                      <tr>
                        <th>Fen&oacute;is</th>
                        <td>Fen&oacute;is 5% a 6%</td>
                      </tr>
                      <tr>
                        <th>&Oacute;xidos</th>
                        <td>-</td>
                      </tr>
                      <tr>
                        <th>Terpenos</th>
                        <td>-</td>
                      </tr>
                      <tr>
                        <th>Lactonas</th>
                        <td>-</td>
                      </tr>
                      <tr>
                        <th>Cumarinas</th>
                        <td>Curaminas 5 a 6%</td>
                      </tr>
                      <tr>
                        <th>Sesquiterpenos</th>
                        <td>-</td>
                      </tr>
                    </tbody>
                  </Table>
                </Card.Text>
                <Button className="aset-action">+ Favorito</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default Catalog;
