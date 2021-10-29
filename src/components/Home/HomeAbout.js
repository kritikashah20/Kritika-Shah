import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import myImg from "../../Assets/avatar.svg";
// import Tilt from "react-parallax-tilt";

import { socialLinks } from "../../Data/links";

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
            {/* <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt> */}
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              {socialLinks.map((item, index) => (
                <li className="social-icons">
                <a
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  {item.icon}
                </a>
              </li>
              ))}
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default HomeAbout;
