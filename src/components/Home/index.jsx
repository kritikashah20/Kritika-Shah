import { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

import Home2 from "./HomeAbout";
import Type from "../../Helpers/Type";
import { title } from "../../Data/titles";
import { setTitle } from "../../Helpers/misc";

function Home() {

  useEffect(() => {
    setTitle(title.home);
  }, [])

  return (
    <section>
      <Container fluid className="home-section" id="home">
        
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There! <span className="wave" role="img" aria-labelledby="wave">👋🏻</span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> KRITIKA SHAH</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
