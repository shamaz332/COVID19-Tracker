import React, { Component } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import axios from "axios";
class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      patient: [],
    };
  }
  componentDidMount() {
    axios
      .get("https://corona.lmao.ninja/all")
      .then((response) => {
        this.setState({ patient: response.data });
        console.log(response.data);
      })
      .catch((err) => {
        console.log("err");
      });
  }
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col xs={12} sm={12} md={6} lg={4} xl={4} className="mt-4 mb-2">
              <Card>
                <Card.Header className="text-center">
                  <h4>Total Case</h4>
                </Card.Header>
                <Card.Body className="text-center p-4">
                  <Card.Text>
                    <strong>{this.state.patient.cases}</strong>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} sm={12} md={6} lg={4} xl={4} className="mt-4 mb-2">
              <Card>
                <Card.Header className="text-center">
                  <h4>Total Deaths</h4>
                </Card.Header>
                <Card.Body className="text-center p-4">
                  <Card.Text>
                    <strong>{this.state.patient.deaths}</strong>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} sm={12} md={6} lg={4} xl={4} className="mt-4 mb-2">
              <Card>
                <Card.Header className="text-center">
                  <h4>Total Recovered</h4>
                </Card.Header>
                <Card.Body className="text-center p-4">
                  <Card.Text>
                    <strong>{this.state.patient.recovered}</strong>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          {/* <<<<<<<<<<<<<<<<<<<<<<<<<<<Row2>>>>>>>>>>>>>>>>>>>>>>>>>>> */}

          <Row>
            <Col xs={12} sm={12} md={6} lg={4} xl={4} className="mt-4 mb-2">
              <Card>
                <Card.Header className="text-center">
                  <h4>Today Case</h4>
                </Card.Header>
                <Card.Body className="text-center p-4">
                  <Card.Text>
                    <strong>{this.state.patient.todayCases}</strong>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} sm={12} md={6} lg={4} xl={4} className="mt-4 mb-2">
              <Card>
                <Card.Header className="text-center">
                  <h4>Today Deaths</h4>
                </Card.Header>
                <Card.Body className="text-center p-4">
                  <Card.Text>
                    <strong>{this.state.patient.todayDeaths}</strong>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} sm={12} md={6} lg={4} xl={4} className="mt-4 mb-2">
              <Card>
                <Card.Header className="text-center">
                  <h4>Active Case</h4>
                </Card.Header>
                <Card.Body className="text-center p-4">
                  <Card.Text>
                    <strong>{this.state.patient.active}</strong>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          {/* <<<<<<<<<<<<<<<<<<<<<<<<ROW3>>>>>>>>>>>>>>>>>>>>>
           */}

          <Row>
            <Col xs={12} sm={12} md={6} lg={4} xl={4} className="mt-4 mb-2">
              <Card>
                <Card.Header className="text-center">
                  <h4>Critical</h4>
                </Card.Header>
                <Card.Body className="text-center p-4">
                  <Card.Text>
                    <strong>{this.state.patient.critical}</strong>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col xs={12} sm={12} md={6} lg={4} xl={4} className="mt-4 mb-2">
              <Card>
                <Card.Header className="text-center">
                  <h4>Tested Patients</h4>
                </Card.Header>
                <Card.Body className="text-center p-4">
                  <Card.Text>
                    <strong>{this.state.patient.tests}</strong>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col xs={12} sm={12} md={6} lg={4} xl={4} className="mt-4 mb-2">
              <Card>
                <Card.Header className="text-center">
                  <h4>Affected Countries</h4>
                </Card.Header>
                <Card.Body className="text-center p-4">
                  <Card.Text>
                    <strong>{this.state.patient.affectedCountries}</strong>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Home;
