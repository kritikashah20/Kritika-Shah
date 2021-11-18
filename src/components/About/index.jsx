import { lazy, Suspense, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

import { title } from "../../Data/titles";
import { setTitle } from "../../Helpers/misc";

const AboutCard = lazy(() => import("./AboutCard"));
const EducationCard = lazy(() => import("./EducationCard"));
const WorkCard = lazy(() => import("./WorkCard"));
const Techstack = lazy(() => import("./Techstack"));
const Toolstack = lazy(() => import("./Toolstack"));


function About() {

  useEffect(() => {
    setTitle(title.about);
  }, [])

  return (
    <Container fluid className="about-section">

      <Suspense fallback={<div>Loading...</div>}>
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
                About <strong className="purple">ME</strong>
              </h1>
              <AboutCard />

            </Col>
          </Row>

          <h1 className="project-heading">
            Educational <strong className="purple">Qualification </strong>
          </h1>
          <div style={{ width: "60%", margin: "auto" }}>
            <EducationCard />
          </div>

          <h1 className="project-heading">
            Work <strong className="purple">Experience </strong>
          </h1>
          <div style={{ width: "60%", margin: "auto" }}>
            <WorkCard />
          </div>

          <h1 className="project-heading">
            Technical <strong className="purple">Skillset </strong>
          </h1>
          <Techstack />

          <h1 className="project-heading">
            <strong className="purple">Tools</strong> I use
          </h1>
          <Toolstack />

        </Container>
      </Suspense>

    </Container>
  );
}

export default About;
