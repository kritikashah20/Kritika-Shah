import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";
import AboutCard from "./AboutCard";
import Toolstack from "./Toolstack";
import EducationCard from "./EducationCard";
import WorkCard from "./WorkCard";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Read About <strong className="purple">ME</strong>
            </h1>
            <AboutCard />
          </Col>
        </Row>

        <Row>
          <Col md={12} style={{ alignItems: "center" }}>
            <h1 className="project-heading">
              Educational <strong className="purple">Qualification </strong>
            </h1>

            <div style={{ width: "60%", margin: "auto" }}>
              <EducationCard />
            </div>
          </Col>
        </Row>

        <Row>
          <Col md={12}>
            <h1 className="project-heading">
              Work <strong className="purple">Experience </strong>
            </h1>

            <div style={{ width: "60%", margin: "auto" }}>
              <WorkCard />
            </div>
          </Col>
        </Row>
        <h1 className="project-heading">
          Technical <strong className="purple">Skillset </strong>
        </h1>
        <Techstack />
        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />
      </Container>
    </Container>
  );
}

export default About;
