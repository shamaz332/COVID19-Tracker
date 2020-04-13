import React, { Component } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import axios from "axios";
class Footer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      date: [],
    };
  }
  componentDidMount() {
    axios
      .get("https://corona.lmao.ninja/all")
      .then((response) => {
        this.setState({ date: response.data });
        console.log(response.data);
      })
      .catch((err) => {
        console.log("err");
      });
  }
  render() {
    const datee = new Date(parseInt(this.state.date.updated));
    const latestUpdated = datee.toString();
    return (
      <div>
        
<div class="footer">
  <h2 className="p-2">Last updated   {latestUpdated}</h2>
</div>
      </div>
    );
  }
}

export default Footer;
