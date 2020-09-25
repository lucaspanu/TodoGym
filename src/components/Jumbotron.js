import React from "react";
import { Jumbotron as Jumbo, Container } from "react-bootstrap";
import boatImage from "../assets/ImagenPortada2.jpg";

function Jumbotron() {
  return (
    <div>
      <Jumbo fluid className="jumbo">
        <div className="overlay">
          <Container>
            <h1>Welcome</h1>
            <p>ASDASDASDASDASDasdasd</p>
          </Container>
        </div>
      </Jumbo>
    </div>
  );
}

export default Jumbotron;
