import { useEffect } from "react";

import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import { projectData } from "../../Data/projects";

import { title } from "../../Data/titles";
import { setTitle } from "../../Helpers/misc";


function Projects() {
  useEffect(() => {
    setTitle(title.projects);
  }, [])
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Projects</strong>
        </h1>
        <p style={{ color: "white" }}>
        Here are a few of the many projects I have built.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {projectData.map((item, index) => (
            <Col md={4} className="project-card">
            <ProjectCard
              imgPath={item.image}
              title={item.title}
              description={item.desc}
              link={item.link}
            />
          </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
