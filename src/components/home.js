import React, { Component } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import GoogleMapReact from 'google-map-react';
import axios from "axios";
import "../App.css";
class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      patient: [],
      countries: [],
    };
  }
  componentDidMount() {
    axios
      .all([
        axios.get("https://corona.lmao.ninja/v2/all"),
        axios.get("https://corona.lmao.ninja/v2/countries"),
      ])

      .then((response) => {
        this.setState({ patient: response[0].data });
        this.setState({ countries: response[1].data });
        // console.log(response.data);
      })
      .catch((err) => {
        console.log("err");
      });
  }

  render() {
    const allCountry = this.state.countries.map((country, i) => {
      return (
<div lat = {country.countryInfo.lat}
lng = {country.countryInfo.long}
style={{
  color :"red",
  backgroundColor : "#FFF",
  height : "50px",
  width : "50px",
  textAlign:"center",
  fontSize:"14px",
  fontWeight:"bold",
  borderRadius:"30%"
}}>
  <img height="10px" src={country.countryInfo.flag}/>
<br></br>
{country.cases}
</div>
      );
    });

    return (
      <div>
        <Container>
          <Row>
            <Col sm={12} md={4} lg={4} xl={4} className="mt-4 mb-2">
              <Card className="cc shadow p-3 bg-white rounded">
                <Card.Header className="header text-center">
                  <h5>Total Case</h5>
                </Card.Header>
                <Card.Body className="text-center p-4">
                  <Card.Text>
                    <strong>{this.state.patient.cases}</strong>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={12} md={4} lg={4} xl={4} className="mt-4 mb-2">
              <Card className="shadow p-3 bg-white rounded">
                <Card.Header className="text-center">
                  <h5>Total Deaths</h5>
                </Card.Header>
                <Card.Body className="text-center p-4">
                  <Card.Text>
                    <strong>{this.state.patient.deaths}</strong>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={12} md={4} lg={4} xl={4} className="mt-4 mb-2">
              <Card className="shadow p-3 bg-white rounded">
                <Card.Header className="text-center">
                  <h5>Recovered</h5>
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
            <Col sm={12} md={4} lg={4} xl={4} className="mt-4 mb-2">
              <Card className="shadow p-3 bg-white rounded">
                <Card.Header className="text-center">
                  <h5>Today Case</h5>
                </Card.Header>
                <Card.Body className="text-center p-4">
                  <Card.Text>
                    <strong>{this.state.patient.todayCases}</strong>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={12} md={4} lg={4} xl={4} className="mt-4 mb-2">
              <Card className="shadow p-3 bg-white rounded">
                <Card.Header className="text-center">
                  <h5>Today Deaths</h5>
                </Card.Header>
                <Card.Body className="text-center p-4">
                  <Card.Text>
                    <strong>{this.state.patient.todayDeaths}</strong>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={12} md={4} lg={4} xl={4} className="mt-4 mb-2">
              <Card className="shadow p-3 bg-white rounded">
                <Card.Header className="text-center">
                  <h5>Active Case</h5>
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
            <Col sm={12} md={4} lg={4} xl={4} className="mt-4 mb-2">
              <Card className="shadow p-3 bg-white rounded">
                <Card.Header className="text-center">
                  <h5>Critical</h5>
                </Card.Header>
                <Card.Body className="text-center p-4">
                  <Card.Text>
                    <strong>{this.state.patient.critical}</strong>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col sm={12} md={4} lg={4} xl={4} className="mt-4 mb-2">
              <Card className="shadow p-3 bg-white rounded">
                <Card.Header className="text-center">
                  <h5>Tested Patients</h5>
                </Card.Header>
                <Card.Body className="text-center p-4">
                  <Card.Text>
                    <strong>{this.state.patient.tests}</strong>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col sm={12} md={4} lg={4} xl={4} className="mt-4 mb-2">
              <Card className="shadow p-3 bg-white rounded">
                <Card.Header className="text-center">
                  <h5>Countries</h5>
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

<br></br>
        <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key:"AIzaSyB_ZZuFi35J3-17e64iqegfQZPphNn2vto"}}
          defaultCenter={{  lat: 30.3753,
            lng:69.3451}}
          defaultZoom={4}
        >
{allCountry}
        </GoogleMapReact>
      </div>
      </div>
    );
  }
}

export default Home;
