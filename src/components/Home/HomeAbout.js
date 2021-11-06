import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar1.png";
import Tilt from "react-parallax-tilt";

function HomeAbout() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I fell in love with programming and I have at least learnt
              something, I think…
              <br />
              <br />I am fluent in languages like
              <i>
                <b className="purple"> C++, Javascript and Python. </b>
              </i>
              <br />
              <br />
              My field of Interests are building new &nbsp;
              <i>
                <b className="purple">Web Technologies based projects</b> and
                also in areas related to{" "}
                <b className="purple">
                  Artificial Intelligence, Machine Learning and Natural Launguage Processing.
                </b>
              </i>
              <br />
              <br />
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" style={{width:"200px", height:"200px"}} />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default HomeAbout;
